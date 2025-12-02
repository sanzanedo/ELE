import React from 'react';
import { Question, QuestionOption } from '../types';
import AIExplanationButton from './AIExplanationButton';

interface Props {
  question: Question;
  selectedOptionId: string | undefined;
  onSelect: (optionId: string) => void;
  isSubmitted: boolean;
}

const QuestionCard: React.FC<Props> = ({ question, selectedOptionId, onSelect, isSubmitted }) => {
  const isCorrect = isSubmitted && selectedOptionId === question.correctAnswerId;
  const isWrong = isSubmitted && selectedOptionId !== question.correctAnswerId;

  return (
    <div className="mb-6 p-4 md:p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-medium text-gray-800 mb-4">
        {question.text.includes('_______') ? (
          <span>
            {question.text.split('_______')[0]}
            <span className="inline-block w-24 border-b-2 border-gray-400 mx-1"></span>
            {question.text.split('_______')[1]}
          </span>
        ) : (
          question.text
        )}
      </h3>

      <div className="space-y-2">
        {question.options.map((option: QuestionOption) => {
          let optionClass = "w-full text-left p-3 rounded border transition-all duration-200 flex items-center justify-between ";
          
          if (isSubmitted) {
            if (option.id === question.correctAnswerId) {
              optionClass += "bg-green-100 border-green-500 text-green-800 font-semibold";
            } else if (selectedOptionId === option.id) {
              optionClass += "bg-red-50 border-red-500 text-red-800";
            } else {
              optionClass += "bg-gray-50 border-gray-100 text-gray-400 opacity-60";
            }
          } else {
            if (selectedOptionId === option.id) {
              optionClass += "bg-blue-50 border-cervantes-blue text-cervantes-blue font-medium ring-1 ring-cervantes-blue";
            } else {
              optionClass += "bg-white border-gray-200 hover:bg-gray-50 text-gray-700";
            }
          }

          return (
            <button
              key={option.id}
              onClick={() => !isSubmitted && onSelect(option.id)}
              disabled={isSubmitted}
              className={optionClass}
            >
              <span>
                <span className="inline-block w-6 font-bold">{option.id.split('-')[1].toUpperCase()}.</span> 
                {option.text}
              </span>
              
              {isSubmitted && option.id === question.correctAnswerId && (
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              )}
              {isSubmitted && selectedOptionId === option.id && option.id !== question.correctAnswerId && (
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              )}
            </button>
          );
        })}
      </div>

      {isWrong && selectedOptionId && (
        <AIExplanationButton question={question} selectedOptionId={selectedOptionId} />
      )}
    </div>
  );
};

export default QuestionCard;