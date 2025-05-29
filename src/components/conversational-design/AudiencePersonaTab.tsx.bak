import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Plus, Users, Target, FileText } from 'lucide-react';
import PersonaCard from './PersonaCard';
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

const AudiencePersonaTab = () => {
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
          age: formData.age,
          gender: formData.gender,
          personality: formData.personality,
          geography: formData.geography,
          culture: formData.culture,
          family_life: formData.family_life,
          backstory: formData.backstory,
          education: formData.education,
          occupation: formData.occupation,
          income: formData.income,
          living_situation: formData.living_situation,
          interests_hobbies: formData.interests_hobbies,
          turn_offs_challenges: formData.turn_offs_challenges,
          motivations: formData.motivations,
          devices: formData.devices,
          preferred_channels: formData.preferred_channels,
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
          age: formData.age,
          gender: formData.gender,
          personality: formData.personality,
          geography: formData.geography,
          culture: formData.culture,
          family_life: formData.family_life,
          backstory: formData.backstory,
          education: formData.education,
          occupation: formData.occupation,
          income: formData.income,
          living_situation: formData.living_situation,
          interests_hobbies: formData.interests_hobbies,
          turn_offs_challenges: formData.turn_offs_challenges,
          motivations: formData.motivations,
          devices: formData.devices,
          preferred_channels: formData.preferred_channels,
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
          <div className="flex items-center">
            <div className="mr-2">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
            </div>
            <p>Loading audience personas...</p>
          </div>
        </div>
      ) : personas.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-64">
          <p className="text-lg text-muted-foreground">No audience personas found.</p>
          <p className="text-sm text-muted-foreground mb-4">Create your first audience persona to get started.</p>
          <Button onClick={handleCreate}>
            <Plus className="h-4 w-4 mr-2" />
            Create New Persona
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {personas.map((persona) => (
            <PersonaCard
              key={persona.id}
              id={persona.id}
              name={persona.name}
              description={persona.description}
              updatedAt={persona.updated_at}
              onView={() => handleView(persona)}
              onEdit={() => handleEdit(persona)}
              onDelete={() => {
                setPersonaToDelete(persona);
                setIsDeleteDialogOpen(true);
              }}
            />
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <Label htmlFor="age">Age</Label>
                <Input 
                  id="age" 
                  name="age" 
                  value={formData.age || ''} 
                  onChange={handleInputChange} 
                  placeholder="e.g., 25-34"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Input 
                  id="gender" 
                  name="gender" 
                  value={formData.gender || ''} 
                  onChange={handleInputChange} 
                  placeholder="e.g., Various"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="personality">Personality</Label>
                <Textarea 
                  id="personality" 
                  name="personality" 
                  value={formData.personality || ''} 
                  onChange={handleInputChange} 
                  placeholder="Key personality traits"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="geography">Geography</Label>
                <Input 
                  id="geography" 
                  name="geography" 
                  value={formData.geography || ''} 
                  onChange={handleInputChange} 
                  placeholder="Location information"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="culture">Culture</Label>
                <Textarea 
                  id="culture" 
                  name="culture" 
                  value={formData.culture || ''} 
                  onChange={handleInputChange} 
                  placeholder="Cultural background or influences"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="family_life">Family Life</Label>
                <Textarea 
                  id="family_life" 
                  name="family_life" 
                  value={formData.family_life || ''} 
                  onChange={handleInputChange} 
                  placeholder="Family situation"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="backstory">Backstory</Label>
                <Textarea 
                  id="backstory" 
                  name="backstory" 
                  value={formData.backstory || ''} 
                  onChange={handleInputChange} 
                  placeholder="Background information"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="education">Education</Label>
                <Input 
                  id="education" 
                  name="education" 
                  value={formData.education || ''} 
                  onChange={handleInputChange} 
                  placeholder="Educational background"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="occupation">Occupation</Label>
                <Input 
                  id="occupation" 
                  name="occupation" 
                  value={formData.occupation || ''} 
                  onChange={handleInputChange} 
                  placeholder="Job or profession"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="income">Income</Label>
                <Input 
                  id="income" 
                  name="income" 
                  value={formData.income || ''} 
                  onChange={handleInputChange} 
                  placeholder="Income level"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="living_situation">Living Situation</Label>
                <Textarea 
                  id="living_situation" 
                  name="living_situation" 
                  value={formData.living_situation || ''} 
                  onChange={handleInputChange} 
                  placeholder="Housing situation"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="interests_hobbies">Interests/Hobbies</Label>
                <Textarea 
                  id="interests_hobbies" 
                  name="interests_hobbies" 
                  value={formData.interests_hobbies || ''} 
                  onChange={handleInputChange} 
                  placeholder="What they enjoy doing"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="turn_offs_challenges">Turn Offs/Challenges</Label>
                <Textarea 
                  id="turn_offs_challenges" 
                  name="turn_offs_challenges" 
                  value={formData.turn_offs_challenges || ''} 
                  onChange={handleInputChange} 
                  placeholder="Pain points and challenges"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="motivations">Motivations</Label>
                <Textarea 
                  id="motivations" 
                  name="motivations" 
                  value={formData.motivations || ''} 
                  onChange={handleInputChange} 
                  placeholder="What drives their decisions"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="devices">Devices</Label>
                <Input 
                  id="devices" 
                  name="devices" 
                  value={formData.devices || ''} 
                  onChange={handleInputChange} 
                  placeholder="Technology devices used"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="preferred_channels">Preferred Channels</Label>
                <Textarea 
                  id="preferred_channels" 
                  name="preferred_channels" 
                  value={formData.preferred_channels || ''} 
                  onChange={handleInputChange} 
                  placeholder="Communication channels they prefer"
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
                <h3 className="text-lg font-medium">Age</h3>
                <p className="text-muted-foreground">{currentPersona.age || 'N/A'}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium">Gender</h3>
                <p className="text-muted-foreground">{currentPersona.gender || 'N/A'}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium">Personality</h3>
                <p className="text-muted-foreground">{currentPersona.personality || 'N/A'}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium">Geography</h3>
                <p className="text-muted-foreground">{currentPersona.geography || 'N/A'}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium">Culture</h3>
                <p className="text-muted-foreground">{currentPersona.culture || 'N/A'}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium">Family Life</h3>
                <p className="text-muted-foreground">{currentPersona.family_life || 'N/A'}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium">Backstory</h3>
                <p className="text-muted-foreground">{currentPersona.backstory || 'N/A'}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium">Education</h3>
                <p className="text-muted-foreground">{currentPersona.education || 'N/A'}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium">Occupation</h3>
                <p className="text-muted-foreground">{currentPersona.occupation || 'N/A'}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium">Income</h3>
                <p className="text-muted-foreground">{currentPersona.income || 'N/A'}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium">Living Situation</h3>
                <p className="text-muted-foreground">{currentPersona.living_situation || 'N/A'}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium">Interests/Hobbies</h3>
                <p className="text-muted-foreground">{currentPersona.interests_hobbies || 'N/A'}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium">Turn Offs/Challenges</h3>
                <p className="text-muted-foreground">{currentPersona.turn_offs_challenges || 'N/A'}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium">Motivations</h3>
                <p className="text-muted-foreground">{currentPersona.motivations || 'N/A'}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium">Devices</h3>
                <p className="text-muted-foreground">{currentPersona.devices || 'N/A'}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium">Preferred Channels</h3>
                <p className="text-muted-foreground">{currentPersona.preferred_channels || 'N/A'}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AudiencePersonaTab;