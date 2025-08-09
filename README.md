# Persona Pulse Studio - Instagram Content Creation Platform

An AI-powered Instagram content creation platform that helps you generate engaging posts, scripts, and lead magnets.

## Features

- **Instagram Content Creation**: Generate posts, captions, and hashtags optimized for Instagram
- **Script Writing**: Create compelling scripts for Instagram Reels and Stories with powerful hooks
- **Lead Magnet Generation**: Design irresistible lead magnets to grow your Instagram audience
- **AI-Powered**: Uses OpenAI GPT-4 for intelligent content generation
- **Professional Formatting**: Clean, emoji-free content with proper spacing and structure

## Setup Instructions

### 1. Environment Variables

Create a `.env` file in the root directory and add your OpenAI API key:

```env
VITE_OPENAI_API_KEY=your_openai_api_key_here
```

To get an OpenAI API key:
1. Go to [OpenAI API](https://platform.openai.com/api-keys)
2. Sign up or log in to your account
3. Create a new API key
4. Copy the key and paste it in your `.env` file

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

## Content Categories

The platform supports three main content categories:

1. **Script Writing**: Perfect for Instagram Reels and Stories - includes hooks and full scripts
2. **Post Writing**: Engaging Instagram posts optimized for feed and carousel content  
3. **Lead Magnet**: Content designed to capture leads and grow your Instagram audience

## Content Tones

Choose from various content tones:
- Educational
- Entertainment
- Inspirational
- Behind-the-scenes
- Storytelling

## Features Overview

- **AI Topic Suggestions**: Get AI-generated topic ideas based on your category
- **Custom Topics**: Use your own topics for content generation
- **Hook Generation**: Compelling opening lines for maximum engagement
- **Video Scripts**: Full scripts for Reels and Stories
- **Hashtag Optimization**: 8-12 relevant hashtags (mix of popular and niche)
- **Call-to-Action**: Clear CTAs to drive engagement
- **Professional Formatting**: Clean, well-structured content without emojis

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Radix UI Components
- OpenAI API
- React Router
- Lucide Icons

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Application pages
├── lib/           # Utilities and services
├── hooks/         # Custom React hooks
└── assets/        # Static assets
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
