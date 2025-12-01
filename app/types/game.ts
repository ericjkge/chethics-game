export interface GameStats {
  populace: number;
  aristocracy: number;
  military: number;
  deterrence: number;
  diplomacy: number;
  efficiency: number;
  legacy: number;
}

export interface PhilosopherAlignment {
  [philosopherId: string]: number;
}

export type PhilosopherSchool = 'confucian' | 'mohist' | 'daoist' | 'legalist';

export interface Philosopher {
  id: string;
  name: string;
  school: PhilosopherSchool;
  description: string;
}

export interface ChoiceEffect {
  stat: keyof GameStats;
  change: number;
  label?: string; // Make label optional since we can derive it
}

export interface Choice {
  id: string;
  title: string;
  description: string;
  effects: ChoiceEffect[];
  philosopherTags: { [philosopherId: string]: number };
  risks?: string;
  nextScenarioId?: string;
  // Conditional logic
  condition?: (stats: GameStats, history: string[]) => boolean;
  alternateDescription?: string;
  alternateEffects?: ChoiceEffect[];
}

export interface Scenario {
  id: string;
  act: string;
  title: string;
  subtitle?: string;
  description: string;
  choices: Choice[];
}

export interface GameState {
  currentScenarioId: string;
  stats: GameStats;
  philosopherAlignment: PhilosopherAlignment;
  history: string[];
  activeChoice: Choice | null;
  isInterlude?: boolean;
}
