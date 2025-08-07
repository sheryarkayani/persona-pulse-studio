import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabase';
import { ArrowRight, ArrowLeft, CheckCircle, User, Target, Zap, BarChart3, Clock, Users, Camera, Briefcase, TrendingUp, MessageSquare, Sparkles, Globe, Heart } from 'lucide-react';

interface OnboardingData {
  // Basic Info
  fullName: string;
  businessName: string;
  userType: string;
  industry: string;
  
  // Current State
  experienceLevel: string;
  currentFollowing: string;
  primaryPlatform: string;
  contentFrequency: string;
  
  // Goals & Challenges
  primaryGoal: string;
  biggestChallenge: string;
  contentTypes: string[];
  targetAudience: string;
  
  // Business Focus
  monetization: string;
  timeAvailable: string;
  teamSize: string;
}

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState<OnboardingData>({
    fullName: '',
    businessName: '',
    userType: '',
    industry: '',
    experienceLevel: '',
    currentFollowing: '',
    primaryPlatform: '',
    contentFrequency: '',
    primaryGoal: '',
    biggestChallenge: '',
    contentTypes: [],
    targetAudience: '',
    monetization: '',
    timeAvailable: '',
    teamSize: ''
  });

  const totalSteps = 5;

  const updateFormData = (field: keyof OnboardingData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayUpdate = (field: keyof OnboardingData, value: string) => {
    const currentArray = formData[field] as string[];
    const newArray = currentArray.includes(value)
      ? currentArray.filter(item => item !== value)
      : [...currentArray, value];
    updateFormData(field, newArray);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user) {
        // Update user profile with onboarding data
        const { error } = await supabase
          .from('profiles')
          .update({
            full_name: formData.fullName,
            onboarding_data: formData,
            onboarding_completed: true,
            updated_at: new Date().toISOString()
          })
          .eq('id', user.id);

        if (error) throw error;
        
        // Redirect to dashboard
        navigate('/app');
      }
    } catch (error) {
      console.error('Error saving onboarding data:', error);
      // Continue to dashboard even if onboarding save fails
      navigate('/app');
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
    else handleSubmit();
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <User className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                Let's Get to Know You
              </h2>
              <p className="text-gray-600" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                Tell us about yourself and your business
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  What's your full name? *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => updateFormData('fullName', e.target.value)}
                  className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Business/Brand Name (Optional)
                </label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => updateFormData('businessName', e.target.value)}
                  className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your business or brand name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Which best describes you? *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Content Creator', 'Solopreneur', 'Influencer', 'Consultant',
                    'Coach', 'Freelancer', 'Entrepreneur', 'Agency Owner'
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => updateFormData('userType', type)}
                      className={`p-3 rounded-xl border-2 text-sm font-medium transition-all ${
                        formData.userType === type
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  What industry are you in? *
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => updateFormData('industry', e.target.value)}
                  className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select your industry</option>
                  <option value="Technology">Technology</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Health & Fitness">Health & Fitness</option>
                  <option value="Finance">Finance</option>
                  <option value="Education">Education</option>
                  <option value="Lifestyle">Lifestyle</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Food & Beverage">Food & Beverage</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Creative Arts">Creative Arts</option>
                  <option value="Business Services">Business Services</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Target className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                Your Current Brand State
              </h2>
              <p className="text-gray-600" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                Help us understand where you are today
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  How experienced are you with personal branding? *
                </label>
                <div className="space-y-2">
                  {[
                    'Complete beginner - just getting started',
                    'Some experience - inconsistent results',
                    'Moderate experience - looking to scale',
                    'Very experienced - want to optimize'
                  ].map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => updateFormData('experienceLevel', level)}
                      className={`w-full p-3 text-left rounded-xl border-2 text-sm transition-all ${
                        formData.experienceLevel === level
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  What's your current social media following? *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Under 1K', '1K - 10K', '10K - 50K', '50K - 100K', '100K - 500K', '500K+'
                  ].map((range) => (
                    <button
                      key={range}
                      type="button"
                      onClick={() => updateFormData('currentFollowing', range)}
                      className={`p-3 rounded-xl border-2 text-sm font-medium transition-all ${
                        formData.currentFollowing === range
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Which platform drives most of your business? *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Instagram', 'LinkedIn', 'Twitter/X', 'TikTok', 'YouTube', 'Facebook', 'Website/Blog', 'Other'
                  ].map((platform) => (
                    <button
                      key={platform}
                      type="button"
                      onClick={() => updateFormData('primaryPlatform', platform)}
                      className={`p-3 rounded-xl border-2 text-sm font-medium transition-all ${
                        formData.primaryPlatform === platform
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Camera className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                Content & Creation
              </h2>
              <p className="text-gray-600" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                Tell us about your content creation habits
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  How often do you currently post content? *
                </label>
                <div className="space-y-2">
                  {[
                    'Rarely or never',
                    'Once a week or less',
                    '2-3 times per week',
                    'Daily',
                    'Multiple times per day'
                  ].map((freq) => (
                    <button
                      key={freq}
                      type="button"
                      onClick={() => updateFormData('contentFrequency', freq)}
                      className={`w-full p-3 text-left rounded-xl border-2 text-sm transition-all ${
                        formData.contentFrequency === freq
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {freq}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  What type of content do you want to create? (Select all that apply) *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Educational posts', 'Behind-the-scenes', 'Product demos', 'Industry insights',
                    'Personal stories', 'Tips & tutorials', 'Inspirational quotes', 'Video content',
                    'Infographics', 'Case studies', 'Live sessions', 'Polls & engagement'
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => handleArrayUpdate('contentTypes', type)}
                      className={`p-3 rounded-xl border-2 text-sm font-medium transition-all ${
                        formData.contentTypes.includes(type)
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Who is your target audience? *
                </label>
                <textarea
                  value={formData.targetAudience}
                  onChange={(e) => updateFormData('targetAudience', e.target.value)}
                  className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe your ideal audience (age, interests, profession, etc.)"
                  rows={3}
                  required
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                Goals & Challenges
              </h2>
              <p className="text-gray-600" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                What are you trying to achieve?
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  What's your primary goal with personal branding? *
                </label>
                <div className="space-y-2">
                  {[
                    'Generate more leads and sales',
                    'Build authority and credibility in my niche',
                    'Grow my social media following',
                    'Attract high-value clients and partnerships',
                    'Establish thought leadership',
                    'Create additional revenue streams',
                    'Build a community around my brand'
                  ].map((goal) => (
                    <button
                      key={goal}
                      type="button"
                      onClick={() => updateFormData('primaryGoal', goal)}
                      className={`w-full p-3 text-left rounded-xl border-2 text-sm transition-all ${
                        formData.primaryGoal === goal
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {goal}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  What's your biggest challenge right now? *
                </label>
                <div className="space-y-2">
                  {[
                    'Not enough time for content creation',
                    'Running out of content ideas',
                    'Inconsistent posting schedule',
                    'Low engagement rates',
                    'Difficulty measuring ROI',
                    'Managing multiple platforms',
                    'Creating professional-looking content',
                    'Converting followers to customers'
                  ].map((challenge) => (
                    <button
                      key={challenge}
                      type="button"
                      onClick={() => updateFormData('biggestChallenge', challenge)}
                      className={`w-full p-3 text-left rounded-xl border-2 text-sm transition-all ${
                        formData.biggestChallenge === challenge
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {challenge}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  How do you currently monetize your brand? *
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'Services/Consulting',
                    'Digital products/courses',
                    'Physical products',
                    'Affiliate marketing',
                    'Sponsorships/Brand partnerships',
                    'Speaking engagements',
                    'Not monetizing yet'
                  ].map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => updateFormData('monetization', method)}
                      className={`p-3 text-left rounded-xl border-2 text-sm transition-all ${
                        formData.monetization === method
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                Let's Optimize Your Setup
              </h2>
              <p className="text-gray-600" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                Final details to personalize your experience
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  How much time can you dedicate to branding per week? *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Less than 2 hours',
                    '2-5 hours',
                    '5-10 hours',
                    '10-20 hours',
                    '20+ hours',
                    'Full-time focus'
                  ].map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => updateFormData('timeAvailable', time)}
                      className={`p-3 rounded-xl border-2 text-sm font-medium transition-all ${
                        formData.timeAvailable === time
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Do you have a team helping with your brand? *
                </label>
                <div className="space-y-2">
                  {[
                    'Just me - solo operation',
                    'Me + 1 part-time helper',
                    'Small team (2-3 people)',
                    'Larger team (4+ people)',
                    'Working with agencies/freelancers'
                  ].map((team) => (
                    <button
                      key={team}
                      type="button"
                      onClick={() => updateFormData('teamSize', team)}
                      className={`w-full p-3 text-left rounded-xl border-2 text-sm transition-all ${
                        formData.teamSize === team
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {team}
                    </button>
                  ))}
                </div>
              </div>

              {/* Summary */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl mt-8">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  You're All Set!
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                  Based on your answers, we'll customize RepicAI to help you:
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Create content that resonates with your {formData.targetAudience || 'target audience'}</li>
                  <li>• Focus on {formData.primaryGoal || 'your primary goals'}</li>
                  <li>• Solve your challenge with {formData.biggestChallenge || 'content creation'}</li>
                  <li>• Optimize for your {formData.timeAvailable || 'available time'}</li>
                </ul>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.fullName && formData.userType && formData.industry;
      case 2:
        return formData.experienceLevel && formData.currentFollowing && formData.primaryPlatform;
      case 3:
        return formData.contentFrequency && formData.contentTypes.length > 0 && formData.targetAudience;
      case 4:
        return formData.primaryGoal && formData.biggestChallenge && formData.monetization;
      case 5:
        return formData.timeAvailable && formData.teamSize;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#f5faff] to-[#eaf2ff] py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
              Welcome to RepicAI
            </h1>
            <span className="text-sm text-gray-500">
              Step {step} of {totalSteps}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">
          {renderStepContent()}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={prevStep}
              disabled={step === 1}
              className="flex items-center gap-2 px-6 py-3 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:text-gray-800 transition-colors"
              style={{ fontFamily: 'Inter, Poppins, sans-serif' }}
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </button>

            <button
              onClick={nextStep}
              disabled={!isStepValid() || loading}
              className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#2563eb] to-[#38b6ff] text-white rounded-2xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-all"
              style={{ fontFamily: 'Inter, Poppins, sans-serif' }}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Setting up...
                </>
              ) : step === totalSteps ? (
                <>
                  Complete Setup
                  <CheckCircle className="w-4 h-4" />
                </>
              ) : (
                <>
                  Next
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Skip Option */}
        <div className="text-center mt-6">
          <button
            onClick={() => navigate('/app')}
            className="text-gray-500 hover:text-gray-700 text-sm transition-colors"
            style={{ fontFamily: 'Inter, Poppins, sans-serif' }}
          >
            Skip for now →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding; 