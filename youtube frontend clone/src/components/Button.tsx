import { cva, VariantProps } from "class-variance-authority";
import React, { ComponentProps } from "react";

const buttonStyles = cva(["trasistion-colors"], {
  variants: {
    variant: {
      default: ["bg-secondary", "hover:bg-secondary-hover"],
      ghost: ["hover:bg-gray-100"],
      dark: [
        "bg-secondary-dark",
        "hover:bg-secondary-dark-hover",
        "text-secondary",
      ],
    },
    size: {
      default: [" rounded", "p-2"],
      icon: [
        "rounded-full",
        "w-10",
        "h-10",
        "flex",
        "items-center",
        "justify-center",
        "p-2.5",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type buttonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;
function Button({ variant, size, ...props }: buttonProps) {
  return (
    <button {...props} className={buttonStyles({ variant, size })}></button>
  );
}

export default Button;
