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
  details?: { icon: React.ReactNode; text: string }[];
  audiencePersonas?: string[];
  audiencePersonasList?: any[];
  updatedAt?: string;
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

const PersonaCard: React.FC<PersonaCardProps> = ({
  id,
  name,
  description,
  icon,
  subtitle,
  details,
  audiencePersonas,
  audiencePersonasList,
  updatedAt,
  onView,
  onEdit,
  onDelete
}) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          {icon && <span>{icon}</span>}
          <CardTitle className="text-lg">{name}</CardTitle>
        </div>
        {subtitle && <div className="text-sm text-muted-foreground">{subtitle}</div>}
        <CardDescription className="text-xs pt-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-2">
          {details && details.length > 0 && details.map((detail, index) => (
            <div key={index} className="flex items-center gap-1 text-xs">
              {detail.icon && <span>{detail.icon}</span>}
              <span>{detail.text}</span>
            </div>
          ))}
          {updatedAt && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
              <Calendar className="h-3 w-3" /> Updated {formatDate(updatedAt)}
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2 pt-2">
        {onView && (
          <Button variant="outline" size="sm" onClick={onView} title="View">
            <Eye className="h-4 w-4" />
          </Button>
        )}
        {onEdit && (
          <Button variant="outline" size="sm" onClick={onEdit} title="Edit">
            <Edit className="h-4 w-4" />
          </Button>
        )}
        {onDelete && (
          <Button variant="outline" size="sm" onClick={onDelete} title="Delete">
            <Trash2 className="h-4 w-4" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default PersonaCard;
