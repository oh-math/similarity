import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";
import { mergeClass } from "../../lib/utils";

// TODO: VERIFICAR SINTAXE TAILWIND

const headingVariants = cva(
  "text-black dark:text-white text-center lg:text-left font extrabold leading-tight tracking-tight",
  {
    variants: {
      size: {
        default: "text-4x1 md:text-5x1 lg:text-7x1",
        lg: "text-5x1 md:text-6x1 lg:text-7x1",
        sm: "text-2x1 md:text-3x1 lg:text-4x1",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface LargeHeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const LargeHeading = forwardRef<HTMLHeadingElement, LargeHeadingProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        {...props}
        className={mergeClass(headingVariants({ size, className }))}
      >
        {children}
      </h1>
    );
  }
);

LargeHeading.displayName = "LargeHeading";

export default LargeHeading;
