import React, { useState, useEffect } from "react";
import { AIAssistant } from "@/types/AIAssistant";
import { BotPersona } from "@/types/BotPersona";
import { getBotPersonas } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DialogFooter,
} from "@/components/ui/dialog";

interface AIAssistantEditFormProps {
  assistant?: AIAssistant;
  onSave: (formData: Partial<AIAssistant>) => void;
  onCancel: () => void;
}

const AIAssistantEditForm: React.FC<AIAssistantEditFormProps> = ({ 
  assistant, 
  onSave,
  onCancel
}) => {
  const [formData, setFormData] = useState({
    name: assistant?.name || "",
    description: assistant?.description || "",
    botPersona: assistant?.botPersona || "",
    flow: assistant?.flow || "",
    systemPrompt: assistant?.systemPrompt || "",
  });
  const [botPersonas, setBotPersonas] = useState<BotPersona[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Fetch bot personas from Supabase
  useEffect(() => {
    const fetchBotPersonas = async () => {
      setIsLoading(true);
      try {
        const data = await getBotPersonas();
        setBotPersonas(data);
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

    fetchBotPersonas();
  }, [toast]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generateSystemPrompt = () => {
    // Find the selected bot persona
    const selectedPersona = botPersonas.find(p => p.id === formData.botPersona);
    
    if (!selectedPersona) {
      toast({
        title: "Error",
        description: "Please select a Bot Persona first.",
        variant: "destructive",
      });
      return;
    }
    
    // Generate a system prompt based on the selected bot persona and other form data
    const generatedPrompt = `You are an AI assistant named ${formData.name || "[Assistant Name]"}.

Your purpose is ${formData.description || "to assist users with their needs"}.

You should embody the following characteristics:
- Name: ${selectedPersona.name}
- Personality: ${selectedPersona.personality || "Professional and helpful"}
- Tone of voice: ${selectedPersona.botTone || "Friendly and informative"}
- Communication style: ${selectedPersona.chatsLike || "Clear, concise, and supportive"}

When interacting with users, you should sound like ${selectedPersona.soundsLike || "a knowledgeable assistant"}.

Typical phrases you might use include: ${selectedPersona.typicalPhrases || "How can I help you today?"}

Your responses should be ${selectedPersona.register?.formal ? "formal" : "casual"} and ${selectedPersona.register?.sincere ? "sincere" : "conversational"}.
`;
    
    // Update the form data with the generated prompt
    setFormData(prev => ({
      ...prev,
      systemPrompt: generatedPrompt
    }));
    
    toast({
      title: "Success",
      description: "System prompt generated based on selected Bot Persona.",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Assistant Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter assistant name"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="botPersona">Bot Persona</Label>
          <Select
            name="botPersona"
            value={formData.botPersona}
            onValueChange={(value) => handleSelectChange("botPersona", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a bot persona" />
            </SelectTrigger>
            <SelectContent>
              {isLoading ? (
                <SelectItem value="loading">Loading...</SelectItem>
              ) : botPersonas.length > 0 ? (
                botPersonas.map((persona) => (
                  <SelectItem key={persona.id} value={persona.id}>
                    {persona.name}
                  </SelectItem>
                ))
              ) : (
                <SelectItem value="no-personas">No bot personas available</SelectItem>
              )}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Describe what this AI assistant does and its purpose"
          className="w-full h-24 p-2 border rounded-md"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="systemPrompt">System Prompt</Label>
        <textarea
          id="systemPrompt"
          name="systemPrompt"
          value={formData.systemPrompt}
          onChange={handleInputChange}
          placeholder="Enter the system prompt that defines how this AI assistant should behave"
          className="w-full h-40 p-2 border rounded-md"
        />
        <div className="text-xs text-muted-foreground">The system prompt provides instructions to the AI about its role, capabilities, and constraints.</div>
        <div className="mt-2">
          <Button 
            type="button" 
            variant="outline" 
            onClick={generateSystemPrompt}
            className="flex items-center gap-2"
          >
            Generate Prompt
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="flow">Conversation Flow</Label>
          <Select
            name="flow"
            value={formData.flow}
            onValueChange={(value) => handleSelectChange("flow", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a flow" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="standard">Standard</SelectItem>
              <SelectItem value="guided">Guided</SelectItem>
              <SelectItem value="interactive">Interactive</SelectItem>
              <SelectItem value="custom">Custom</SelectItem>
            </SelectContent>
          </Select>
          <div className="text-xs text-muted-foreground">How the conversation with this assistant will be structured</div>
        </div>
      </div>

      <DialogFooter className="pt-4">
        <Button variant="outline" type="button" onClick={onCancel}>Cancel</Button>
        <Button type="submit">{assistant ? 'Update Assistant' : 'Create Assistant'}</Button>
      </DialogFooter>
    </form>
  );
};

export default AIAssistantEditForm;
