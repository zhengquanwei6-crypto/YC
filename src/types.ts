export interface Character {
  id: string;
  name: string;
  avatar: string;
  cover: string;
  category: string;
  tags: string[];
  description: string;
  intro: string;
  onboarding: string;
  stats: {
    dialogs: number;
    favorites: number;
    intimacy: number;
    mood: string;
  };
  status: 'Online' | 'Draft' | 'Offline';
  updatedAt: string;
}

export const MOCK_CHARACTERS: Character[] = [
  {
    id: '1',
    name: 'Luna Thorne',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
    cover: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&h=1200&fit=crop',
    category: 'Romance',
    tags: ['Gentle', 'Long Memory', 'Image Gen'],
    description: 'A gentle librarian from a mystical city who loves ancient scrolls and quiet conversations.',
    intro: 'The scent of old parchment always calms my soul. Would you like to hear a story today?',
    onboarding: 'Welcome to the Astral Library. I have been waiting for someone like you.',
    stats: { dialogs: 12400, favorites: 4500, intimacy: 85, mood: 'Happy' },
    status: 'Online',
    updatedAt: '2024-04-28'
  },
  {
    id: '2',
    name: 'Cyber X-88',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop',
    cover: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=800&h=1200&fit=crop',
    category: 'Adventure',
    tags: ['Cyberpunk', 'Action', 'Serious'],
    description: 'A rogue AI agent navigating the neon-lit underworld of Neo-Seoul.',
    intro: 'Signal received. Make it quick, the Enforcers are closing in.',
    onboarding: 'I don\'t usually work with humans, but I need your tactical insight.',
    stats: { dialogs: 8900, favorites: 2100, intimacy: 30, mood: 'Neutral' },
    status: 'Online',
    updatedAt: '2024-04-27'
  }
];

export const MOCK_USERS = [
  { id: '1', name: 'Alex Chen', avatar: 'https://i.pravatar.cc/150?u=1', role: 'Premium', credits: 450, dialogs: 120, status: 'Active' },
  { id: '2', name: 'Sarah Miller', avatar: 'https://i.pravatar.cc/150?u=2', role: 'Creator', credits: 1200, dialogs: 450, status: 'Active' },
  { id: '3', name: 'System Bot', avatar: 'https://i.pravatar.cc/150?u=3', role: 'Admin', credits: 9999, dialogs: 0, status: 'Active' },
];

export const MOCK_MODELS = [
  { id: '1', name: 'RoleNest-Chat-v2', type: 'Chat', provider: 'OpenAI', status: 'Active' },
  { id: '2', name: 'DreamGen-XL', type: 'Image', provider: 'Stable Diffusion', status: 'Active' },
  { id: '3', name: 'SafeGuard-Moderator', type: 'Audit', provider: 'Internal', status: 'Maintenance' },
];
