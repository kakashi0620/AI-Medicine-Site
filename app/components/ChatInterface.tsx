'use client'

import { useState } from 'react'
import styles from './ChatInterface.module.css'

interface Message {
  id: string
  text: string
  isUser: boolean
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! Tell me your symptoms.',
      isUser: false,
    },
  ])
  const [inputValue, setInputValue] = useState('')

  const handleSend = () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue('')

    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateAIResponse(inputValue),
        isUser: false,
      }
      setMessages((prev) => [...prev, aiResponse])
    }, 500)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend()
    }
  }

  return (
    <div className={styles.chatContainer}>
      <h2 className={styles.chatTitle}>Ask the AI Doctor</h2>
      <div className={styles.messagesContainer}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`${styles.message} ${
              message.isUser ? styles.userMessage : styles.aiMessage
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Describe your illness..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          className={styles.input}
        />
        <button onClick={handleSend} className={styles.sendButton}>
          Send
        </button>
      </div>
    </div>
  )
}

function generateAIResponse(userInput: string): string {
  const lowerInput = userInput.toLowerCase()
  
  // Simple response logic based on keywords
  if (lowerInput.includes('tired') && lowerInput.includes('sore throat')) {
    return "It sounds like you may have a common cold. Get plenty of rest and drink fluids."
  }
  if (lowerInput.includes('headache')) {
    return "Headaches can have various causes. Make sure you're staying hydrated and getting enough rest. If the headache persists or is severe, please consult a healthcare professional."
  }
  if (lowerInput.includes('fever')) {
    return "A fever can indicate an infection. Monitor your temperature and stay hydrated. If your fever is high (above 101°F) or persists for more than a few days, please see a doctor."
  }
  if (lowerInput.includes('stomach') || lowerInput.includes('nausea')) {
    return "Stomach issues can be caused by various factors. Try to stay hydrated, eat light foods, and avoid spicy or fatty foods. If symptoms persist or worsen, consult a healthcare provider."
  }
  
  // Default response
  return "Thank you for sharing your symptoms. Based on what you've described, I recommend monitoring your symptoms and ensuring you get adequate rest and hydration. If your symptoms persist or worsen, please consult with a certified healthcare professional for proper diagnosis and treatment."
}

