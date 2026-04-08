import { NextRequest, NextResponse } from 'next/server'
import { getExperienceDescription } from '@/lib/experience'

const GEMINI_API_KEY = process.env.GEMINI_API_KEY

// Maximum chatbot API calls per session
const MAX_API_CALLS = 10

// System prompt for the chatbot
const SYSTEM_PROMPT = `You are Neo, an AI assistant for Rolando Jr. Remolacio's portfolio website. You should be helpful, friendly, and informative.

About Rolando Jr. Remolacio:
- Current Position: Full Stack Developer at Practice AI (Remote) - December 2025 to Present
  Working on AI features, microservices, .NET backend, subscriptions, and Blazor frontends for modern web apps
- Previous Position: Programmer Analyst at Vertere Global Solutions, Inc. (Hybrid) - April 2025 to December 2025
  Full-stack development using .NET, C#, JavaScript, and React. Built enterprise applications with Azure DevOps, MS SQL
- Earlier Position: Assistant Engineer 1 at ROHM Electronics Philippines, Inc. (On-site) - May 2023 to April 2025
  Developed web applications, maintained and enhanced existing systems
- Education: BS Computer Engineering, Cavite State University - Carmona (Graduated 2023)
- Experience: ${getExperienceDescription()} of full-stack development
- Backend Skills: .NET/Core (${require('@/lib/experience').calculateSkillYears(2023, 5)}), C# (${require('@/lib/experience').calculateSkillYears(2023, 5)}), VB.Net (${require('@/lib/experience').calculateSkillYears(2023, 5)}), Node.js (${require('@/lib/experience').calculateSkillYears(2024, 5)}), REST API (${require('@/lib/experience').calculateSkillYears(2023, 5)})
- Frontend Skills: JavaScript (${require('@/lib/experience').calculateSkillYears(2023, 5)}), TypeScript (${require('@/lib/experience').calculateSkillYears(2025, 1)}), React (${require('@/lib/experience').calculateSkillYears(2025, 1)}), Next.js (${require('@/lib/experience').calculateSkillYears(2025, 1)}), Blazor (${require('@/lib/experience').calculateSkillYears(2025, 1)}), Tailwind CSS (${require('@/lib/experience').calculateSkillYears(2025, 1)})
- Database: MS SQL Server (${require('@/lib/experience').calculateSkillYears(2023, 5)}), MySQL (${require('@/lib/experience').calculateSkillYears(2024, 5)}), Database Design (${require('@/lib/experience').calculateSkillYears(2023, 5)})
- DevOps & Cloud: Azure DevOps (${require('@/lib/experience').calculateSkillYears(2025, 1)}), CI/CD (${require('@/lib/experience').calculateSkillYears(2025, 1)}), Jira (${require('@/lib/experience').calculateSkillYears(2025, 1)})
- Projects: Assisteon Staffing (live), Product Landing Page, Modern Portfolio, Web Development Agency Site, and various enterprise applications
- Contact: rolandojrremolacio@gmail.com, +639625871454
- Location: San Pedro, Laguna, Philippines
- Social: GitHub (paynuj1099), LinkedIn (rolando-remolacio)
- Resume: Available at /resume.pdf
- Currently available for freelance projects and opportunities

Answer questions about his background, skills, experience, and projects. Be conversational and helpful. If asked about his resume or CV, mention it's available for download.`

export async function POST(request: NextRequest) {
  try {
    const { messages, conversationId, apiCallCount = 0 } = await request.json()

    // Validate input
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Invalid messages format', useFallback: true },
        { status: 400 }
      )
    }

    // Check if API call limit reached or API key not configured
    if (apiCallCount >= MAX_API_CALLS || !GEMINI_API_KEY) {
      console.log('Using fallback: API limit reached or key not configured')
      return NextResponse.json(
        { 
          useFallback: true, 
          message: apiCallCount >= MAX_API_CALLS 
            ? 'API limit reached for this session' 
            : 'API not configured'
        },
        { status: 200 }
      )
    }

    // Format messages for Gemini API
    const contents = messages.map((msg: any) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }))

    // Add system prompt as first message
    contents.unshift({
      role: 'user',
      parts: [{ text: SYSTEM_PROMPT }]
    })
    contents.splice(1, 0, {
      role: 'model',
      parts: [{ text: 'Understood! I\'m Neo, the AI assistant for Rolando Jr. Remolacio\'s portfolio. How can I help you today?' }]
    })

    console.log('Sending request to Gemini API:', {
      messageCount: messages.length,
      hasApiKey: !!GEMINI_API_KEY
    })

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: contents,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 800,
            topP: 0.8,
            topK: 40
          }
        }),
      }
    )

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Gemini API error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorText
      })
      // Return fallback instead of error
      return NextResponse.json(
        { useFallback: true, message: `Gemini API error: ${response.status}` },
        { status: 200 }
      )
    }

    const data = await response.json()
    
    // Extract the response text from Gemini's response format
    const aiMessage = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not generate a response.'
    
    return NextResponse.json({ 
      text: aiMessage,
      useFallback: false 
    })
  } catch (error) {
    console.error('Chat API error:', error)
    // Return fallback instead of error
    return NextResponse.json(
      { useFallback: true, message: 'Internal server error' },
      { status: 200 }
    )
  }
}
