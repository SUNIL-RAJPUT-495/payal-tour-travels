import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Sparkles, User, Bot } from 'lucide-react';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: 'Namaste! I am your Payal Travels AI Assistant. How can I help you plan your Jaipur trip today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = { id: Date.now(), type: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let botResponse = "";
      const input = userMessage.text.toLowerCase();

      if (input.includes('hi') || input.includes('hello')) {
        botResponse = "Hello! Looking for a premium car rental or a guided tour of Jaipur?";
      } else if (input.includes('price') || input.includes('cost')) {
        botResponse = "Our prices start from ₹800 for airport transfers and ₹1,500 for full-day city tours. Which service are you interested in?";
      } else if (input.includes('itinerary') || input.includes('plan')) {
        botResponse = "I recommend starting with Amer Fort in the morning, followed by Hawa Mahal and City Palace. We can provide an Innova Crysta for a comfortable day trip!";
      } else if (input.includes('car') || input.includes('vehicle')) {
        botResponse = "We have a premium fleet including Toyota Innova Crysta, Fortuner, and Luxury Sedans. All are sanitized and driven by professional chauffeurs.";
      } else {
        botResponse = "That sounds interesting! For specific bookings or custom packages, would you like me to connect you with our team on WhatsApp?";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, type: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 9999, fontFamily: 'Inter, sans-serif' }}>
      {/* Floating Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: '#34E0A1',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(52, 224, 161, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Sparkles size={28} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div style={{
          width: '380px',
          height: '550px',
          backgroundColor: 'white',
          borderRadius: '20px',
          boxShadow: '0 12px 48px rgba(0,0,0,0.15)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          border: '1px solid #E0E0E0'
        }}>
          {/* Header */}
          <div style={{
            padding: '20px',
            backgroundColor: '#34E0A1',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '8px', borderRadius: '12px' }}>
                <Bot size={24} />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 700 }}>Travel AI Assistant</h4>
                <p style={{ margin: 0, fontSize: '0.75rem', opacity: 0.9 }}>Powered by Payal Travels</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
              <X size={24} />
            </button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px', backgroundColor: '#F9F9F9' }}>
            {messages.map(msg => (
              <div key={msg.id} style={{
                alignSelf: msg.type === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '80%',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}>
                <div style={{
                  padding: '12px 16px',
                  borderRadius: msg.type === 'user' ? '18px 18px 2px 18px' : '18px 18px 18px 2px',
                  backgroundColor: msg.type === 'user' ? '#34E0A1' : 'white',
                  color: msg.type === 'user' ? 'white' : '#333',
                  boxShadow: msg.type === 'bot' ? '0 2px 8px rgba(0,0,0,0.05)' : 'none',
                  fontSize: '0.9rem',
                  lineHeight: '1.4'
                }}>
                  {msg.text}
                </div>
                <span style={{ fontSize: '0.7rem', color: '#AAA', alignSelf: msg.type === 'user' ? 'flex-end' : 'flex-start' }}>
                  {msg.type === 'user' ? 'You' : 'AI Assistant'}
                </span>
              </div>
            ))}
            {isTyping && (
              <div style={{ alignSelf: 'flex-start', color: '#AAA', fontSize: '0.8rem', fontStyle: 'italic' }}>
                AI is typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div style={{ padding: '20px', borderTop: '1px solid #E0E0E0', display: 'flex', gap: '10px', backgroundColor: 'white' }}>
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask anything about your trip..."
              style={{
                flex: 1,
                border: '1px solid #E0E0E0',
                borderRadius: '24px',
                padding: '10px 16px',
                outline: 'none',
                fontSize: '0.9rem'
              }}
            />
            <button 
              onClick={handleSend}
              style={{
                backgroundColor: '#34E0A1',
                color: 'white',
                border: 'none',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
