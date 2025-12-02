import React, { useState } from 'react';
import ExamHeader from './components/ExamHeader';
import QuestionCard from './components/QuestionCard';
import { EXAM_DATA } from './data/examContent';
import { SectionType } from './types';

function App() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelectAnswer = (questionId: string, optionId: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionId
    }));
  };

  const calculateScore = () => {
    let newScore = 0;
    let totalQuestions = 0;

    EXAM_DATA.forEach(section => {
      section.questions.forEach(q => {
        totalQuestions++;
        if (answers[q.id] === q.correctAnswerId) {
          newScore++;
        }
      });
    });

    setScore(newScore);
    setSubmitted(true);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const totalQuestions = EXAM_DATA.reduce((acc, section) => acc + section.questions.length, 0);
  const isComplete = EXAM_DATA.every(section => 
    section.questions.every(q => !!answers[q.id])
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <ExamHeader />

      <main className="flex-grow w-full max-w-4xl mx-auto px-4 py-8">
        
        {EXAM_DATA.map((section) => (
          <section key={section.id} className="mb-12 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6 border-b-2 border-cervantes-blue pb-2">
               <span className="bg-cervantes-blue text-white text-sm font-bold px-2 py-1 rounded">
                 {section.type === SectionType.READING ? 'PRUEBA 1' : 'PRUEBA 2'}
               </span>
               <h2 className="text-xl md:text-2xl font-serif font-bold text-cervantes-blue">
                 {section.title}
               </h2>
            </div>

            {section.content && (
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200 mb-8 leading-relaxed text-gray-700 font-serif text-lg">
                {section.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-4 last:mb-0 indent-6 text-justify">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            <div className={`grid gap-6 ${section.type === SectionType.GRAMMAR ? 'md:grid-cols-1' : ''}`}>
              {section.questions.map(q => (
                <QuestionCard
                  key={q.id}
                  question={q}
                  selectedOptionId={answers[q.id]}
                  onSelect={(optId) => handleSelectAnswer(q.id, optId)}
                  isSubmitted={submitted}
                />
              ))}
            </div>
          </section>
        ))}

        <div className="sticky bottom-4 z-40 bg-white/90 backdrop-blur-md border border-gray-200 p-4 rounded-xl shadow-2xl flex flex-col md:flex-row justify-between items-center gap-4">
          
          {submitted ? (
            <div className="w-full text-center">
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Resultado Final</p>
              <div className="text-4xl font-bold text-cervantes-blue mb-2">
                {score} / {totalQuestions}
              </div>
              <p className={`font-medium ${score >= totalQuestions * 0.6 ? 'text-green-600' : 'text-cervantes-red'}`}>
                {score >= totalQuestions * 0.6 ? '¡Aprobado! (APTO)' : 'No Apto - Sigue practicando'}
              </p>
              <button 
                onClick={() => window.location.reload()}
                className="mt-4 px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
              >
                Reiniciar Examen
              </button>
            </div>
          ) : (
            <>
              <div className="text-sm text-gray-600">
                Has respondido <span className="font-bold text-cervantes-blue">{Object.keys(answers).length}</span> de {totalQuestions} preguntas.
              </div>
              <button
                onClick={calculateScore}
                disabled={!isComplete}
                className={`px-8 py-3 rounded-md font-bold text-white shadow-lg transition-all transform hover:-translate-y-0.5
                  ${isComplete 
                    ? 'bg-cervantes-red hover:bg-red-700 cursor-pointer' 
                    : 'bg-gray-300 cursor-not-allowed'
                  }`}
              >
                Corregir Examen
              </button>
            </>
          )}
        </div>

      </main>

      <footer className="bg-slate-800 text-slate-400 py-8 text-center text-sm">
        <p>© {new Date().getFullYear()} Simulación DELE - Práctica Académica</p>
        <p className="mt-2 text-xs opacity-60">
          Esta aplicación utiliza Google Gemini AI para explicar errores gramaticales.
        </p>
      </footer>
    </div>
  );
}

export default App;