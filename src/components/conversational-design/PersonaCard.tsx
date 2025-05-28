import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, Edit, Trash2, Calendar } from 'lucide-react';

// Helper function to format dates
export const formatDate = (dateString?: string) => {
  if (!dateString) return 'N/A';
  
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    }).format(date);
  } catch (error) {
    return 'Invalid date';
  }
};

export interface PersonaCardProps {
  id: string;
  name: string;
  description: string;
  icon?: React.ReactNode;
  subtitle?: string;
  details?: Array<{
    icon: React.ReactNode;
    text: string;
  }>;
  updatedAt?: string;
  audiencePersonas?: string[]; // Array of audience persona IDs
  audiencePersonasList?: Array<{ id: string; name: string }>; // List of all audience personas for lookup
  onView?: (id: string) => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const PersonaCard: React.FC<PersonaCardProps> = ({
  id,
  name,
  description,
  icon,
  subtitle,
  details = [],
  updatedAt,
  audiencePersonas = [],
  audiencePersonasList = [],
  onView,
  onEdit,
  onDelete
}) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle>{name}</CardTitle>
        {subtitle && (
          <CardDescription className="flex items-center gap-1 text-xs pt-2">
            {icon} {subtitle}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-2">
          
          {details.map((detail, index) => (
            <div key={index} className="flex items-center gap-1 text-sm text-muted-foreground text-xs">
              {detail.icon} {detail.text}
            </div>
          ))}
          
          {/* Display audience personas if available */}
          {audiencePersonas.length > 0 && audiencePersonasList.length > 0 && (
            <div className="mt-2">
              <div className="text-xs text-muted-foreground mb-1">Audience Personas:</div>
              <div className="flex flex-wrap gap-1">
                {audiencePersonas.map(personaId => {
                  const persona = audiencePersonasList.find(p => p.id === personaId);
                  return persona ? (
                    <span key={persona.id} className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">
                      {persona.name}
                    </span>
                  ) : null;
                })}
              </div>
            </div>
          )}
          
          {updatedAt && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
              <Calendar className="h-3 w-3" /> Updated {formatDate(updatedAt)}
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2 pt-2">
        {onView && (
          <Button variant="outline" size="sm" onClick={() => onView(id)} title="View">
            <Eye className="h-4 w-4" />
          </Button>
        )}
        {onEdit && (
          <Button variant="outline" size="sm" onClick={() => onEdit(id)} title="Edit">
            <Edit className="h-4 w-4" />
          </Button>
        )}
        {onDelete && (
          <Button variant="outline" size="sm" onClick={() => onDelete(id)} title="Delete">
            <Trash2 className="h-4 w-4" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default PersonaCard;
