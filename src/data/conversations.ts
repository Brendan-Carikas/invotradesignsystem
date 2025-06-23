// Sample conversation data
export const sampleConversation = {
  id: "conv-12345",
  title: "Product Inquiry - Enterprise Plan",
  date: "June 16, 2025",
  duration: "4m 12s",
  status: "completed",
  userSatisfaction: "positive",
  messages: [
    {
      id: 1,
      role: "assistant",
      content: "👋 Welcome to Invotra Support! I'm your virtual assistant, here to help with any questions about our products and services. How can I assist you today?",
      timestamp: "10:32:00",
      sentiment: "welcoming",
      entities: ["welcome", "support"],
      starterPrompts: [
        "Tell me about your pricing plans",
        "How does your product work?",
        "I need technical support"
      ]
    },
    {
      id: 2,
      role: "user",
      content: "Hi there, I'm interested in your enterprise plan but I couldn't find pricing information on your website.",
      timestamp: "10:32:15",
      intent: "pricing_inquiry"
    },
    {
      id: 3,
      role: "assistant",
      content: "Hello! I'd be happy to help you with information about our Enterprise Plan. Our Enterprise pricing is customized based on your organization's specific needs and scale. Would you like me to outline the key features included in the Enterprise Plan, or would you prefer to speak with a sales representative who can provide a tailored quote?",
      timestamp: "10:32:20",
      sentiment: "helpful",
      entities: ["Enterprise Plan", "pricing", "sales representative"],
      starterPrompts: [
        "Tell me about the key features",
        "I'd like to speak with sales",
        "What's the pricing range?"
      ]
    },
    {
      id: 4,
      role: "user",
      content: "I'd like to know the key features first, and then maybe talk to sales.",
      timestamp: "10:32:45",
      intent: "feature_inquiry"
    },
    {
      id: 5,
      role: "assistant",
      content: "Certainly! Here are the key features of our Enterprise Plan:\n\n• Unlimited users and workspaces\n• Dedicated account manager\n• 99.99% uptime SLA\n• Advanced security features including SSO, SAML, and custom data retention policies\n• Custom integrations with your existing tools\n• Priority support with 24/7 availability\n• Onboarding and training for your team\n• Regular business reviews and optimization recommendations\n\nIs there any specific feature you'd like more information about?",
      timestamp: "10:32:52",
      sentiment: "informative",
      entities: ["Enterprise Plan", "features", "SLA", "SSO", "SAML"]
    },
    {
      id: 6,
      role: "user",
      content: "That sounds comprehensive. What about data migration from our current system? We have quite a lot of data we'd need to transfer.",
      timestamp: "10:33:30",
      intent: "technical_inquiry"
    },
    {
      id: 7,
      role: "assistant",
      content: "Great question! Data migration is included in our Enterprise Plan. We provide a dedicated migration specialist who will work with your team to ensure a smooth transition. Our process includes:\n\n1. Initial assessment of your current data structure\n2. Development of a custom migration plan\n3. Test migrations in a staging environment\n4. Scheduled production migration with minimal disruption\n5. Post-migration validation and support\n\nWe've successfully migrated clients from various platforms, handling datasets of all sizes. Would you like to discuss your specific migration needs with a technical specialist?",
      timestamp: "10:33:45",
      sentiment: "helpful",
      entities: ["data migration", "Enterprise Plan", "migration specialist"]
    },
    {
      id: 8,
      role: "user",
      content: "Yes, I think that would be helpful. Can you arrange for someone to contact me?",
      timestamp: "10:34:20",
      intent: "contact_request"
    },
    {
      id: 9,
      role: "assistant",
      content: "I'd be happy to arrange that for you. Could you please provide your name, email address, and a convenient time for a call? Once I have this information, I'll have a technical specialist reach out to discuss your data migration needs and provide more details about our Enterprise Plan.",
      timestamp: "10:34:27",
      sentiment: "helpful",
      entities: ["contact", "technical specialist", "Enterprise Plan"]
    }
  ]
};

// Add more conversation data as needed
export const conversationList = [
  {
    id: "conv-12345",
    title: "Product Inquiry - Enterprise Plan",
    date: "June 16, 2025",
    duration: "4m 12s",
    status: "completed",
    userSatisfaction: "positive"
  }
];
