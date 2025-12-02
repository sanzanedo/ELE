import React, { useState } from 'react';
import { Question } from '../types';
import { explainError } from '../services/geminiService';

interface Props {
  question: Question;
  selectedOptionId: string;
}

const AIExplanationButton: React.FC<Props> = ({ question, selectedOptionId }) => {
  const [loading, setLoading] = useState(false);
  const [explanation, setExplanation] = useState<string | null>(null);

  const handleExplain = async () => {
    setLoading(true);
    const text = await explainError(question, selectedOptionId);
    setExplanation(text);
    setLoading(false);
  };

  if (explanation) {
    return (
      <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-md text-sm text-blue-900 animate-fade-in">
        <div className="flex items-center gap-2 mb-1 font-bold text-cervantes-blue">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          Tutor IA:
        </div>
        <p>{explanation}</p>
      </div>
    );
  }

  return (
    <button
      onClick={handleExplain}
      disabled={loading}
      className="mt-2 text-xs flex items-center gap-1 text-cervantes-blue hover:text-cervantes-red transition-colors underline decoration-dotted"
    >
      {loading ? (
        <span>Consultando al tutor...</span>
      ) : (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Explicar error con IA
        </>
      )}
    </button>
  );
};

export default AIExplanationButton;