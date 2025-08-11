import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Layers } from "lucide-react";
import chatAnatomyImage from "@/assets/images/ChatAnatomy.png";

const AnatomyTab: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Layers className="h-5 w-5 text-primary" />
          Anatomy of a Conversational Interface
        </CardTitle>
        <CardDescription>
          Understanding the key components and structure of conversational interfaces
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="w-full h-[500px] relative mb-6">
          <img 
            src={chatAnatomyImage} 
            alt="Anatomy of a Conversational Interface" 
            className="w-full h-full object-contain"
          />
        </div>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            The anatomy of a conversational interface includes various components that work together to create a seamless user experience. Understanding these elements helps in designing more effective conversational systems.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnatomyTab;
