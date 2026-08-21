import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id?: string;
  align?: "center" | "left" | "right";
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  id,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClasses = {
    center: "text-center mx-auto",
    left: "text-left",
    right: "text-right ml-auto",
  };

  return (
    <div
      className={`max-w-2xl px-4 sm:px-6 lg:px-8 mb-2 ${alignClasses[align]} ${className}`}
    >
      {/* Heading with fixed mb-6 bottom margin */}
      <h2
        id={id}
        className="font-quicksand text-3xl font-bold text-primary sm:text-4xl"
      >
        {title}
      </h2>

      {/* Subtitle / Quote */}
      {subtitle && (
        <p className="font-quicksand text-base font-medium text-dark sm:text-lg">
          &ldquo;{subtitle}&rdquo;
        </p>
      )}
    </div>
  );
}
