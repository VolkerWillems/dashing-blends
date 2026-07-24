"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 border-[3px] border-[var(--ink)] text-sm font-black uppercase tracking-[0.08em] shadow-[4px_4px_0_var(--ink)] transition-[transform,box-shadow,background-color,color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--ink)] [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/95",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
        outline: "bg-[var(--paper)] text-[var(--ink)] hover:bg-secondary",
        ghost: "border-transparent bg-transparent text-foreground shadow-none hover:border-[var(--ink)] hover:bg-muted hover:shadow-[2px_2px_0_var(--ink)]",
        link: "h-auto min-h-0 border-0 bg-transparent p-0 text-secondary shadow-none hover:translate-x-0 hover:translate-y-0 hover:shadow-none hover:text-foreground",
      },
      size: {
        default: "px-5 py-2.5",
        sm: "min-h-10 px-4 py-2 text-xs",
        lg: "min-h-12 px-6 py-3 text-sm sm:text-base",
        icon: "size-11 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
