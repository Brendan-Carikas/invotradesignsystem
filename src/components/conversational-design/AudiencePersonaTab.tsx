import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { AudiencePersona, sampleAudiencePersonas } from '@/types/AudiencePersona';
import { 
  getAudiencePersonas, 
  createAudiencePersona, 
  updateAudiencePersona, 
  deleteAudiencePersona 
} from '@/lib/supabase';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export const AudiencePersonaTab = () => {
  const [personas, setPersonas] = useState<AudiencePersona[]>(sampleAudiencePersonas);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isOverviewDialogOpen, setIsOverviewDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [personaToDelete, setPersonaToDelete] = useState<AudiencePersona | undefined>(undefined);
  const [currentPersona, setCurrentPersona] = useState<AudiencePersona | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState<Partial<AudiencePersona>>({});
  const { toast } = useToast();

  // Fetch personas from Supabase on component mount
  useEffect(() => {
    fetchPersonasAndMerge();
  }, []);

  // Function to fetch personas from Supabase and merge with sample personas
  const fetchPersonasAndMerge = async () => {
    setIsLoading(true);
    try {
      const supabasePersonas = await getAudiencePersonas();
      
      // Filter out sample personas that exist in Supabase (by name)
      const supabasePersonaNames = supabasePersonas.map(p => p.name);
      const filteredSamplePersonas = sampleAudiencePersonas.filter(
        sp => !supabasePersonaNames.includes(sp.name)
      );
      
      // Combine filtered sample personas with Supabase personas
      setPersonas([...filteredSamplePersonas, ...supabasePersonas]);
    } catch (error) {
      console.error('Error fetching audience personas:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to fetch audience personas.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Function to handle creating a new persona
  const handleCreate = () => {
    setCurrentPersona(undefined);
    setFormData({});
    setIsDialogOpen(true);
  };

  // Function to handle editing an existing persona
  const handleEdit = (persona: AudiencePersona) => {
    setCurrentPersona(persona);
    setFormData(persona);
    setIsDialogOpen(true);
  };

  // Function to handle viewing a persona's details
  const handleView = (persona: AudiencePersona) => {
    setCurrentPersona(persona);
    setIsOverviewDialogOpen(true);
  };

  // Function to handle deleting a persona
  const handleDelete = async (id: string) => {
    try {
      // Check if it's a sample persona (starts with 'sample-')
      if (id.startsWith('sample-')) {
        // Just remove from local state for sample personas
        setPersonas(prev => prev.filter(p => p.id !== id));
        toast({
          title: 'Success',
          description: 'Sample audience persona removed.',
        });
      } else {
        // Delete from Supabase for real personas
        const success = await deleteAudiencePersona(id);
        if (success) {
          setPersonas(prev => prev.filter(p => p.id !== id));
          toast({
            title: 'Success',
            description: 'Audience persona deleted successfully.',
          });
        } else {
          throw new Error('Failed to delete audience persona');
        }
      }
    } catch (error: any) {
      console.error('Error deleting audience persona:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message || 'Failed to delete audience persona.',
      });
    }
  };

  // Function to handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Function to handle saving a persona (create or update)
  const handleSave = async () => {
    try {
      // Validate required fields
      if (!formData.name?.trim()) {
        toast({
          variant: 'destructive',
          title: 'Validation Error',
          description: 'Audience persona name is required.',
        });
        return;
      }

      if (!formData.description?.trim()) {
        toast({
          variant: 'destructive',
          title: 'Validation Error',
          description: 'Description is required.',
        });
        return;
      }

      if (!formData.demographics?.trim()) {
        toast({
          variant: 'destructive',
          title: 'Validation Error',
          description: 'Demographics information is required.',
        });
        return;
      }

      if (!formData.goals?.trim()) {
        toast({
          variant: 'destructive',
          title: 'Validation Error',
          description: 'Goals are required.',
        });
        return;
      }

      let savedPersona: AudiencePersona | null = null;
      
      if (currentPersona?.id && !currentPersona.id.startsWith('sample-')) {
        // Update existing persona in Supabase
        savedPersona = await updateAudiencePersona(currentPersona.id, formData);
        if (savedPersona) {
          setPersonas(prev => prev.map(p => p.id === currentPersona.id ? savedPersona! : p));
          toast({
            title: 'Success',
            description: `Audience persona ${formData.name} updated successfully.`,
          });
          setIsDialogOpen(false);
          fetchPersonasAndMerge();
        } else {
          throw new Error('Failed to update audience persona');
        }
      } else if (currentPersona?.id?.startsWith('sample-')) {
        // For sample personas, create a new one in Supabase
        const newPersona = {
          name: formData.name!,
          description: formData.description!,
          demographics: formData.demographics!,
          goals: formData.goals!,
          pain_points: formData.pain_points,
          motivations: formData.motivations,
          behaviors: formData.behaviors,
          preferences: formData.preferences,
          tech_proficiency: formData.tech_proficiency,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };
        
        savedPersona = await createAudiencePersona(newPersona);
        if (savedPersona) {
          // Remove the sample persona and add the new one
          setPersonas(prev => [...prev.filter(p => p.id !== currentPersona.id), savedPersona!]);
          toast({
            title: 'Success',
            description: `Audience persona ${formData.name} created successfully.`,
          });
          setIsDialogOpen(false);
          fetchPersonasAndMerge();
        } else {
          throw new Error('Failed to create audience persona');
        }
      } else {
        // Create new persona
        const newPersona = {
          name: formData.name!,
          description: formData.description!,
          demographics: formData.demographics!,
          goals: formData.goals!,
          pain_points: formData.pain_points,
          motivations: formData.motivations,
          behaviors: formData.behaviors,
          preferences: formData.preferences,
          tech_proficiency: formData.tech_proficiency,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };
        
        savedPersona = await createAudiencePersona(newPersona);
        if (savedPersona) {
          setPersonas(prev => [...prev, savedPersona!]);
          toast({
            title: 'Success',
            description: `Audience persona ${formData.name} created successfully.`,
          });
          setIsDialogOpen(false);
          fetchPersonasAndMerge();
        } else {
          throw new Error('Failed to create audience persona');
        }
      }
    } catch (error: any) {
      console.error('Error saving audience persona:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message || 'Failed to save audience persona.',
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Audience Personas</h2>
        <Button onClick={handleCreate}>
          <Plus className="mr-2 h-4 w-4" /> Create New Persona
        </Button>
      </div>
      
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <p>Loading audience personas...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {personas.map((persona) => (
            <Card key={persona.id} className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>{persona.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">{persona.description}</p>
                <div className="space-y-2">
                  <div>
                    <span className="font-medium">Demographics:</span> {persona.demographics}
                  </div>
                  <div>
                    <span className="font-medium">Goals:</span> {persona.goals}
                  </div>
                  <div>
                    <span className="font-medium">Pain Points:</span> {persona.pain_points || 'N/A'}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline" size="sm" onClick={() => handleView(persona)} title="View">
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
      )}

      {/* Create/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{currentPersona ? `Edit ${currentPersona.name}` : 'Create New Audience Persona'}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input 
                  id="name" 
                  name="name" 
                  value={formData.name || ''} 
                  onChange={handleInputChange} 
                  placeholder="e.g., Corporate Professional"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea 
                  id="description" 
                  name="description" 
                  value={formData.description || ''} 
                  onChange={handleInputChange} 
                  placeholder="Brief description of this audience persona"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="demographics">Demographics *</Label>
                <Textarea 
                  id="demographics" 
                  name="demographics" 
                  value={formData.demographics || ''} 
                  onChange={handleInputChange} 
                  placeholder="Age range, location, education level, etc."
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="goals">Goals *</Label>
                <Textarea 
                  id="goals" 
                  name="goals" 
                  value={formData.goals || ''} 
                  onChange={handleInputChange} 
                  placeholder="What are their primary goals and objectives?"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="pain_points">Pain Points</Label>
                <Textarea 
                  id="pain_points" 
                  name="pain_points" 
                  value={formData.pain_points || ''} 
                  onChange={handleInputChange} 
                  placeholder="What challenges or frustrations do they face?"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="motivations">Motivations</Label>
                <Textarea 
                  id="motivations" 
                  name="motivations" 
                  value={formData.motivations || ''} 
                  onChange={handleInputChange} 
                  placeholder="What drives their decisions and actions?"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="behaviors">Behaviors</Label>
                <Textarea 
                  id="behaviors" 
                  name="behaviors" 
                  value={formData.behaviors || ''} 
                  onChange={handleInputChange} 
                  placeholder="How do they typically behave when making decisions?"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="preferences">Preferences</Label>
                <Textarea 
                  id="preferences" 
                  name="preferences" 
                  value={formData.preferences || ''} 
                  onChange={handleInputChange} 
                  placeholder="What are their communication preferences?"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="tech_proficiency">Tech Proficiency</Label>
                <Textarea 
                  id="tech_proficiency" 
                  name="tech_proficiency" 
                  value={formData.tech_proficiency || ''} 
                  onChange={handleInputChange} 
                  placeholder="How comfortable are they with technology?"
                />
              </div>
            </div>
            
            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
              <Button onClick={handleSave}>Save</Button>
            </div>
          </div>
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
            <div className="space-y-4 py-4">
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
                <p className="text-muted-foreground">{currentPersona.pain_points || 'N/A'}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium">Motivations</h3>
                <p className="text-muted-foreground">{currentPersona.motivations || 'N/A'}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium">Behaviors</h3>
                <p className="text-muted-foreground">{currentPersona.behaviors || 'N/A'}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium">Preferences</h3>
                <p className="text-muted-foreground">{currentPersona.preferences || 'N/A'}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium">Tech Proficiency</h3>
                <p className="text-muted-foreground">{currentPersona.tech_proficiency || 'N/A'}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};


