import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Laptop, Smartphone } from "lucide-react";

interface PlainTextPreviewDialogProps {
  isOpen: boolean;
  onClose: () => void;
  template: {
    name: string;
    plainTextBody: string;
  };
}

export function PlainTextPreviewDialog({ isOpen, onClose, template }: PlainTextPreviewDialogProps) {
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{template.name}</DialogTitle>
          <DialogDescription>
            Preview of the plain text email template
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center space-x-2 mb-4">
          <div className="inline-flex rounded-md shadow-sm">
            <Button 
              variant={viewMode === 'desktop' ? "default" : "outline"}
              size="sm"
              className="rounded-r-none"
              onClick={() => setViewMode('desktop')}
            >
              <Laptop className="h-4 w-4 mr-1" />
              Desktop
            </Button>
            <Button 
              variant={viewMode === 'mobile' ? "default" : "outline"}
              size="sm"
              className="rounded-l-none"
              onClick={() => setViewMode('mobile')}
            >
              <Smartphone className="h-4 w-4 mr-1" />
              Mobile
            </Button>
          </div>
        </div>
        <div 
          className={`border rounded-md p-4 mt-2 bg-white font-mono whitespace-pre-wrap transition-all duration-300 ${viewMode === 'mobile' ? 'max-w-[375px] mx-auto' : 'w-full'}`}
        >
          {template.plainTextBody}
        </div>
        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default PlainTextPreviewDialog;
