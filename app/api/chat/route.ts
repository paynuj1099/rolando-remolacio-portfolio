import { NextRequest, NextResponse } from 'next/server'

const CHATBASE_API_KEY = process.env.CHATBASE_API_KEY || '8bd89eec-c117-458c-9a43-8c7aabce55be'
const CHATBOT_ID = process.env.NEXT_PUBLIC_CHATBASE_CHATBOT_ID || 'kgFk4M06j__SjfgdeXWeY'

export async function POST(request: NextRequest) {
  try {
    const { messages, conversationId } = await request.json()

    // Validate input
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Invalid messages format' },
        { status: 400 }
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
      console.error('Chatbase API error:', response.status, errorText)
      return NextResponse.json(
        { error: 'Failed to get response from Chatbase' },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
