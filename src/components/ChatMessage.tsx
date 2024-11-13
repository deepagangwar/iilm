import React from 'react';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
}

export default function ChatMessage({ message, isBot }: ChatMessageProps) {
  return (
    <div className={`flex gap-3 ${isBot ? 'bg-gray-50' : ''} p-4 rounded-lg`}>
      {isBot ? (
        <Bot className="w-8 h-8 text-blue-600 flex-shrink-0" />
      ) : (
        <User className="w-8 h-8 text-gray-600 flex-shrink-0" />
      )}
      <div className="flex-1">
        <p className={`text-sm ${isBot ? 'text-gray-800' : 'text-gray-700'}`}>
          {message}
        </p>
      </div>
    </div>
  );
}