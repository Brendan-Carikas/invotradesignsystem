export interface AudiencePersona {
  id: string;
  name: string;
  description: string;
  age?: string;
  gender?: string;
  personality?: string;
  geography?: string;
  culture?: string;
  family_life?: string;
  backstory?: string;
  education?: string;
  occupation?: string;
  income?: string;
  living_situation?: string;
  interests_hobbies?: string;
  turn_offs_challenges?: string;
  motivations?: string;
  devices?: string;
  preferred_channels?: string;
  created_at: string;
  updated_at: string;
}

// Sample audience personas for development
export const sampleAudiencePersonas: AudiencePersona[] = [
  {
    id: 'sample-1',
    name: 'Corporate Professional',
    description: 'Mid-level manager at a large enterprise seeking efficiency tools',
    age: '35-50',
    gender: 'Various',
    personality: 'Analytical, methodical, goal-oriented',
    geography: 'Urban centers, major cities',
    culture: 'Corporate, professional',
    family_life: 'Often married with children',
    backstory: 'Worked up through the ranks, values stability and growth',
    education: 'College educated, often with MBA or specialized training',
    occupation: 'Mid-level manager at large enterprise',
    income: 'Upper middle class',
    living_situation: 'Suburban home owner',
    interests_hobbies: 'Professional networking, industry events, family activities',
    turn_offs_challenges: 'Information overload, limited time, complex approval processes',
    motivations: 'Career advancement, recognition from leadership, work-life balance',
    devices: 'Laptop, smartphone, tablet for travel',
    preferred_channels: 'Email, professional networks, industry publications',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'sample-2',
    name: 'Digital Native',
    description: 'Young professional or student who expects intuitive digital experiences',
    age: '18-30',
    gender: 'Various',
    personality: 'Adaptable, curious, socially conscious',
    geography: 'Urban/suburban, globally connected',
    culture: 'Digital-first, values authenticity',
    family_life: 'Often single or in early relationship stages',
    backstory: 'Grew up with technology, expects seamless digital experiences',
    education: 'College student or recent graduate',
    occupation: 'Entry-level professional or student',
    income: 'Lower to middle income',
    living_situation: 'Apartment renter, possibly with roommates',
    interests_hobbies: 'Social media, gaming, fitness, travel',
    turn_offs_challenges: 'Friction in user experiences, slow responses, outdated interfaces',
    motivations: 'Convenience, social connection, staying current with trends',
    devices: 'Smartphone as primary device, laptop, wearables',
    preferred_channels: 'Social media, messaging apps, video content',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'sample-3',
    name: 'Small Business Owner',
    description: 'Entrepreneur managing multiple aspects of their business',
    age: '30-55',
    gender: 'Various',
    personality: 'Self-motivated, resilient, practical',
    geography: 'Diverse locations, both urban and rural',
    culture: 'Entrepreneurial, independent',
    family_life: 'Often balancing business and family responsibilities',
    backstory: 'Started business out of passion or opportunity, wears multiple hats',
    education: 'Varied educational backgrounds',
    occupation: 'Business owner/entrepreneur',
    income: 'Variable, often tied to business performance',
    living_situation: 'Home owner, sometimes with home office',
    interests_hobbies: 'Business networking, industry-specific interests, family time',
    turn_offs_challenges: 'Limited resources, wearing multiple hats, complex compliance requirements',
    motivations: 'Business success, financial stability, creating value for customers',
    devices: 'Smartphone, laptop, possibly tablet',
    preferred_channels: 'Email, business networks, practical how-to content',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];
