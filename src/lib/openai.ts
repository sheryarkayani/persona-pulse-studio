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
}

export class OpenAIService {
  static async generateTopicSuggestions(category: string, customTopic?: string): Promise<TopicSuggestion[]> {
    try {
      const prompt = customTopic 
        ? `Generate 8 specific and engaging LinkedIn post topics about "${customTopic}" in the "${category}" category. Each topic should be specific, actionable, and likely to get engagement on LinkedIn.`
        : `Generate 8 engaging LinkedIn post topics for the "${category}" category. Make them specific, actionable, and likely to get high engagement on LinkedIn.`;

      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are a LinkedIn content expert. Generate engaging, specific post topics that would perform well on LinkedIn. Return only a JSON array of objects with 'title' field for each topic. No additional text or formatting."
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

  static async generateLinkedInPost(
    category: string,
    topic: string,
    tone: string
  ): Promise<GeneratedPost> {
    try {
      const toneInstructions = {
        "Standard (authoritative)": "professional, authoritative, and informative",
        "Descriptive": "detailed, descriptive, and educational",
        "Casual": "casual, conversational, and friendly", 
        "Narrative": "storytelling, personal, and engaging",
        "Humorous": "light-hearted, humorous, and entertaining"
      };

      const toneStyle = toneInstructions[tone as keyof typeof toneInstructions] || "professional";

      const prompt = `Create a LinkedIn post about "${topic}" in the "${category}" category with a ${toneStyle} tone.

Requirements:
- Write in ${toneStyle} style
- 150-300 words optimal length
- Include engaging hook in first line
- Add 3-5 relevant hashtags
- Include a clear call-to-action
- Format for LinkedIn readability (short paragraphs, line breaks)
- Make it valuable and shareable

Return ONLY a JSON object with this structure:
{
  "content": "The main post content",
  "hashtags": ["hashtag1", "hashtag2", "hashtag3"],
  "callToAction": "The call to action text"
}`;

      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are an expert LinkedIn content creator. Create engaging, professional LinkedIn posts that drive engagement and provide value. Always return valid JSON only."
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
          hashtags: post.hashtags || [],
          callToAction: post.callToAction || ''
        };
      } catch {
        // Fallback if JSON parsing fails
        return {
          content: content,
          hashtags: ['#LinkedIn', '#Professional', '#Growth'],
          callToAction: 'What are your thoughts? Share in the comments below!'
        };
      }
    } catch (error) {
      console.error('Error generating LinkedIn post:', error);
      throw new Error('Failed to generate post. Please try again.');
    }
  }

  static async regenerateWithInstructions(
    originalContent: string,
    additionalInstructions: string
  ): Promise<GeneratedPost> {
    try {
      const prompt = `Take this LinkedIn post and modify it based on the additional instructions:

Original Post:
${originalContent}

Additional Instructions:
${additionalInstructions}

Return ONLY a JSON object with this structure:
{
  "content": "The modified post content",
  "hashtags": ["hashtag1", "hashtag2", "hashtag3"],
  "callToAction": "The call to action text"
}`;

      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are an expert LinkedIn content creator. Modify LinkedIn posts based on user feedback while maintaining professional quality and engagement. Always return valid JSON only."
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
        hashtags: post.hashtags || ['#LinkedIn', '#Professional'],
        callToAction: post.callToAction || 'Share your thoughts!'
      };
    } catch (error) {
      console.error('Error regenerating post:', error);
      throw new Error('Failed to regenerate post. Please try again.');
    }
  }
}

export default OpenAIService; 