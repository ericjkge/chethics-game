'use client';

import { Choice } from '../types/game';

interface ChoiceButtonProps {
  choice: Choice;
  onSelect: (choice: Choice) => void;
}

export default function ChoiceButton({ choice, onSelect }: ChoiceButtonProps) {
  return (
    <button
      onClick={() => onSelect(choice)}
      className="w-full flex flex-col bg-black border-4 border-gray-600 hover:border-white p-4 text-left transition-none group relative overflow-hidden"
    >
      {/* Selection Indicator */}
      <div className="absolute left-2 top-4 opacity-0 group-hover:opacity-100 text-white text-lg font-bold">
        ▶
      </div>

      <div className="pl-6 w-full">
        <h3 className="text-lg font-bold text-yellow-400 mb-2 group-hover:text-white group-hover:underline decoration-4 underline-offset-4 uppercase leading-tight">
          {choice.title}
        </h3>
        <p className="text-gray-300 text-base leading-relaxed font-mono">
          {choice.description}
        </p>
      </div>
      
      {/* Payoffs removed as per request - shown after selection */}
    </button>
  );
}
