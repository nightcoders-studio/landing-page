import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center border-solid border-2 font-light py-6 text-text-default-quaternary border-text-brand rounded-2xl justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-0 active:border-none hover:border-text-brand",
  {
    variants: {
      variant: {
        default:
          "bg-default-quaternary text-text-default-quaternary font-light shadow hover:bg-bg-default-tertiary hover:text-default-secondary active:border-none focus:border-none",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 active:border-none focus:border-none",
        outline:
          "border border-input bg-background shadow-sm hover:translate-y-1 hover:text-accent-foreground active:border-none focus:border-none",
        secondary:
          "inline-flex items-center justify-center bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 border-0 p-0 m-0 transform transition-transform hover:translate-y-1 active:border-none focus:border-none",
        ghost:
          "hover:bg-accent hover:text-accent-foreground active:border-none focus:border-none",
        link: "text-primary underline-offset-4 hover:underline active:border-none focus:border-none",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);


const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
