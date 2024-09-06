// typography.jsx
import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

// Define the variants for typography
const typographyVariants = cva("text-foreground", {
  variants: {
    variant: {
      heading: "font-bold text-gray-800",
      body: "text-gray-600",
      muted: "text-gray-400",
      // Add more variants as needed
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
  },
  defaultVariants: {
    variant: "body",
    size: "md",
  },
});

// Create the Typography component
const Typography = React.forwardRef(
  ({ variant, size, asChild, className, ...rest }, ref) => {
    const Comp = asChild ? Slot : "p"; // Use Slot if asChild is true, otherwise default to 'p'

    return (
      <Comp
        ref={ref}
        className={typographyVariants({ variant, size, className })}
        {...rest}
      />
    );
  }
);

Typography.displayName = "Typography"; // Set display name for debugging

export default Typography;