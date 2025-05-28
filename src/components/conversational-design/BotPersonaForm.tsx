import React, { useState, useEffect } from "react";
import { BotPersona } from "@/types/BotPersona";
import { AudiencePersona } from "@/types/AudiencePersona";
import { getAudiencePersonas } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface BotPersonaFormProps {
  persona?: BotPersona;
  onSave: (persona: Partial<BotPersona>) => void;
  onCancel: () => void;
}

const BotPersonaForm: React.FC<BotPersonaFormProps> = ({ persona, onSave, onCancel }) => {
  const [formData, setFormData] = useState<Partial<BotPersona>>(
    persona || {
      register: {
        formal: false,
        sincere: false,
        serious: false,
        subjective: false,
        casual: false,
        humorous: false,
      },
      audiencePersonas: [],
    }
  );

  // State for audience personas
  const [audiencePersonas, setAudiencePersonas] = useState<AudiencePersona[]>([]);
  const [isLoadingPersonas, setIsLoadingPersonas] = useState(false);

  // Wizard state
  const [currentStep, setCurrentStep] = useState<number>(0);
  const steps = ["Context", "Identity", "Standard Vocabulary", "Review"];
  
  // Fetch audience personas when component mounts
  useEffect(() => {
    const fetchAudiencePersonas = async () => {
      setIsLoadingPersonas(true);
      try {
        const personas = await getAudiencePersonas();
        setAudiencePersonas(personas);
      } catch (error) {
        console.error('Error fetching audience personas:', error);
      } finally {
        setIsLoadingPersonas(false);
      }
    };
    
    fetchAudiencePersonas();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegisterChange = (key: keyof BotPersona["register"], value: boolean) => {
    setFormData((prev) => ({
      ...prev,
      register: {
        ...prev.register,
        [key]: value,
      },
    }));
  };

  // Handle audience persona selection/deselection
  const handleAudiencePersonaToggle = (personaId: string) => {
    setFormData((prev) => {
      const currentPersonas = prev.audiencePersonas || [];
      const updatedPersonas = currentPersonas.includes(personaId)
        ? currentPersonas.filter(id => id !== personaId) // Remove if already selected
        : [...currentPersonas, personaId]; // Add if not selected
      
      return {
        ...prev,
        audiencePersonas: updatedPersonas
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === steps.length - 1) {
      // Prepare data for submission
      const preparedData: Partial<BotPersona> = {
        ...formData,
        // Ensure all required fields have at least empty strings
        name: formData.name || '',
        organization: formData.organization || '',
        audiencePersonas: formData.audiencePersonas || [], // Include audience personas
        brandTone: formData.brandTone || '',
        serviceTasks: formData.serviceTasks || '',
        persuasiveTasks: formData.persuasiveTasks || '',
        channels: formData.channels || '',
        personality: formData.personality || '',
        botTone: formData.botTone || '',
        typicalPhrases: formData.typicalPhrases || '',
        introductions: formData.introductions || '',
        acknowledgements: formData.acknowledgements || '',
        confirmations: formData.confirmations || '',
        apologies: formData.apologies || '',
        // Ensure register is properly formatted
        register: formData.register || {
          formal: false,
          sincere: false,
          serious: false,
          subjective: false,
          casual: false,
          humorous: false,
        }
      };
      
      onSave(preparedData);
    } else {
      // Otherwise, move to the next step
      nextStep();
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Progress indicator
  const renderProgress = () => {
    return (
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`text-sm font-medium ${index <= currentStep ? 'text-primary' : 'text-muted-foreground'}`}
            >
              {step}
            </div>
          ))}
        </div>
        <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
          <div 
            className="bg-primary h-full transition-all duration-300" 
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          ></div>
        </div>
      </div>
    );
  };

  // Context step content
  const renderContextStep = () => {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Bot Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
              placeholder="Enter bot name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="organization">Organisation/Department</Label>
            <Input
              id="organization"
              name="organization"
              value={formData.organization || ""}
              onChange={handleChange}
              placeholder="Enter organization or department"
              required
            />
          </div>
        </div>



        <div className="space-y-2">
          <Label htmlFor="audiencePersonas">Audience personas</Label>
          {isLoadingPersonas ? (
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
              <span>Loading audience personas...</span>
            </div>
          ) : audiencePersonas.length === 0 ? (
            <div className="text-sm text-muted-foreground">No audience personas available</div>
          ) : (
            <div className="border rounded-md p-2">
              <div className="flex flex-wrap gap-2 mb-2">
                {formData.audiencePersonas && formData.audiencePersonas.length > 0 ? (
                  formData.audiencePersonas.map(personaId => {
                    const persona = audiencePersonas.find(p => p.id === personaId);
                    return persona ? (
                      <Badge key={persona.id} variant="secondary" className="flex items-center gap-1">
                        {persona.name}
                        <button
                          type="button"
                          onClick={() => handleAudiencePersonaToggle(persona.id)}
                          className="h-3.5 w-3.5 rounded-full hover:bg-muted-foreground/20"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ) : null;
                  })
                ) : (
                  <div className="text-sm text-muted-foreground">No personas selected</div>
                )}
              </div>
              
              <ScrollArea className="h-40">
                <div className="space-y-1">
                  {audiencePersonas.map(persona => (
                    <div 
                      key={persona.id}
                      className={`flex items-center justify-between p-2 text-sm rounded-md cursor-pointer hover:bg-muted ${
                        formData.audiencePersonas?.includes(persona.id) ? 'bg-muted' : ''
                      }`}
                      onClick={() => handleAudiencePersonaToggle(persona.id)}
                    >
                      <div>
                        <div className="font-medium">{persona.name}</div>
                        <div className="text-xs text-muted-foreground">{persona.description}</div>
                      </div>
                      {formData.audiencePersonas?.includes(persona.id) && (
                        <Check className="h-4 w-4 text-primary" />
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="brandTone">Brand tone of voice</Label>
          <textarea
            id="brandTone"
            name="brandTone"
            value={formData.brandTone || ""}
            onChange={handleChange}
            placeholder="Describe the brand's tone of voice"
            className="w-full h-24 p-2 border rounded-md"
            required
          />
          <div className="text-xs text-muted-foreground">Humor • Formality • Respectfulness • Enthusiasm</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label htmlFor="serviceTasks">Service tasks</Label>
            <textarea
              id="serviceTasks"
              name="serviceTasks"
              value={formData.serviceTasks || ""}
              onChange={handleChange}
              placeholder="List the service tasks the bot will perform"
              className="w-full h-24 p-2 border rounded-md"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="persuasiveTasks">Persuasive tasks</Label>
            <textarea
              id="persuasiveTasks"
              name="persuasiveTasks"
              value={formData.persuasiveTasks || ""}
              onChange={handleChange}
              placeholder="List any persuasive tasks the bot will perform"
              className="w-full h-24 p-2 border rounded-md"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="channels">Channels</Label>
            <textarea
              id="channels"
              name="channels"
              value={formData.channels || ""}
              onChange={handleChange}
              placeholder="List the channels where the bot will be available"
              className="w-full h-24 p-2 border rounded-md"
              required
            />
          </div>
        </div>
      </div>
    );
  };

  // Identity step content
  const renderIdentityStep = () => {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label>Register</Label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="formal"
                  checked={formData.register?.formal || false}
                  onChange={(e) => handleRegisterChange("formal", e.target.checked)}
                  className="rounded"
                />
                <Label htmlFor="formal" className="text-sm font-normal">Formal</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="sincere"
                  checked={formData.register?.sincere || false}
                  onChange={(e) => handleRegisterChange("sincere", e.target.checked)}
                  className="rounded"
                />
                <Label htmlFor="sincere" className="text-sm font-normal">Sincere</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="serious"
                  checked={formData.register?.serious || false}
                  onChange={(e) => handleRegisterChange("serious", e.target.checked)}
                  className="rounded"
                />
                <Label htmlFor="serious" className="text-sm font-normal">Serious</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="subjective"
                  checked={formData.register?.subjective || false}
                  onChange={(e) => handleRegisterChange("subjective", e.target.checked)}
                  className="rounded"
                />
                <Label htmlFor="subjective" className="text-sm font-normal">Subjective</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="casual"
                  checked={formData.register?.casual || false}
                  onChange={(e) => handleRegisterChange("casual", e.target.checked)}
                  className="rounded"
                />
                <Label htmlFor="casual" className="text-sm font-normal">Casual</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="humorous"
                  checked={formData.register?.humorous || false}
                  onChange={(e) => handleRegisterChange("humorous", e.target.checked)}
                  className="rounded"
                />
                <Label htmlFor="humorous" className="text-sm font-normal">Humorous</Label>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                name="age"
                value={formData.age || ""}
                onChange={handleChange}
                placeholder="Bot age (if applicable)"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <select
                id="gender"
                name="gender"
                value={formData.gender || ""}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              >
                <option value="">Select gender (if applicable)</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="neutral">Gender-neutral</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="personality">Personality</Label>
            <textarea
              id="personality"
              name="personality"
              value={formData.personality || ""}
              onChange={handleChange}
              placeholder="Describe the bot's personality traits"
              className="w-full h-24 p-2 border rounded-md"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label htmlFor="backstory">Backstory</Label>
            <textarea
              id="backstory"
              name="backstory"
              value={formData.backstory || ""}
              onChange={handleChange}
              placeholder="Provide a backstory for the bot (if applicable)"
              className="w-full h-24 p-2 border rounded-md"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="geography">Geography</Label>
            <textarea
              id="geography"
              name="geography"
              value={formData.geography || ""}
              onChange={handleChange}
              placeholder="Specify the bot's geographic context (if applicable)"
              className="w-full h-24 p-2 border rounded-md"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="botTone">Bot tone of voice</Label>
            <textarea
              id="botTone"
              name="botTone"
              value={formData.botTone || ""}
              onChange={handleChange}
              placeholder="Describe the bot's specific tone of voice"
              className="w-full h-24 p-2 border rounded-md"
              required
            />
            <div className="text-xs text-muted-foreground">Humor • Formality • Respectfulness • Enthusiasm</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label htmlFor="soundsLike">Sounds like</Label>
            <textarea
              id="soundsLike"
              name="soundsLike"
              value={formData.soundsLike || ""}
              onChange={handleChange}
              placeholder="How does the bot sound? (voice type, pitch, speed, energy, accent)"
              className="w-full h-24 p-2 border rounded-md"
            />
            <div className="text-xs text-muted-foreground">Voice type • Pitch • Speed • Energy • Accent</div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="chatsLike">Chats like</Label>
            <textarea
              id="chatsLike"
              name="chatsLike"
              value={formData.chatsLike || ""}
              onChange={handleChange}
              placeholder="How does the bot chat? (punctuation, emoji, images, slang)"
              className="w-full h-24 p-2 border rounded-md"
            />
            <div className="text-xs text-muted-foreground">Punctuation • Emoji • Images • Slang</div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="otherIdentity">Other</Label>
            <textarea
              id="otherIdentity"
              name="otherIdentity"
              value={formData.otherIdentity || ""}
              onChange={handleChange}
              placeholder="Any other identity characteristics"
              className="w-full h-24 p-2 border rounded-md"
            />
          </div>
        </div>
      </div>
    );
  };

  // Vocabulary step content
  const renderVocabularyStep = () => {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label htmlFor="typicalPhrases">Typical things to say</Label>
            <textarea
              id="typicalPhrases"
              name="typicalPhrases"
              value={formData.typicalPhrases || ""}
              onChange={handleChange}
              placeholder="Common phrases or expressions the bot uses"
              className="w-full h-24 p-2 border rounded-md"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="introductions">Introductions</Label>
            <textarea
              id="introductions"
              name="introductions"
              value={formData.introductions || ""}
              onChange={handleChange}
              placeholder="How the bot introduces itself"
              className="w-full h-24 p-2 border rounded-md"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="acknowledgements">Acknowledgements</Label>
            <textarea
              id="acknowledgements"
              name="acknowledgements"
              value={formData.acknowledgements || ""}
              onChange={handleChange}
              placeholder="How the bot acknowledges user input"
              className="w-full h-24 p-2 border rounded-md"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label htmlFor="confirmations">Confirmations</Label>
            <textarea
              id="confirmations"
              name="confirmations"
              value={formData.confirmations || ""}
              onChange={handleChange}
              placeholder="How the bot confirms actions or information"
              className="w-full h-24 p-2 border rounded-md"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="apologies">Apologies</Label>
            <textarea
              id="apologies"
              name="apologies"
              value={formData.apologies || ""}
              onChange={handleChange}
              placeholder="How the bot apologizes or handles errors"
              className="w-full h-24 p-2 border rounded-md"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="otherVocabulary">Other</Label>
            <textarea
              id="otherVocabulary"
              name="otherVocabulary"
              value={formData.otherVocabulary || ""}
              onChange={handleChange}
              placeholder="Any other standard vocabulary"
              className="w-full h-24 p-2 border rounded-md"
            />
          </div>
        </div>
      </div>
    );
  };

  // Review step content
  const renderReviewStep = () => {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Context Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm text-muted-foreground">Bot Name</Label>
                <p className="font-medium">{formData.name || "Not specified"}</p>
              </div>
              <div>
                <Label className="text-sm text-muted-foreground">Organisation/Department</Label>
                <p className="font-medium">{formData.organization || "Not specified"}</p>
              </div>
            </div>
            <Separator />

            <div>
              <Label className="text-sm text-muted-foreground">Audience Personas</Label>
              {formData.audiencePersonas && formData.audiencePersonas.length > 0 ? (
                <div className="flex flex-wrap gap-2 mt-1">
                  {formData.audiencePersonas.map(personaId => {
                    const persona = audiencePersonas.find(p => p.id === personaId);
                    return persona ? (
                      <span key={persona.id} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                        {persona.name}
                      </span>
                    ) : null;
                  })}
                </div>
              ) : (
                <p className="font-medium">No audience personas selected</p>
              )}
            </div>
            <Separator />
            <div>
              <Label className="text-sm text-muted-foreground">Brand Tone</Label>
              <p className="font-medium">{formData.brandTone || "Not specified"}</p>
            </div>
            <Separator />
            <div>
              <Label className="text-sm text-muted-foreground">Service Tasks</Label>
              <p className="font-medium">{formData.serviceTasks || "Not specified"}</p>
            </div>
            <Separator />
            <div>
              <Label className="text-sm text-muted-foreground">Persuasive Tasks</Label>
              <p className="font-medium">{formData.persuasiveTasks || "Not specified"}</p>
            </div>
            <Separator />
            <div>
              <Label className="text-sm text-muted-foreground">Channels</Label>
              <p className="font-medium">{formData.channels || "Not specified"}</p>
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
                  {formData.register?.formal && <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Formal</span>}
                  {formData.register?.sincere && <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Sincere</span>}
                  {formData.register?.serious && <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Serious</span>}
                  {formData.register?.subjective && <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Subjective</span>}
                  {formData.register?.casual && <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Casual</span>}
                  {formData.register?.humorous && <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Humorous</span>}
                </div>
              </div>
              <div>
                <Label className="text-sm text-muted-foreground">Age</Label>
                <p className="font-medium">{formData.age || "Not specified"}</p>
              </div>
              <div>
                <Label className="text-sm text-muted-foreground">Gender</Label>
                <p className="font-medium">{formData.gender || "Not specified"}</p>
              </div>
            </div>
            <Separator />
            <div>
              <Label className="text-sm text-muted-foreground">Personality</Label>
              <p className="font-medium">{formData.personality || "Not specified"}</p>
            </div>
            <Separator />
            <div>
              <Label className="text-sm text-muted-foreground">Backstory</Label>
              <p className="font-medium">{formData.backstory || "Not specified"}</p>
            </div>
            <Separator />
            <div>
              <Label className="text-sm text-muted-foreground">Geography</Label>
              <p className="font-medium">{formData.geography || "Not specified"}</p>
            </div>
            <Separator />
            <div>
              <Label className="text-sm text-muted-foreground">Bot Tone of Voice</Label>
              <p className="font-medium">{formData.botTone || "Not specified"}</p>
            </div>
            <Separator />
            <div>
              <Label className="text-sm text-muted-foreground">Sounds Like</Label>
              <p className="font-medium">{formData.soundsLike || "Not specified"}</p>
            </div>
            <Separator />
            <div>
              <Label className="text-sm text-muted-foreground">Chats Like</Label>
              <p className="font-medium">{formData.chatsLike || "Not specified"}</p>
            </div>
            <Separator />
            <div>
              <Label className="text-sm text-muted-foreground">Other Identity</Label>
              <p className="font-medium">{formData.otherIdentity || "Not specified"}</p>
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
              <p className="font-medium">{formData.typicalPhrases || "Not specified"}</p>
            </div>
            <Separator />
            <div>
              <Label className="text-sm text-muted-foreground">Introductions</Label>
              <p className="font-medium">{formData.introductions || "Not specified"}</p>
            </div>
            <Separator />
            <div>
              <Label className="text-sm text-muted-foreground">Acknowledgements</Label>
              <p className="font-medium">{formData.acknowledgements || "Not specified"}</p>
            </div>
            <Separator />
            <div>
              <Label className="text-sm text-muted-foreground">Confirmations</Label>
              <p className="font-medium">{formData.confirmations || "Not specified"}</p>
            </div>
            <Separator />
            <div>
              <Label className="text-sm text-muted-foreground">Apologies</Label>
              <p className="font-medium">{formData.apologies || "Not specified"}</p>
            </div>
            <Separator />
            <div>
              <Label className="text-sm text-muted-foreground">Other Vocabulary</Label>
              <p className="font-medium">{formData.otherVocabulary || "Not specified"}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  // Render current step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return renderContextStep();
      case 1:
        return renderIdentityStep();
      case 2:
        return renderVocabularyStep();
      case 3:
        return renderReviewStep();
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {renderProgress()}
      
      <div className="min-h-[400px]">
        {renderStepContent()}
      </div>

      <div className="flex justify-between pt-4 border-t">
        <div>
          {currentStep > 0 && (
            <Button type="button" variant="outline" onClick={prevStep} className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Back
            </Button>
          )}
        </div>
        <div className="flex gap-2">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          
          {currentStep < steps.length - 1 ? (
            <Button type="button" onClick={(e) => { e.preventDefault(); nextStep(); }} className="flex items-center gap-2">
              Next <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button type="button" onClick={(e) => { e.preventDefault(); onSave(formData); }} className="flex items-center gap-2">
              <Check className="h-4 w-4" /> {persona ? "Update" : "Create"} Bot Persona
            </Button>
          )}
        </div>
      </div>
    </form>
  );
};

export default BotPersonaForm;