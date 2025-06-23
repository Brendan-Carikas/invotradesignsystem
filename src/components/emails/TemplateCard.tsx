import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { EmailTemplate } from "./emailTemplateData";
import HtmlPreviewDialog from "./HtmlPreviewDialog";
import PlainTextPreviewDialog from "./PlainTextPreviewDialog";

interface TemplateCardProps {
  template: EmailTemplate;
}

export function TemplateCard({ template }: TemplateCardProps) {
  const [showHtmlDialog, setShowHtmlDialog] = useState(false);
  const [showPlainTextDialog, setShowPlainTextDialog] = useState(false);

  return (
    <>
      <Card className="mb-4 hover:shadow-md transition-shadow">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-lg">{template.name}</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                {template.description}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <h3 className="text-sm font-semibold mb-2">Email Header</h3>
          <div className="text-sm mb-3 space-y-1 pl-2 border-l-2 border-slate-200">
            <div className="font-medium">To: <span className="font-normal">{template.to}</span></div>
            {template.cc && <div className="font-medium">CC: <span className="font-normal">{template.cc}</span></div>}
            <div className="font-medium">From: <span className="font-normal">{template.from}</span></div>
            <div className="font-medium">Subject: <span className="font-normal">{template.subject}</span></div>
            <div className="font-medium">Date: <span className="font-normal">{template.date}</span></div>
          </div>
          <div className="flex justify-end items-center mt-4 space-x-2">
            <Button variant="outline" size="sm" onClick={() => setShowHtmlDialog(true)}>
              <Eye className="h-4 w-4 mr-1" />
              View HTML
            </Button>
            <Button variant="outline" size="sm" onClick={() => setShowPlainTextDialog(true)}>
              <Eye className="h-4 w-4 mr-1" />
              View Plain text
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* HTML Email Preview Dialog */}
      <HtmlPreviewDialog 
        isOpen={showHtmlDialog} 
        onClose={() => setShowHtmlDialog(false)} 
        template={template} 
      />

      {/* Plain Text Email Preview Dialog */}
      <PlainTextPreviewDialog 
        isOpen={showPlainTextDialog} 
        onClose={() => setShowPlainTextDialog(false)} 
        template={template} 
      />
    </>
  );
}

export default TemplateCard;
