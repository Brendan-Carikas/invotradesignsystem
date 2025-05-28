import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Edit, Plus, Trash2, Eye } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { AudiencePersona, createAudiencePersona, getAudiencePersonas, updateAudiencePersona, deleteAudiencePersona } from "@/lib/supabase";

// Sample audience personas
const sampleAudiencePersonas: AudiencePersona[] = [
  {
    id: "sample-audience-1",
    name: "Corporate Manager",
    description: "Mid-level manager at a large corporation seeking efficiency tools",
    demographics: "35-45 years old, urban professional, tech-savvy but not technical",
    goals: "Improve team productivity, streamline communication, reduce meeting time",
    painPoints: "Information overload, team coordination challenges, reporting overhead",
    preferences: "Mobile-first solutions, integrations with existing tools, minimal learning curve",
    behaviors: "Checks email first thing in morning, relies heavily on calendar, delegates technical tasks"
  },
  {
    id: "sample-audience-2",
    name: "Field Worker",
    description: "On-site technician who needs access to information while working remotely",
    demographics: "25-55 years old, technically skilled, works in various environments",
    goals: "Quick access to technical documentation, efficient reporting, minimal data entry",
    painPoints: "Poor connectivity in some locations, difficult to use complex interfaces with gloves/equipment",
    preferences: "Voice commands, offline capabilities, rugged device compatibility",
    behaviors: "Uses mobile device throughout workday, needs quick answers, works in challenging environments"
  },
  {
    id: "sample-audience-3",
    name: "Executive Leader",
    description: "C-suite executive who needs high-level insights and strategic information",
    demographics: "45-60 years old, highly educated, time-constrained",
    goals: "Strategic decision making, performance monitoring, competitive intelligence",
    painPoints: "Too much detail, difficulty extracting key insights, limited time for deep analysis",
    preferences: "Visual dashboards, executive summaries, mobile accessibility",
    behaviors: "Reviews reports between meetings, delegates detailed analysis, focuses on outcomes"
  }
];

