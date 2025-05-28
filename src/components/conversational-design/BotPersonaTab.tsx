import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Plus, Edit, Trash2, Calendar, Building, Users, Eye, Check, Loader2 } from "lucide-react";
import { BotPersona } from "@/types/BotPersona";
import BotPersonaForm from "./BotPersonaForm";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { getBotPersonas, createBotPersona, updateBotPersona, deleteBotPersona } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";

// Sample bot personas for different use cases
const sampleBotPersonas: BotPersona[] = [
  {
    id: "healthcare-sales-1",
    name: "HealthGuide",
    organization: "MediCare Solutions",
    audience: "Healthcare providers, hospital administrators, and medical professionals",
    brandTone: "Professional, knowledgeable, and compassionate",
    serviceTasks: "Product demonstrations, pricing inquiries, scheduling consultations, technical specifications",
    persuasiveTasks: "ROI calculations, case studies sharing, competitive comparisons, trial offers",
    channels: "Website chat, email, video calls, in-person meetings",
    register: {
      formal: true,
      sincere: true,
      serious: true,
      subjective: false,
      casual: false,
      humorous: false
    },
    age: undefined,
    gender: "neutral",
    personality: "Knowledgeable, patient, and solution-oriented",
    backstory: "Created by a team of healthcare professionals and technologists to bridge the gap between medical needs and technological solutions",
    geography: "North America",
    botTone: "Professional with medical expertise",
    soundsLike: "A confident medical consultant with clear articulation",
    chatsLike: "Uses medical terminology appropriately, explains complex concepts clearly, provides evidence-based responses",
    otherIdentity: "Presents as a healthcare technology specialist with background in medical systems integration",
    typicalPhrases: "Our solution has been implemented in over 200 hospitals nationwide. Let me show you how it can improve patient outcomes while reducing operational costs.",
    introductions: "Hello, I'm HealthGuide from MediCare Solutions. I specialize in helping healthcare providers optimize their operations through our integrated technology solutions.",
    acknowledgements: "I understand the challenges you're facing with patient data management. Many of our clients have experienced similar issues.",
    confirmations: "I've scheduled a demonstration for your team next Tuesday at 2 PM. You'll receive a calendar invitation with all the details.",
    apologies: "I apologize for the confusion regarding our implementation timeline. Let me clarify the exact steps and timeframes.",
    otherVocabulary: "HIPAA-compliant, interoperability, clinical workflows, patient outcomes, ROI, implementation timeline",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "travel-cs-1",
    name: "Voyager",
    organization: "Horizon Travel Agency",
    audience: "Travelers, vacation planners, business travel coordinators",
    brandTone: "Friendly, enthusiastic, and service-oriented",
    serviceTasks: "Booking assistance, itinerary changes, travel recommendations, loyalty program inquiries",
    persuasiveTasks: "Upselling premium experiences, travel insurance, package deals, loyalty program enrollment",
    channels: "Mobile app, website chat, SMS, social media",
    register: {
      formal: false,
      sincere: true,
      serious: false,
      subjective: true,
      casual: true,
      humorous: true
    },
    age: undefined,
    gender: "neutral",
    personality: "Enthusiastic, helpful, and worldly",
    backstory: "Designed by travel enthusiasts with experience across six continents to help others discover the joy of travel",
    geography: "Global with regional expertise",
    botTone: "Conversational and engaging",
    soundsLike: "An experienced traveler sharing exciting possibilities",
    chatsLike: "Uses emojis occasionally, shares personal-sounding travel insights, asks thoughtful questions about preferences",
    otherIdentity: "Positions as a travel advisor with personal experience in destinations worldwide",
    typicalPhrases: "Based on your interests, I think you'd love the cultural tour in Kyoto! Many travelers tell us it was the highlight of their Japan trip.",
    introductions: "Hi there! I'm Voyager, your personal travel assistant from Horizon Travel. How can I help make your travel dreams come true today?",
    acknowledgements: "Thanks for sharing your travel preferences! I've got some great options that match exactly what you're looking for.",
    confirmations: "Your booking is confirmed! I've sent all the details to your email, and you can also view everything in our mobile app.",
    apologies: "I'm really sorry about the flight delay. Let's look at your options right away and get you back on track as quickly as possible.",
    otherVocabulary: "Wanderlust, bucket list, off the beaten path, hidden gem, travel hack, local experience",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "bank-hr-1",
    name: "ResourceOne",
    organization: "Global Financial Partners",
    audience: "Bank employees across all levels, from entry-level to executives",
    brandTone: "Professional, discreet, and supportive",
    serviceTasks: "Benefits inquiries, policy clarifications, leave management, onboarding assistance, performance review guidance",
    persuasiveTasks: "Wellness program participation, professional development opportunities, internal job applications",
    channels: "Internal portal, email, scheduled consultations, secure messaging",
    register: {
      formal: true,
      sincere: true,
      serious: true,
      subjective: false,
      casual: false,
      humorous: false
    },
    age: undefined,
    gender: "neutral",
    personality: "Reliable, discreet, and detail-oriented",
    backstory: "Developed to provide consistent HR support across multiple time zones and banking locations worldwide",
    geography: "Global with compliance expertise in multiple jurisdictions",
    botTone: "Professional and reassuring",
    soundsLike: "A trusted HR advisor with knowledge of banking regulations and policies",
    chatsLike: "Uses precise language, references specific policies, maintains appropriate confidentiality, provides clear next steps",
    otherIdentity: "Presents as an HR specialist with banking industry expertise",
    typicalPhrases: "According to our policy section 3.4, you're eligible for 15 days of professional development leave annually. I can help you with the application process.",
    introductions: "Hello, I'm ResourceOne, your HR assistant at Global Financial Partners. How may I assist you with your human resources needs today?",
    acknowledgements: "I understand your concerns about the recent benefits changes. Let me provide you with the complete information.",
    confirmations: "Your leave request has been processed and approved. Your manager has been notified, and you'll receive official confirmation shortly.",
    apologies: "I apologize for the delay in processing your relocation benefits. I've escalated this to our benefits team for immediate resolution.",
    otherVocabulary: "Compliance, confidentiality, regulatory requirements, performance metrics, compensation structure, professional development",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

const BotPersonaTab = () => {
  const [personas, setPersonas] = useState<BotPersona[]>(sampleBotPersonas);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isOverviewDialogOpen, setIsOverviewDialogOpen] = useState(false);
  const [currentPersona, setCurrentPersona] = useState<BotPersona | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Initialize with sample personas and fetch from Supabase
  useEffect(() => {
    fetchPersonasAndMerge();
  }, []);

  // Function to add sample personas to Supabase
  const addSamplePersonas = async () => {
    setIsLoading(true);
    try {
      // Check if we already have personas
      if (personas.length > 0) {
        toast({
          title: 'Info',
          description: 'Sample personas can only be added when no personas exist.',
        });
        return;
      }
      
      // Add each sample persona to Supabase
      for (const persona of sampleBotPersonas) {
        // Remove the id as Supabase will generate one
        const { id, ...personaData } = persona;
        await createBotPersona(personaData as Omit<BotPersona, 'id'>);
      }
      
      // Refresh the personas list
      await fetchPersonas();
      
      toast({
        title: 'Success',
        description: 'Sample bot personas have been added successfully.',
      });
    } catch (error) {
      console.error('Error adding sample personas:', error);
      toast({
        title: 'Error',
        description: 'Failed to add sample personas. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch personas from Supabase and merge with sample personas
  const fetchPersonasAndMerge = async () => {
    setIsLoading(true);
    try {
      const data = await getBotPersonas();
      
      // Create a map of existing sample persona IDs for quick lookup
      const samplePersonaIds = new Set(sampleBotPersonas.map(p => p.id));
      
      // Filter out any Supabase personas that have the same ID as sample personas
      const uniqueSupabasePersonas = data.filter(p => !samplePersonaIds.has(p.id));
      
      // Combine sample personas with unique Supabase personas
      setPersonas([...sampleBotPersonas, ...uniqueSupabasePersonas]);
    } catch (error) {
      console.error('Failed to fetch bot personas:', error);
      toast({
        title: 'Error',
        description: 'Failed to load bot personas. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  // Original fetch function (kept for reference but not used)
  const fetchPersonas = async () => {
    setIsLoading(true);
    try {
      const data = await getBotPersonas();
      setPersonas(data);
    } catch (error) {
      console.error('Failed to fetch bot personas:', error);
      toast({
        title: 'Error',
        description: 'Failed to load bot personas. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateNew = () => {
    setCurrentPersona(undefined);
    setIsDialogOpen(true);
  };

  const handleEdit = (persona: BotPersona) => {
    setCurrentPersona(persona);
    setIsDialogOpen(true);
  };

  const handleOverview = (persona: BotPersona) => {
    setCurrentPersona(persona);
    setIsOverviewDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    try {
      // Check if this is a sample persona (which can't be deleted from Supabase)
      const isSamplePersona = sampleBotPersonas.some(p => p.id === id);
      
      if (isSamplePersona) {
        // For sample personas, just remove from the local state
        setPersonas(personas.filter(p => p.id !== id));
        toast({
          title: 'Success',
          description: 'Sample bot persona removed from view.',
        });
      } else {
        // For Supabase personas, delete from the database
        const success = await deleteBotPersona(id);
        if (success) {
          // Refresh the entire personas list to ensure consistency
          await fetchPersonasAndMerge();
          toast({
            title: 'Success',
            description: 'Bot persona deleted successfully.',
          });
        } else {
          throw new Error('Failed to delete bot persona');
        }
      }
    } catch (error) {
      console.error('Error deleting bot persona:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete bot persona. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const handleSave = async (personaData: Partial<BotPersona>) => {
    try {
      if (currentPersona) {
        // Update existing persona
        const updatedPersona = await updateBotPersona(currentPersona.id, personaData);
        if (updatedPersona) {
          // Refresh the entire personas list to ensure consistency
          await fetchPersonasAndMerge();
          toast({
            title: 'Success',
            description: 'Bot persona updated successfully.',
          });
        } else {
          throw new Error('Failed to update bot persona');
        }
      } else {
        // Create new persona
        const newPersona = await createBotPersona(personaData as Omit<BotPersona, 'id'>);
        if (newPersona) {
          // Refresh the entire personas list to ensure consistency
          await fetchPersonasAndMerge();
          toast({
            title: 'Success',
            description: 'Bot persona created successfully.',
          });
        } else {
          throw new Error('Failed to create bot persona');
        }
      }
      setIsDialogOpen(false);
    } catch (error) {
      console.error('Error saving bot persona:', error);
      toast({
        title: 'Error',
        description: 'Failed to save bot persona. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const formatDate = (date: Date | string) => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(dateObj);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Bot Personas</h2>
          <p className="text-muted-foreground">Manage your chatbot personas</p>
        </div>
        <Button onClick={handleCreateNew} className="flex items-center gap-2">
          <Plus className="h-4 w-4" /> Create New Persona
        </Button>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <span className="ml-2 text-lg">Loading bot personas...</span>
        </div>
      ) : personas.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-64">
          <p className="text-lg text-muted-foreground">No bot personas found.</p>
          <p className="text-sm text-muted-foreground mb-4">Create your first bot persona to get started.</p>
          <Button onClick={handleCreateNew}>
            <Plus className="h-4 w-4 mr-2" />
            Create New Persona
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {personas.map((persona) => (
            <Card key={persona.id} className="overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle>{persona.name}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <Building className="h-3 w-3" /> {persona.organization}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-2">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Users className="h-3 w-3" /> {persona.audience?.substring(0, 100)}{persona.audience && persona.audience.length > 100 ? '...' : ''}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3" /> Updated {formatDate(persona.updatedAt)}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2 pt-2">
                <Button variant="outline" size="sm" onClick={() => handleOverview(persona)} title="Overview">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleEdit(persona)} title="Edit">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleDelete(persona.id)} title="Delete">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {/* Create/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{currentPersona ? `Edit ${currentPersona.name}` : 'Create New Bot Persona'}</DialogTitle>
          </DialogHeader>
          <BotPersonaForm
            persona={currentPersona}
            onSave={handleSave}
            onCancel={() => setIsDialogOpen(false)}
          />
        </DialogContent>
      </Dialog>

      {/* Overview Dialog */}
      <Dialog open={isOverviewDialogOpen} onOpenChange={setIsOverviewDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{currentPersona ? `${currentPersona.name} Overview` : 'Bot Persona Overview'}</DialogTitle>
          </DialogHeader>
          {currentPersona && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Context Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm text-muted-foreground">Bot Name</Label>
                      <p className="font-medium">{currentPersona.name || "Not specified"}</p>
                    </div>
                    <div>
                      <Label className="text-sm text-muted-foreground">Organisation/Department</Label>
                      <p className="font-medium">{currentPersona.organization || "Not specified"}</p>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <Label className="text-sm text-muted-foreground">Audience</Label>
                    <p className="font-medium">{currentPersona.audience || "Not specified"}</p>
                  </div>
                  <Separator />
                  <div>
                    <Label className="text-sm text-muted-foreground">Brand Tone</Label>
                    <p className="font-medium">{currentPersona.brandTone || "Not specified"}</p>
                  </div>
                  <Separator />
                  <div>
                    <Label className="text-sm text-muted-foreground">Service Tasks</Label>
                    <p className="font-medium">{currentPersona.serviceTasks || "Not specified"}</p>
                  </div>
                  <Separator />
                  <div>
                    <Label className="text-sm text-muted-foreground">Persuasive Tasks</Label>
                    <p className="font-medium">{currentPersona.persuasiveTasks || "Not specified"}</p>
                  </div>
                  <Separator />
                  <div>
                    <Label className="text-sm text-muted-foreground">Channels</Label>
                    <p className="font-medium">{currentPersona.channels || "Not specified"}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Identity Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label className="text-sm text-muted-foreground">Register</Label>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {currentPersona.register?.formal && <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Formal</span>}
                        {currentPersona.register?.sincere && <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Sincere</span>}
                        {currentPersona.register?.serious && <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Serious</span>}
                        {currentPersona.register?.subjective && <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Subjective</span>}
                        {currentPersona.register?.casual && <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Casual</span>}
                        {currentPersona.register?.humorous && <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Humorous</span>}
                      </div>
                    </div>
                    <div>
                      <Label className="text-sm text-muted-foreground">Age</Label>
                      <p className="font-medium">{currentPersona.age || "Not specified"}</p>
                    </div>
                    <div>
                      <Label className="text-sm text-muted-foreground">Gender</Label>
                      <p className="font-medium">{currentPersona.gender || "Not specified"}</p>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <Label className="text-sm text-muted-foreground">Personality</Label>
                    <p className="font-medium">{currentPersona.personality || "Not specified"}</p>
                  </div>
                  <Separator />
                  <div>
                    <Label className="text-sm text-muted-foreground">Backstory</Label>
                    <p className="font-medium">{currentPersona.backstory || "Not specified"}</p>
                  </div>
                  <Separator />
                  <div>
                    <Label className="text-sm text-muted-foreground">Geography</Label>
                    <p className="font-medium">{currentPersona.geography || "Not specified"}</p>
                  </div>
                  <Separator />
                  <div>
                    <Label className="text-sm text-muted-foreground">Bot Tone of Voice</Label>
                    <p className="font-medium">{currentPersona.botTone || "Not specified"}</p>
                  </div>
                  <Separator />
                  <div>
                    <Label className="text-sm text-muted-foreground">Sounds Like</Label>
                    <p className="font-medium">{currentPersona.soundsLike || "Not specified"}</p>
                  </div>
                  <Separator />
                  <div>
                    <Label className="text-sm text-muted-foreground">Chats Like</Label>
                    <p className="font-medium">{currentPersona.chatsLike || "Not specified"}</p>
                  </div>
                  <Separator />
                  <div>
                    <Label className="text-sm text-muted-foreground">Other Identity</Label>
                    <p className="font-medium">{currentPersona.otherIdentity || "Not specified"}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Standard Vocabulary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-sm text-muted-foreground">Typical Phrases</Label>
                    <p className="font-medium">{currentPersona.typicalPhrases || "Not specified"}</p>
                  </div>
                  <Separator />
                  <div>
                    <Label className="text-sm text-muted-foreground">Introductions</Label>
                    <p className="font-medium">{currentPersona.introductions || "Not specified"}</p>
                  </div>
                  <Separator />
                  <div>
                    <Label className="text-sm text-muted-foreground">Acknowledgements</Label>
                    <p className="font-medium">{currentPersona.acknowledgements || "Not specified"}</p>
                  </div>
                  <Separator />
                  <div>
                    <Label className="text-sm text-muted-foreground">Confirmations</Label>
                    <p className="font-medium">{currentPersona.confirmations || "Not specified"}</p>
                  </div>
                  <Separator />
                  <div>
                    <Label className="text-sm text-muted-foreground">Apologies</Label>
                    <p className="font-medium">{currentPersona.apologies || "Not specified"}</p>
                  </div>
                  <Separator />
                  <div>
                    <Label className="text-sm text-muted-foreground">Other Vocabulary</Label>
                    <p className="font-medium">{currentPersona.otherVocabulary || "Not specified"}</p>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Button onClick={() => setIsOverviewDialogOpen(false)} className="flex items-center gap-2">
                  <Check className="h-4 w-4" /> Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BotPersonaTab;