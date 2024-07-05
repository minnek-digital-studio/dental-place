import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@ui/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-bold ring-offset-background  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:opacity-80 transition-opacity duration-200",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        dark:
          "bg-dark text-dark-foreground hover:opacity-80",
        outline:
          "border border-light bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        info: "bg-dark-info text-dark-info-foreground",
        "light-info": "bg-light-info text-light-info-foreground",
        link: "text-link font-normal underline-offset-4 hover:underline ",
      },
      size: {
        default: "h-10 px-9 py-2",
        sm: "h-9 px-5 font-medium",
        lg: "h-11 px-8",
        icon: "size-8 min-h-8 min-w-8",
        link: "h-min w-min px-0 py-0"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