// AudiencePersonaForm component
const AudiencePersonaForm: React.FC<{
  persona?: AudiencePersona;
  onSave: (persona: AudiencePersona) => void;
  onCancel: () => void;
}> = ({ persona, onSave, onCancel }) => {
  const [formData, setFormData] = useState<AudiencePersona>({
    id: persona?.id || crypto.randomUUID(),
    name: persona?.name || "",
    description: persona?.description || "",
    demographics: persona?.demographics || "",
    goals: persona?.goals || "",
    painPoints: persona?.painPoints || "",
    preferences: persona?.preferences || "",
    behaviors: persona?.behaviors || ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-1">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          rows={2}
        />
      </div>

      <div>
        <label htmlFor="demographics" className="block text-sm font-medium mb-1">Demographics</label>
        <textarea
          id="demographics"
          name="demographics"
          value={formData.demographics}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          rows={3}
        />
      </div>

      <div>
        <label htmlFor="goals" className="block text-sm font-medium mb-1">Goals</label>
        <textarea
          id="goals"
          name="goals"
          value={formData.goals}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          rows={3}
        />
      </div>

      <div>
        <label htmlFor="painPoints" className="block text-sm font-medium mb-1">Pain Points</label>
        <textarea
          id="painPoints"
          name="painPoints"
          value={formData.painPoints}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          rows={3}
        />
      </div>

      <div>
        <label htmlFor="preferences" className="block text-sm font-medium mb-1">Preferences</label>
        <textarea
          id="preferences"
          name="preferences"
          value={formData.preferences}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          rows={3}
        />
      </div>

      <div>
        <label htmlFor="behaviors" className="block text-sm font-medium mb-1">Behaviors</label>
        <textarea
          id="behaviors"
          name="behaviors"
          value={formData.behaviors}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          rows={3}
        />
      </div>

      <div className="flex justify-end space-x-2 pt-4">
        <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
};

const AudiencePersonaTab = () => {
  const [personas, setPersonas] = useState<AudiencePersona[]>(sampleAudiencePersonas);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isOverviewDialogOpen, setIsOverviewDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [personaToDelete, setPersonaToDelete] = useState<AudiencePersona | undefined>(undefined);
  const [currentPersona, setCurrentPersona] = useState<AudiencePersona | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  const fetchPersonasAndMerge = async () => {
    try {
      setIsLoading(true);
      const fetchedPersonas = await getAudiencePersonas();
      
      // Filter out sample personas from fetched personas
      const nonSamplePersonas = fetchedPersonas.filter(
        persona => !sampleAudiencePersonas.some(sample => sample.id === persona.id)
      );
      
      // Combine sample personas with fetched personas
      setPersonas([...sampleAudiencePersonas, ...nonSamplePersonas]);
    } catch (error) {
      console.error("Error fetching audience personas:", error);
      toast({
        title: "Error",
        description: "Failed to load audience personas",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPersonasAndMerge();
  }, []);

  const handleCreate = () => {
    setCurrentPersona(undefined);
    setIsDialogOpen(true);
  };

  const handleEdit = (persona: AudiencePersona) => {
    setCurrentPersona(persona);
    setIsDialogOpen(true);
  };

  const handleView = (persona: AudiencePersona) => {
    setCurrentPersona(persona);
    setIsOverviewDialogOpen(true);
  };

  const handleSave = async (persona: AudiencePersona) => {
    try {
      const isSamplePersona = sampleAudiencePersonas.some(sample => sample.id === persona.id);
      
      if (isSamplePersona) {
        // If editing a sample persona, create a new one instead
        const newPersona = {
          ...persona,
          id: crypto.randomUUID()
        };
        
        await createAudiencePersona(newPersona);
        toast({
          title: "Success",
          description: "Audience persona created based on sample",
        });
      } else if (currentPersona) {
        // Update existing persona
        await updateAudiencePersona(persona);
        toast({
          title: "Success",
          description: "Audience persona updated",
        });
      } else {
        // Create new persona
        await createAudiencePersona(persona);
        toast({
          title: "Success",
          description: "Audience persona created",
        });
      }
      
      setIsDialogOpen(false);
      fetchPersonasAndMerge();
    } catch (error) {
      console.error("Error saving audience persona:", error);
      toast({
        title: "Error",
        description: "Failed to save audience persona",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (personaId: string) => {
    try {
      const isSamplePersona = sampleAudiencePersonas.some(sample => sample.id === personaId);
      
      if (isSamplePersona) {
        // For sample personas, just remove from the current view
        setPersonas(personas.filter(p => p.id !== personaId));
        toast({
          title: "Success",
          description: "Sample audience persona removed from view",
        });
      } else {
        // Delete from Supabase
        await deleteAudiencePersona(personaId);
        toast({
          title: "Success",
          description: "Audience persona deleted",
        });
        fetchPersonasAndMerge();
      }
    } catch (error) {
      console.error("Error deleting audience persona:", error);
      toast({
        title: "Error",
        description: "Failed to delete audience persona",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Audience Personas</h2>
        <Button onClick={handleCreate}>
          <Plus className="mr-2 h-4 w-4" /> Create Audience Persona
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {personas.map((persona) => (
          <Card key={persona.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{persona.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground mb-4">{persona.description}</p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">Demographics</h4>
                  <p className="text-sm text-muted-foreground">{persona.demographics}</p>
                </div>
                
                <div>
                  <h4 className="font-medium">Goals</h4>
                  <p className="text-sm text-muted-foreground">{persona.goals}</p>
                </div>
                
                <div>
                  <h4 className="font-medium">Pain Points</h4>
                  <p className="text-sm text-muted-foreground">{persona.painPoints}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2 border-t pt-4">
              <Button variant="outline" size="sm" onClick={() => handleView(persona)} title="View Details">
                <Eye className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={() => handleEdit(persona)} title="Edit">
                <Edit className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setPersonaToDelete(persona);
                  setIsDeleteDialogOpen(true);
                }}
                title="Delete"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Create/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{currentPersona ? `Edit ${currentPersona.name}` : 'Create New Audience Persona'}</DialogTitle>
          </DialogHeader>
          <AudiencePersonaForm
            persona={currentPersona}
            onSave={handleSave}
            onCancel={() => setIsDialogOpen(false)}
          />
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p>Are you sure you want to delete the audience persona "{personaToDelete?.name}"?</p>
            <p className="text-muted-foreground mt-2">This action cannot be undone.</p>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                if (personaToDelete) {
                  handleDelete(personaToDelete.id);
                  setIsDeleteDialogOpen(false);
                }
              }}
            >
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Overview Dialog */}
      <Dialog open={isOverviewDialogOpen} onOpenChange={setIsOverviewDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{currentPersona ? `${currentPersona.name} Overview` : 'Audience Persona Overview'}</DialogTitle>
          </DialogHeader>
          {currentPersona && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium">Description</h3>
                <p className="text-muted-foreground">{currentPersona.description}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium">Demographics</h3>
                <p className="text-muted-foreground">{currentPersona.demographics}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium">Goals</h3>
                <p className="text-muted-foreground">{currentPersona.goals}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium">Pain Points</h3>
                <p className="text-muted-foreground">{currentPersona.painPoints}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium">Preferences</h3>
                <p className="text-muted-foreground">{currentPersona.preferences}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium">Behaviors</h3>
                <p className="text-muted-foreground">{currentPersona.behaviors}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AudiencePersonaTab;
