import { Scenario } from '../types/game';

export const SCENARIOS: Scenario[] = [
  {
    id: 'appointment-of-ministers',
    act: 'Act I',
    title: 'Foundations of the Empire',
    subtitle: 'Appointment of Ministers',
    description: `Your first order of business is to staff your court. Applicants from far and wide arrive at your throne to court your favor. Which do you choose?`,
    choices: [
      {
        id: 'noble-candidate',
        title: 'The Trusted Noble',
        description: 'A noble of long-standing reputation, known for kindness, integrity, and flawless ritual conduct. However, he lacks administrative experience and has never managed resources or state affairs.',
        effects: [
          { stat: 'deterrence', change: 20, label: '+Deterrence' },
          { stat: 'diplomacy', change: 20, label: '+Diplomacy' },
          { stat: 'military', change: -10, label: '−Military' },
          { stat: 'efficiency', change: -10, label: '−Efficiency' },
        ],
        philosopherTags: {
          confucius: 2,
        },
        risks: 'Factionalism from underutilized technocrats.',
        nextScenarioId: 'education-system',
      },
      {
        id: 'cunning-strategist',
        title: 'The Cunning Strategist',
        description: 'A sharp and capable strategist with strong test scores and experience in foreign courts, offering many ideas for efficient governance. But rumors persist that he betrayed his previous ruler.',
        effects: [
          { stat: 'military', change: 30, label: '+Military' },
          { stat: 'efficiency', change: 10, label: '+Efficiency' },
          { stat: 'deterrence', change: -20, label: '−Deterrence' },
          { stat: 'diplomacy', change: -10, label: '−Diplomacy' },
        ],
        philosopherTags: {
          hanfeizi: 2,
        },
        risks: 'Ministers game metrics; surveillance state emerges.',
        nextScenarioId: 'education-system',
      },
      {
        id: 'common-official',
        title: 'The Common Champion',
        description: 'A low-born rising official beloved by the common people for his fairness and effective local leadership. Several aristocrats warn they will take his appointment as a grave insult.',
        effects: [
          { stat: 'populace', change: 30, label: '+Populace' },
          { stat: 'deterrence', change: 10, label: '+Deterrence' },
          { stat: 'efficiency', change: -10, label: '−Efficiency' },
          { stat: 'aristocracy', change: -20, label: '−Aristocracy' },
        ],
        philosopherTags: {
          mozi: 2,
        },
        nextScenarioId: 'education-system',
      },
    ],
  },
  {
    id: 'education-system',
    act: 'Act I',
    title: 'Foundations of the Empire',
    subtitle: 'Forming the Education System',
    description: 'Your head officials come to you asking how you want to structure your state’s education system. What type of curriculum do you want to put into place, and how should the schools be structured?',
    choices: [
      {
        id: 'centralized-school',
        title: 'Strict National Curriculum',
        description: 'A centralized school system with unified teachers following a strict national curriculum. Instruction emphasizes discipline, self-control, and improvement through sustained effort.',
        effects: [],
        philosopherTags: {
          xunzi: 2,
        },
        nextScenarioId: 'military-reform',
      },
      {
        id: 'freer-curriculum',
        title: 'Cultivate Virtue',
        description: 'A freer curriculum that identifies students’ strengths early and pairs them with specialized teachers. They are trained to cultivate virtue and fulfill their righteous potential.',
        effects: [],
        philosopherTags: {
          mengzi: 2,
        },
        nextScenarioId: 'military-reform',
      },
      {
        id: 'loosened-curriculum',
        title: 'Natural Inclinations',
        description: 'A loosened curriculum that lets students follow their natural inclinations into crafts, apprenticeships, and wandering teachers. Learning emerges from individual curiosity rather than imposed structure.',
        effects: [],
        philosopherTags: {
          zhuangzi: 2,
        },
        nextScenarioId: 'military-reform',
      },
    ],
  },
  {
    id: 'military-reform',
    act: 'Act I',
    title: 'Foundations of the Empire',
    subtitle: 'Military Reforms',
    description: 'You are tasked with helping to structure your army. You notice that while the elite units that helped you create your state are strong, your general infantry is weak and unorganized. How do you go about building a powerful military?',
    choices: [
      {
        id: 'mandatory-conscription',
        title: 'Mandatory Conscription',
        description: 'Decree mandatory conscription for all men and reward soldiers for enemy kills or captures. Those who refuse are executed to prove that no one stands above the law.',
        effects: [
          { stat: 'deterrence', change: 10, label: '+Deterrence' },
          { stat: 'military', change: -10, label: '−Military' }, // "Military Support"
        ],
        philosopherTags: {
          lordshang: 2,
        },
        nextScenarioId: 'appointment-of-ministers', // Loop for now
      },
      {
        id: 'defensive-focus',
        title: 'Defensive Focus',
        description: 'Pour resources into fortifications, logistics, and constant gate vigilance, forbidding any offensive campaigns. Soldiers are trained to focus solely on protecting the realm.',
        effects: [
          { stat: 'deterrence', change: 10, label: '+Deterrence' },
        ],
        philosopherTags: {
          mozi: 2,
        },
        nextScenarioId: 'appointment-of-ministers',
      },
      {
        id: 'reduce-forces',
        title: 'Reduce Forces',
        description: 'Reduce standing forces and avoid displays of military strength that provoke neighboring states. Prioritize farmers over fighters, seeking stability through quiet restraint.',
        effects: [
          { stat: 'deterrence', change: -10, label: '−Deterrence' },
          { stat: 'military', change: -10, label: '−Military' },
        ],
        philosopherTags: {
          laozi: 2,
        },
        nextScenarioId: 'appointment-of-ministers',
      },
    ],
  },
];

export const getScenarioById = (id: string): Scenario | undefined => {
  return SCENARIOS.find(s => s.id === id);
};
