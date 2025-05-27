import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Plus, Edit, Trash2, Calendar, Building, Users, Eye, Check } from "lucide-react";
import { BotPersona, sampleBotPersonas } from "@/types/BotPersona";
import BotPersonaForm from "./BotPersonaForm";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";

const BotPersonaTab = () => {
  const [personas, setPersonas] = useState<BotPersona[]>(sampleBotPersonas);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isOverviewDialogOpen, setIsOverviewDialogOpen] = useState(false);
  const [currentPersona, setCurrentPersona] = useState<BotPersona | undefined>(undefined);

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

  const handleDelete = (id: string) => {
    setPersonas(personas.filter(p => p.id !== id));
  };

  const handleSave = (personaData: Partial<BotPersona>) => {
    if (currentPersona) {
      // Update existing persona
      setPersonas(personas.map(p => 
        p.id === currentPersona.id ? { ...p, ...personaData, updatedAt: new Date() } : p
      ));
    } else {
      // Create new persona
      const newPersona: BotPersona = {
        id: Date.now().toString(),
        name: personaData.name || "Unnamed Bot",
        organization: personaData.organization || "",
        audience: personaData.audience || "",
        brandTone: personaData.brandTone || "",
        serviceTasks: personaData.serviceTasks || "",
        persuasiveTasks: personaData.persuasiveTasks || "",
        channels: personaData.channels || "",
        register: personaData.register || {
          formal: false,
          sincere: false,
          serious: false,
          subjective: false,
          casual: false,
          humorous: false,
        },
        age: personaData.age,
        gender: personaData.gender,
        personality: personaData.personality || "",
        backstory: personaData.backstory,
        geography: personaData.geography,
        botTone: personaData.botTone || "",
        soundsLike: personaData.soundsLike,
        chatsLike: personaData.chatsLike,
        otherIdentity: personaData.otherIdentity,
        typicalPhrases: personaData.typicalPhrases || "",
        introductions: personaData.introductions || "",
        acknowledgements: personaData.acknowledgements || "",
        confirmations: personaData.confirmations || "",
        apologies: personaData.apologies || "",
        otherVocabulary: personaData.otherVocabulary,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      setPersonas([...personas, newPersona]);
    }
    setIsDialogOpen(false);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {personas.map(persona => (
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
                  <Users className="h-3 w-3" /> {persona.audience.substring(0, 100)}{persona.audience.length > 100 ? '...' : ''}
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
              <Button variant="outline" size="sm" onClick={() => handleDelete(persona.id)} title="Delete">
                <Trash2 className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={() => handleEdit(persona)} title="Edit">
                <Edit className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

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