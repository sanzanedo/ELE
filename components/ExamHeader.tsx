import React from 'react';

const ExamHeader: React.FC = () => {
  return (
    <header className="bg-cervantes-blue text-white shadow-md sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-cervantes-red text-white font-serif font-bold p-2 rounded text-xl">
            Ñ
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-serif font-bold leading-tight">
              Simulación DELE B2
            </h1>
            <p className="text-xs text-blue-200 uppercase tracking-widest">
              Español como Lengua Extranjera
            </p>
          </div>
        </div>
        <div className="hidden md:block text-right">
          <div className="text-sm font-semibold">Tiempo Restante</div>
          <div className="text-xl font-mono">--:--</div>
        </div>
      </div>
    </header>
  );
};

export default ExamHeader;