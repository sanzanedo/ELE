export enum SectionType {
  READING = 'READING',
  GRAMMAR = 'GRAMMAR'
}

export interface QuestionOption {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  type: 'multiple-choice' | 'cloze';
  text: string; // The question text or the sentence with a gap
  options: QuestionOption[];
  correctAnswerId: string;
  context?: string; // For providing context to AI
  grammarTopic?: string; // For AI context
}

export interface ExamSection {
  id: string;
  title: string;
  type: SectionType;
  content?: string; // For reading passages
  questions: Question[];
}

export interface ExamResult {
  score: number;
  total: number;
  answers: Record<string, string>; // questionId -> optionId
}