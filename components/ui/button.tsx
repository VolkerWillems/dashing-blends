"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 border-[3px] border-[var(--ink)] text-sm font-black uppercase tracking-[0.08em] shadow-[4px_4px_0_var(--ink)] transition-[transform,box-shadow,background-color,color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--ink)] [&_*]:text-current [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary !text-[#fff1cf] hover:bg-primary/95 hover:!text-[#fff1cf]",
        secondary:
          "bg-secondary !text-[#130911] hover:bg-secondary/90 hover:!text-[#130911]",
        outline:
          "bg-[#f6dfaa] !text-[#130911] hover:bg-secondary hover:!text-[#130911]",
        ghost:
          "border-transparent bg-transparent !text-[#fff1cf] shadow-none hover:border-[var(--ink)] hover:bg-muted hover:!text-[#fff1cf] hover:shadow-[2px_2px_0_var(--ink)]",
        link:
          "h-auto min-h-0 border-0 bg-transparent p-0 !text-[#e8bd55] shadow-none hover:translate-x-0 hover:translate-y-0 hover:!text-[#fff1cf] hover:shadow-none",
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
