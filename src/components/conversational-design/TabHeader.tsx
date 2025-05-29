import React from 'react';
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

export interface TabHeaderProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const TabHeader: React.FC<TabHeaderProps> = ({ icon: Icon, title, description }) => {
  return (
    <CardHeader>
      <CardTitle className="flex items-center gap-2 text-lg">
        <Icon className="h-5 w-5 text-primary" />
        {title}
      </CardTitle>
      <CardDescription>
        {description}
      </CardDescription>
    </CardHeader>
  );
};

export default TabHeader;
