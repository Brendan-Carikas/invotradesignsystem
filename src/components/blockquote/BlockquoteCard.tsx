import React from 'react';

import { cn } from '@/lib/utils';

export interface BlockquoteCardProps {
  quote: string;
  author?: string;
  source?: string;
  citation?: string;
  className?: string;
  children?: React.ReactNode;
}

export const BlockquoteCard: React.FC<BlockquoteCardProps> = ({
  quote,
  author,
  source,
  citation,
  className,
  children,
}) => {
  return (
    <div className={cn('border-l-4 border-primary pl-4 py-2', className)}>
      <blockquote className="relative">
        
        <p className="text-lg mb-2 text-gray-500">{quote}</p>
        
        {(author || source) && (
          <footer className="text-xs text-gray-700 mt-2">
            {author && <span className="font-semibold">{author}</span>}
            {author && source && <span>, </span>}
            {source && <cite className="not-italic">{source}</cite>}
            {citation && (
              <span className="block text-xs mt-1">{citation}</span>
            )}
          </footer>
        )}
        
        {children}
      </blockquote>
    </div>
  );
};
