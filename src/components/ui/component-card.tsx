
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ComponentCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  to: string;
  status?: "stable" | "beta" | "experimental";
  className?: string;
}

export function ComponentCard({
  title,
  icon,
  description,
  to,
  status = "stable",
  className,
}: ComponentCardProps) {
  const statusColors = {
    stable: "bg-green-500/10 text-green-500 border-green-500/20",
    beta: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    experimental: "bg-red-500/10 text-red-500 border-red-500/20",
  };

  return (
    <Link to={to} className="block group">
      <Card 
        className={cn(
          "h-full overflow-hidden transition-all duration-300",
          "border border-border/40 bg-card/50 hover:bg-card",
          "hover:shadow-lg hover:shadow-primary/5",
          "card-shine hover:-translate-y-1",
          className
        )}
      >
        <CardContent className="p-6">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
            {icon}
          </div>
          <h3 className="mb-2 font-medium text-card-foreground">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Badge 
            variant="outline" 
            className={cn("text-xs font-normal", statusColors[status])}
          >
            {status}
          </Badge>
        </CardFooter>
      </Card>
    </Link>
  );
}
