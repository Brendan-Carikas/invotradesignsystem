import React from 'react';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ChecklistItem {
  text: string;
  checked?: boolean;
  icon?: React.ReactNode;
}

export interface GuidanceCardProps {
  title: string;
  description?: string;
  checklist?: ChecklistItem[];
  className?: string;
  children?: React.ReactNode;
  hideCheckIcons?: boolean;
}

export const GuidanceCard: React.FC<GuidanceCardProps> = ({
  title,
  description,
  checklist,
  className,
  children,
  hideCheckIcons = false,
}) => {
  return (
    <div className={cn('border rounded-lg p-4', className)}>
      <h4 className="text-md font-semibold mb-2">{title}</h4>
      
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
      
      {checklist && checklist.length > 0 && (
        <div className="space-y-4 mt-3">
          {checklist.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              {!hideCheckIcons && (item.icon || (
                <CheckCircle 
                  className={cn(
                    'h-5 w-5 mt-0.5 flex-shrink-0',
                    item.checked !== false ? 'text-green-500' : 'text-muted-foreground/50'
                  )}
                />
              ))}
              <div>
                <p className="font-normal text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {children}
    </div>
  );
};
