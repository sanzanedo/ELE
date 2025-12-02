import { ExamSection, SectionType } from '../types';

export const EXAM_DATA: ExamSection[] = [
  {
    id: 'section-1',
    title: 'Comprensión de Lectura: La IA en la Educación',
    type: SectionType.READING,
    content: `La irrupción de la Inteligencia Artificial (IA) en el ámbito educativo, y específicamente en la educación secundaria, ha suscitado un debate tan intenso como necesario. Lejos de ser una mera herramienta tecnológica más, la IA plantea un cambio de paradigma en la forma en que concebimos el aprendizaje y la enseñanza.

Por un lado, los defensores de su implementación argumentan que permite una personalización del aprendizaje sin precedentes. Algoritmos capaces de analizar el rendimiento del alumno en tiempo real pueden adaptar los contenidos a sus necesidades específicas, reforzando las áreas donde muestran mayores dificultades. Esto podría suponer el fin del modelo de "talla única" que ha predominado en el sistema educativo durante siglos.

Sin embargo, no faltan voces críticas que alertan sobre los riesgos inherentes a esta dependencia tecnológica. La principal preocupación radica en la posible pérdida de habilidades cognitivas fundamentales, como el pensamiento crítico y la capacidad de redacción, si los estudiantes delegan estas tareas en chatbots avanzados. Además, existe el temor de que la brecha digital se amplíe, dejando rezagados a aquellos centros con menos recursos para implementar estas tecnologías.

En conclusión, el desafío no reside en aceptar o rechazar la IA, sino en integrarla de manera que potencie, y no sustituya, la labor insustituible del docente como guía emocional e intelectual.`,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        text: 'Según el texto, ¿cuál es uno de los principales argumentos a favor de la IA?',
        correctAnswerId: 'opt-b',
        options: [
          { id: 'opt-a', text: 'Que sustituirá completamente a los profesores en el futuro.' },
          { id: 'opt-b', text: 'Que permite adaptar los contenidos al ritmo de cada estudiante.' },
          { id: 'opt-c', text: 'Que reduce el coste de los materiales escolares.' }
        ],
        context: 'Párrafo 2: "permite una personalización del aprendizaje sin precedentes... adaptar los contenidos a sus necesidades específicas"'
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        text: '¿Qué preocupa principalmente a los críticos de la IA?',
        correctAnswerId: 'opt-a',
        options: [
          { id: 'opt-a', text: 'El deterioro de capacidades como el pensamiento crítico.' },
          { id: 'opt-b', text: 'El alto consumo energético de los algoritmos.' },
          { id: 'opt-c', text: 'La falta de interés de los alumnos por la tecnología.' }
        ],
        context: 'Párrafo 3: "pérdida de habilidades cognitivas fundamentales, como el pensamiento crítico"'
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        text: 'La conclusión del autor sugiere que el profesor debe:',
        correctAnswerId: 'opt-c',
        options: [
          { id: 'opt-a', text: 'Prohibir el uso de IA en el aula.' },
          { id: 'opt-b', text: 'Centrarse exclusivamente en la enseñanza emocional.' },
          { id: 'opt-c', text: 'Utilizar la tecnología manteniendo su rol de guía.' }
        ],
        context: 'Párrafo 4: "integrarla de manera que potencie, y no sustituya, la labor insustituible del docente"'
      }
    ]
  },
  {
    id: 'section-2',
    title: 'Gramática y Vocabulario (Uso de la lengua)',
    type: SectionType.GRAMMAR,
    questions: [
      {
        id: 'g1',
        type: 'cloze',
        text: 'Ayer, mientras _______ por el parque, me encontré con Luis.',
        grammarTopic: 'Contraste Pasados (Indefinido vs Imperfecto)',
        correctAnswerId: 'opt-b',
        options: [
          { id: 'opt-a', text: 'caminé' },
          { id: 'opt-b', text: 'caminaba' },
          { id: 'opt-c', text: 'he caminado' }
        ],
        context: 'Acción en desarrollo (imperfecto) interrumpida por una acción puntual (indefinido).'
      },
      {
        id: 'g2',
        type: 'cloze',
        text: 'La boda _______ en la catedral de Sevilla el próximo sábado.',
        grammarTopic: 'Ser vs Estar (Eventos)',
        correctAnswerId: 'opt-a',
        options: [
          { id: 'opt-a', text: 'es' },
          { id: 'opt-b', text: 'está' },
          { id: 'opt-c', text: 'sea' }
        ],
        context: 'Localización de eventos o acontecimientos se usa con SER.'
      },
      {
        id: 'g3',
        type: 'cloze',
        text: 'No creo que esta _______ la mejor solución para el problema.',
        grammarTopic: 'Subjuntivo (Opinión Negativa)',
        correctAnswerId: 'opt-b',
        options: [
          { id: 'opt-a', text: 'es' },
          { id: 'opt-b', text: 'sea' },
          { id: 'opt-c', text: 'fuera' }
        ],
        context: 'Expresión de opinión negada ("No creo que") rige subjuntivo presente.'
      }
    ]
  }
];