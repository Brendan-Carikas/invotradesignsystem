export interface AudiencePersona {
  id: string;
  name: string;
  description: string;
  demographics: string;
  goals: string;
  pain_points?: string;
  motivations?: string;
  behaviors?: string;
  preferences?: string;
  tech_proficiency?: string;
  created_at: string;
  updated_at: string;
}

// Sample audience personas for development
export const sampleAudiencePersonas: AudiencePersona[] = [
  {
    id: 'sample-1',
    name: 'Corporate Professional',
    description: 'Mid-level manager at a large enterprise seeking efficiency tools',
    demographics: 'Age 35-50, urban professional, college educated',
    goals: 'Improve team productivity, streamline workflows, reduce administrative overhead',
    pain_points: 'Information overload, limited time, complex approval processes',
    motivations: 'Career advancement, recognition from leadership, work-life balance',
    behaviors: 'Research-oriented, methodical decision making, values testimonials and case studies',
    preferences: 'Prefers detailed information but in digestible formats, appreciates professional tone',
    tech_proficiency: 'Moderate to high, comfortable with business software but not technical details',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'sample-2',
    name: 'Digital Native',
    description: 'Young professional or student who expects intuitive digital experiences',
    demographics: 'Age 18-30, urban/suburban, digitally connected',
    goals: 'Find quick solutions, access information on-the-go, minimize learning curve',
    pain_points: 'Friction in user experiences, slow responses, outdated interfaces',
    motivations: 'Convenience, social connection, staying current with trends',
    behaviors: 'Mobile-first, quick decision making, values peer recommendations',
    preferences: 'Visual communication, concise messaging, casual and authentic tone',
    tech_proficiency: 'High, early adopter of new technologies and platforms',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'sample-3',
    name: 'Small Business Owner',
    description: 'Entrepreneur managing multiple aspects of their business',
    demographics: 'Age 30-55, diverse backgrounds, growth-oriented',
    goals: 'Grow business, manage costs, automate routine tasks',
    pain_points: 'Limited resources, wearing multiple hats, complex compliance requirements',
    motivations: 'Business success, financial stability, creating value for customers',
    behaviors: 'Value-conscious, practical approach to solutions, networking with peers',
    preferences: 'Clear ROI information, straightforward language, personalized support',
    tech_proficiency: 'Varies widely, focuses on practical applications rather than features',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];
