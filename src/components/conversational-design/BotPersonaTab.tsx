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

const BotPersonaTab = () => {
  const [personas, setPersonas] = useState<BotPersona[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isOverviewDialogOpen, setIsOverviewDialogOpen] = useState(false);
  const [currentPersona, setCurrentPersona] = useState<BotPersona | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchPersonas();
  }, []);

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
      const success = await deleteBotPersona(id);
      if (success) {
        setPersonas(personas.filter(p => p.id !== id));
        toast({
          title: 'Success',
          description: 'Bot persona deleted successfully.',
        });
      } else {
        throw new Error('Failed to delete bot persona');
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
          setPersonas(personas.map(p => p.id === currentPersona.id ? updatedPersona : p));
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
          setPersonas([...personas, newPersona]);
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