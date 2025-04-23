import React from "react";
import useTheme from "@/styles/useTheme";

interface TitleDescriptionProps {
  title: string;
  description?: string;
  className?: string;
  titleSize?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const TitleDescription: React.FC<TitleDescriptionProps> = ({
  title,
  description,
  className = "",
  titleSize = "h1",
}) => {
  const { getTypography } = useTheme();
  
  // Get typography styles from theme
  const fontSize = getTypography(`headings.${titleSize}.fontSize`);
  const fontWeight = getTypography(`headings.${titleSize}.fontWeight`);
  const lineHeight = getTypography(`headings.${titleSize}.lineHeight`);

  // Create inline style based on theme values
  const headingStyle = {
    fontSize,
    fontWeight,
    lineHeight,
  };

  return (
    <section className={`mb-8 ${className}`}>
      <h1 style={headingStyle} className="tracking-tight">{title}</h1>
      {description && (
        <p className="mt-1 text-lg text-muted-foreground">{description}</p>
      )}
    </section>
  );
};

export default TitleDescription;
