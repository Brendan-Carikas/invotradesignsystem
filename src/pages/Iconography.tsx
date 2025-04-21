
import React, { useState, useEffect } from "react";
import AppShell from "@/components/layout/AppShell";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import * as icons from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Type for the icon components
type IconComponent = React.FC<{ size?: number | string; className?: string }>;

const Iconography = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [totalIconCount, setTotalIconCount] = useState(0);
  const { toast } = useToast();

  // Filter out non-icon exports from lucide-react and ensure we only have valid components
  const iconEntries = Object.entries(icons).filter(
    ([name, component]) => 
      typeof component === "function" && 
      name !== "createLucideIcon" && 
      name !== "default" &&
      name !== "__esModule" &&
      name !== "Icon"
  );

  useEffect(() => {
    setTotalIconCount(iconEntries.length);
  }, [iconEntries.length]);

  // Filter icons based on search query
  const filteredIcons = searchQuery.trim() === "" 
    ? iconEntries 
    : iconEntries.filter(([name]) => 
        name.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const copyToClipboard = (iconName: string) => {
    const importStatement = `import { ${iconName} } from 'lucide-react'`;
    navigator.clipboard.writeText(importStatement);
    toast({
      title: "Copied to clipboard",
      description: importStatement,
      duration: 2000,
    });
  };

  return (
    <AppShell>
      <div className="space-y-6">
        <div className="relative w-full max-w-xl">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            className="pl-9 h-11"
            placeholder="Search icons..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {filteredIcons.length > 0 ? (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              {filteredIcons.length} matching results
            </p>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-4">
              {filteredIcons.map(([name, IconComp]) => {
                const IconComponent = IconComp as IconComponent;
                
                return (
                  <div
                    key={name}
                    className="flex flex-col items-center justify-center p-3 rounded-lg border hover:bg-accent/50 transition-colors cursor-pointer"
                    onClick={() => copyToClipboard(name)}
                  >
                    <IconComponent className="h-5 w-5 mb-2" />
                    <p className="text-[11px] text-center text-muted-foreground truncate w-full">
                      {name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="text-center py-12 border border-dashed rounded-lg">
            <Search className="mx-auto h-12 w-12 text-muted-foreground opacity-20 mb-4" />
            <p className="text-muted-foreground">No icons found matching "{searchQuery}"</p>
          </div>
        )}
      </div>
    </AppShell>
  );
};

export default Iconography;
