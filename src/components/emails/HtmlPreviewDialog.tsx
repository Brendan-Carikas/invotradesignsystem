import React, { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Laptop, Smartphone, Copy, Check } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import styles from "./EmailPreview.module.css";

interface HtmlPreviewDialogProps {
  isOpen: boolean;
  onClose: () => void;
  template: {
    name: string;
    htmlBody: string;
    isCompleteHtml?: boolean; // Flag to indicate if htmlBody contains complete HTML document
  };
}

export function HtmlPreviewDialog({ isOpen, onClose, template }: HtmlPreviewDialogProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    // Reset copy state when dialog opens
    if (isOpen) {
      setIsCopied(false);
    }
    
    if (isOpen && contentRef.current) {
      // Find all images in the content and apply styling
      const images = contentRef.current.querySelectorAll('img');
      images.forEach(img => {
        // Ensure images are responsive and properly sized
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
        img.style.display = 'block';
        img.style.margin = '0 auto';
        img.style.marginBottom = '1rem';
        
        // Add error handling for images
        img.onerror = () => {
          img.style.display = 'none';
          const errorText = document.createElement('div');
          errorText.textContent = '[Image could not be loaded]';
          errorText.style.color = '#888';
          errorText.style.textAlign = 'center';
          errorText.style.padding = '10px';
          errorText.style.border = '1px dashed #ccc';
          errorText.style.margin = '10px 0';
          img.parentNode?.insertBefore(errorText, img.nextSibling);
        };
      });
      
      // Ensure unordered lists display bullets properly
      const lists = contentRef.current.querySelectorAll('ul');
      lists.forEach(list => {
        list.style.listStyleType = 'disc';
        list.style.paddingLeft = '2rem';
        
        const listItems = list.querySelectorAll('li');
        listItems.forEach(item => {
          item.style.display = 'list-item';
          item.style.marginBottom = '0.5rem';
        });
      });
    }
  }, [isOpen, template.htmlBody]);
  
  const copyHtmlToClipboard = async () => {
    try {
      let htmlToCopy = template.htmlBody;
      
      // If it's not a complete HTML document, wrap it in proper HTML structure
      if (!template.isCompleteHtml) {
        // Get the computed styles from the rendered content
        const styleTag = document.createElement('style');
        styleTag.textContent = `
          body {
            margin: 0;
            padding: 20px;
            font-family: Arial, sans-serif;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            line-height: 1.5;
            color: #333333;
          }
          p {
            margin: 0 0 16px 0;
            font-size: 16px;
            line-height: 1.5;
            color: #333333;
          }
          h1, h2, h3, h4, h5, h6 {
            margin-top: 0;
            margin-bottom: 16px;
            color: #111111;
          }
          a {
            color: #0066cc;
            text-decoration: underline;
          }
          ul, ol {
            margin: 0 0 16px 0;
            padding-left: 24px;
          }
          li {
            margin-bottom: 8px;
          }
          img {
            max-width: 100%;
            height: auto;
          }
        `;
        
        htmlToCopy = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${template.name}</title>
  ${styleTag.outerHTML}
</head>
<body>
${template.htmlBody}
</body>
</html>`;
      }
      
      await navigator.clipboard.writeText(htmlToCopy);
      setIsCopied(true);
      toast({
        title: "HTML copied to clipboard",
        description: template.isCompleteHtml 
          ? "Complete HTML document has been copied." 
          : "HTML email code with proper structure has been copied.",
      });
      
      // Reset copy state after 2 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy HTML: ', err);
      toast({
        title: "Copy failed",
        description: "Could not copy HTML to clipboard. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{template.name}</DialogTitle>
          <DialogDescription>
            Preview of the HTML email template
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
          className={`border rounded-md p-4 mt-2 bg-white transition-all duration-300 ${viewMode === 'mobile' ? 'max-w-[375px] mx-auto' : 'w-full'}`}
        >
          {template.isCompleteHtml ? (
            <iframe 
              srcDoc={template.htmlBody}
              className="w-full min-h-[500px] border-0"
              title="HTML Preview"
            />
          ) : (
            <div 
              ref={contentRef}
              className={styles.emailPreview}
              dangerouslySetInnerHTML={{ __html: template.htmlBody }} 
            />
          )}
        </div>
        <DialogFooter className="mt-4 flex justify-between w-full">
          <Button 
            variant="outline" 
            onClick={copyHtmlToClipboard}
            className="flex items-center gap-1"
            disabled={isCopied}
          >
            {isCopied ? (
              <>
                <Check className="h-4 w-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Copy HTML code
              </>
            )}
          </Button>
          <Button variant="outline" onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default HtmlPreviewDialog;
