import { NextRequest, NextResponse } from 'next/server'

const CHATBASE_API_KEY = process.env.CHATBASE_API_KEY
const CHATBOT_ID = process.env.NEXT_PUBLIC_CHATBASE_CHATBOT_ID

// Maximum chatbot API calls per session
const MAX_API_CALLS = 5

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

    // Check if API call limit reached or API keys not configured
    if (apiCallCount >= MAX_API_CALLS || !CHATBASE_API_KEY || !CHATBOT_ID) {
      console.log('Using fallback: API limit reached or keys not configured')
      console.log('API Key exists:', !!CHATBASE_API_KEY, 'Chatbot ID exists:', !!CHATBOT_ID)
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

    const requestBody: any = {
      chatbotId: CHATBOT_ID,
      messages: messages,
      stream: false,
    }

    // Add conversationId if provided for tracking
    if (conversationId) {
      requestBody.conversationId = conversationId
    }

    console.log('Sending request to Chatbase:', {
      chatbotId: CHATBOT_ID,
      messageCount: messages.length,
      hasApiKey: !!CHATBASE_API_KEY
    })

    const response = await fetch('https://www.chatbase.co/api/v1/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${CHATBASE_API_KEY}`,
      },
      body: JSON.stringify(requestBody),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Chatbase API error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorText,
        chatbotId: CHATBOT_ID
      })
      // Return fallback instead of error
      return NextResponse.json(
        { useFallback: true, message: `Chatbase API error: ${response.status}` },
        { status: 200 }
      )
    }

    const data = await response.json()
    return NextResponse.json({ ...data, useFallback: false })
  } catch (error) {
    console.error('Chat API error:', error)
    // Return fallback instead of error
    return NextResponse.json(
      { useFallback: true, message: 'Internal server error' },
      { status: 200 }
    )
  }
}
