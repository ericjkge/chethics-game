import { Philosopher } from '../types/game';

/**
 * Configurable list of philosophers tracked in the game.
 * Add or modify philosophers here to expand the game's philosophical scope.
 */
export const PHILOSOPHERS: Philosopher[] = [
  {
    id: 'confucius',
    name: 'Confucius',
    description: 'Emphasizes moral virtue, ritual propriety, and ethical governance through personal example.',
  },
  {
    id: 'hanfeizi',
    name: 'Han Feizi',
    description: 'Advocates for strict laws, centralized power, and pragmatic governance through institutional control.',
  },
  {
    id: 'mozi',
    name: 'Mozi',
    description: 'Champions universal love, meritocracy, and practical welfare for all people regardless of status.',
  },
  {
    id: 'xunzi',
    name: 'Xunzi',
    description: 'Believes human nature is wayward and requires strict rituals and education to become virtuous.',
  },
  {
    id: 'mengzi',
    name: 'Mengzi',
    description: 'Believes human nature is inherently good and education should cultivate innate virtues.',
  },
  {
    id: 'zhuangzi',
    name: 'Zhuangzi',
    description: 'Advocates for following nature (Dao), spontaneity, and freedom from social constraints.',
  },
  {
    id: 'lordshang',
    name: 'Lord Shang',
    description: 'A legalist reformer who emphasizes agriculture, war, and strict laws to strengthen the state.',
  },
  {
    id: 'laozi',
    name: 'Laozi',
    description: 'Founder of Daoism, advocating for non-action (Wu Wei), simplicity, and harmony with nature.',
  },
];

export const getPhilosopherById = (id: string): Philosopher | undefined => {
  return PHILOSOPHERS.find(p => p.id === id);
};
