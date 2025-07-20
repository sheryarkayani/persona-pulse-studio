import { useState } from 'react';
import { supabase } from '../../supabase';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Mail, Lock, Eye, EyeOff, CheckCircle, User } from 'lucide-react';

const Signup = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      
      if (error) {
        throw error;
      }
      
      setSuccess('Account created successfully! Check your email for the confirmation link.');
      
      // Auto redirect to onboarding after 4 seconds
      setTimeout(() => {
        navigate('/onboarding');
      }, 4000);
    } catch (error: any) {
      setError(error.error_description || error.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#f5faff] to-[#eaf2ff] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,#2563eb11_0%,#38b6ff09_60%,transparent_100%)]" style={{filter:'blur(12px)'}} />
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-20 blur-xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo/Brand Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#2563eb] to-[#38b6ff] rounded-2xl mb-4 shadow-lg">
            <span className="text-white font-bold text-xl" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>R</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
            Join RepicAI
          </h1>
          <p className="text-gray-600" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
            Create your account and start your AI journey
          </p>
        </div>

        {/* Signup Form */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">
          <form onSubmit={handleSignup} className="space-y-6">
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-2xl text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  {error}
                </div>
              </div>
            )}

            {success && (
              <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-2xl text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  {success}
                </div>
              </div>
            )}

            {/* Features Preview */}
            <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl">
              <p className="text-sm text-blue-800 font-medium mb-2" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                🚀 What you'll get:
              </p>
              <ul className="text-xs text-blue-600 space-y-1" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                <li>• AI-powered content creation</li>
                <li>• Social media automation</li>
                <li>• Advanced analytics dashboard</li>
              </ul>
            </div>
            
            {/* Email Field */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                  style={{ fontFamily: 'Inter, Poppins, sans-serif' }}
                  required
                  disabled={loading}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password (min 6 characters)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                  style={{ fontFamily: 'Inter, Poppins, sans-serif' }}
                  required
                  minLength={6}
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                Password must be at least 6 characters long
              </p>
            </div>

            {/* Terms and Conditions */}
            <div className="text-xs text-gray-600" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
              By creating an account, you agree to our{' '}
              <a href="#" className="text-blue-500 hover:underline">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>.
            </div>

            {/* Signup Button */}
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-[#2563eb] to-[#38b6ff] text-white font-semibold py-4 rounded-2xl shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-200 flex items-center justify-center gap-2"
              style={{ fontFamily: 'Inter, Poppins, sans-serif' }}
              disabled={loading}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Creating Account...
                </>
              ) : (
                <>
                  <User className="w-5 h-5" />
                  Create Account
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
                  Already have an account?
                </span>
              </div>
            </div>

            {/* Login Link */}
            <button
              type="button"
              onClick={() => navigate('/login')}
              className="w-full py-4 border-2 border-gray-200 text-gray-700 font-semibold rounded-2xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
              style={{ fontFamily: 'Inter, Poppins, sans-serif' }}
            >
              Sign In Instead
            </button>
          </form>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <button
            onClick={() => navigate('/')}
            className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            style={{ fontFamily: 'Inter, Poppins, sans-serif' }}
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup; 