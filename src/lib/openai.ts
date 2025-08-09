import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export interface TopicSuggestion {
  title: string;
  description?: string;
}

export interface GeneratedPost {
  content: string;
  hashtags: string[];
  callToAction: string;
  hook?: string;
  script?: string;
}

export class OpenAIService {
  static async generateTopicSuggestions(category: string, customTopic?: string): Promise<TopicSuggestion[]> {
    try {
      const prompt = customTopic 
        ? `Generate 8 specific and engaging Instagram post topics about "${customTopic}" in the "${category}" category. Each topic should be specific, actionable, and optimized for Instagram engagement with reels, stories, and posts.`
        : `Generate 8 engaging Instagram post topics for the "${category}" category. Make them specific, actionable, and optimized for Instagram engagement including reels, stories, and carousel posts.`;

      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are an Instagram content expert specializing in viral content creation. Generate engaging, specific post topics that would perform well on Instagram across all formats - reels, stories, posts, and carousels. Return only a JSON array of objects with 'title' field for each topic. No additional text or formatting."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        max_tokens: 1000,
        temperature: 0.8
      });

      const content = response.choices[0]?.message?.content?.trim();
      if (!content) throw new Error('No response from OpenAI');

      // Try to parse JSON response
      try {
        const topics = JSON.parse(content);
        return Array.isArray(topics) ? topics : [];
      } catch {
        // Fallback: parse manually if not JSON
        const lines = content.split('\n').filter(line => line.trim());
        return lines.slice(0, 8).map((line: string, index: number) => ({
          title: line.replace(/^\d+\.?\s*/, '').replace(/^-\s*/, '').trim()
        }));
      }
    } catch (error) {
      console.error('Error generating topic suggestions:', error);
      return [];
    }
  }

  static async generateInstagramPost(
    category: string,
    topic: string,
    tone: string
  ): Promise<GeneratedPost> {
    try {
      const toneInstructions = {
        "Educational": "informative, educational, and value-driven",
        "Entertainment": "fun, engaging, and entertaining", 
        "Inspirational": "motivational, inspiring, and uplifting",
        "Behind-the-scenes": "authentic, personal, and relatable",
        "Storytelling": "narrative-driven, emotional, and compelling"
      };

      const toneStyle = toneInstructions[tone as keyof typeof toneInstructions] || "engaging";

      const prompt = `Create Instagram content about "${topic}" in the "${category}" category with a ${toneStyle} tone.

Requirements:
- Write in ${toneStyle} style
- Create content for Instagram format (concise, visual-friendly)
- Include a compelling hook for the first line
- Generate a video script if applicable (for reels/stories)
- Add 8-12 relevant hashtags (mix of popular and niche)
- Include a clear call-to-action
- Format for Instagram readability (short paragraphs, line breaks)
- Make it valuable and shareable
- NO EMOJIS - use clean text only
- Professional formatting with proper spacing
- Focus on engagement and value

Return ONLY a JSON object with this structure:
{
  "content": "The main post content",
  "hook": "Compelling opening line",
  "script": "Video script for reels/stories (if applicable)",
  "hashtags": ["hashtag1", "hashtag2", "hashtag3"],
  "callToAction": "The call to action text"
}`;

      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are an expert Instagram content creator specializing in viral content across all Instagram formats. Create engaging, professional Instagram content that drives engagement and provides value. Always return valid JSON only. Never use emojis - focus on clean, professional text formatting."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        max_tokens: 1500,
        temperature: 0.7
      });

      const content = response.choices[0]?.message?.content?.trim();
      if (!content) throw new Error('No response from OpenAI');

      try {
        const post = JSON.parse(content);
        return {
          content: post.content || '',
          hook: post.hook || '',
          script: post.script || '',
          hashtags: post.hashtags || [],
          callToAction: post.callToAction || ''
        };
      } catch {
        // Fallback if JSON parsing fails
        return {
          content: content,
          hook: 'Attention-grabbing opening line',
          script: 'Video script content',
          hashtags: ['#Instagram', '#Content', '#Growth'],
          callToAction: 'What are your thoughts? Share in the comments below!'
        };
      }
    } catch (error) {
      console.error('Error generating Instagram post:', error);
      throw new Error('Failed to generate post. Please try again.');
    }
  }

  static async regenerateWithInstructions(
    originalContent: string,
    additionalInstructions: string
  ): Promise<GeneratedPost> {
    try {
      const prompt = `Take this Instagram content and modify it based on the additional instructions:

Original Content:
${originalContent}

Additional Instructions:
${additionalInstructions}

Requirements:
- NO EMOJIS - use clean text only
- Professional formatting with proper spacing
- Maintain Instagram best practices
- Keep content engaging and valuable

Return ONLY a JSON object with this structure:
{
  "content": "The modified post content",
  "hook": "Updated hook line",
  "script": "Updated video script (if applicable)",
  "hashtags": ["hashtag1", "hashtag2", "hashtag3"],
  "callToAction": "The call to action text"
}`;

      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are an expert Instagram content creator. Modify Instagram content based on user feedback while maintaining professional quality and engagement. Always return valid JSON only. Never use emojis - focus on clean, professional text formatting."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        max_tokens: 1500,
        temperature: 0.7
      });

      const content = response.choices[0]?.message?.content?.trim();
      if (!content) throw new Error('No response from OpenAI');

      const post = JSON.parse(content);
      return {
        content: post.content || originalContent,
        hook: post.hook || '',
        script: post.script || '',
        hashtags: post.hashtags || ['#Instagram', '#Content'],
        callToAction: post.callToAction || 'Share your thoughts!'
      };
    } catch (error) {
      console.error('Error regenerating post:', error);
      throw new Error('Failed to regenerate post. Please try again.');
    }
  }
}

export default OpenAIService; 