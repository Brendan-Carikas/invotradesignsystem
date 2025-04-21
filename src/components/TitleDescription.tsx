import React from "react";

interface TitleDescriptionProps {
  title: string;
  description?: string;
  className?: string;
}

const TitleDescription: React.FC<TitleDescriptionProps> = ({
  title,
  description,
  className = "",
}) => {
  return (
    <div className={`mb-6 ${className}`}>
      <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
      {description && (
        <p className="mt-2 text-muted-foreground">{description}</p>
      )}
    </div>
  );
};

export default TitleDescription;
