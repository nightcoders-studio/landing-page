import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base font-normal leading-normal transition-colors focus:outline-none focus:ring-0 active:border-none hover:border-[#e4882b]",
  {
    variants: {
      variant: {
        default: "bg-[#293239] text-[#e8eaec] border-2 border-[#e4882b] flex inline-flex self-start px-10 py-6 mt-auto text-xl transition duration-300 ease-in-out md:text-base xl:text-xl 2xl:text-2xl 3xl:text-5xl 2xl:py-8 3xl:p-12 3xl:text-5xl hover:bg-[#39434b] hover:translate-y-1 whitespace-nowrap",
      },
      size: {
        sm: "h-12 px-4 py-3 text-sm w-full inline-flex",
        md: "h-12 px-4 py-3 text-base",
        lg: "h-12 px-4 py-3 text-base",
        xl: "h-12 px-4 py-3 text-base",
        "2xl": "h-12 px-4 py-3 text-base",
      },
    },
    compoundVariants: [
      {
        size: "sm",
        className: "font-['Roboto']",
      },
      {
        size: "md",
        className: "font-['Roboto']",
      },
      {
        size: "lg",
        className: "font-['Roboto']",
      },
      {
        size: "xl",
        className: "font-['Roboto']",
      },
      {
        size: "2xl",
        className: "font-['Roboto']",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";
Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default"]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "2xl"]),
  asChild: PropTypes.bool,
};

export { Button, buttonVariants };
