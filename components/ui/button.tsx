import { TextClassContext } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Platform, Pressable } from 'react-native';

const buttonVariants = cva(
  cn(
    'group shrink-0 flex-row items-center justify-center gap-2 rounded-pill',
    Platform.select({ web: 'outline-none transition-all disabled:pointer-events-none' })
  ),
  {
    variants: {
      variant: {
        default: cn('bg-primary active:bg-primary/90', Platform.select({ web: 'hover:bg-primary/90' })),
        outline: cn(
          'border-border bg-background active:bg-accent border',
          Platform.select({ web: 'hover:bg-accent' })
        ),
        secondary: cn(
          'bg-secondary active:bg-secondary/80',
          Platform.select({ web: 'hover:bg-secondary/80' })
        ),
        ghost: cn('active:bg-accent', Platform.select({ web: 'hover:bg-accent' })),
      },
      size: {
        default: 'h-touch-target px-5',
        sm: 'h-9 px-4',
        lg: 'h-touch-target px-7',
        icon: 'h-touch-target w-touch-target rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const buttonTextVariants = cva('text-body font-semibold', {
  variants: {
    variant: {
      default: 'text-primary-foreground',
      outline: 'text-foreground',
      secondary: 'text-secondary-foreground',
      ghost: 'text-foreground',
    },
    size: {
      default: '',
      sm: 'text-footnote font-semibold',
      lg: '',
      icon: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

type ButtonProps = React.ComponentProps<typeof Pressable> &
  VariantProps<typeof buttonVariants>;

function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <TextClassContext.Provider value={buttonTextVariants({ variant, size })}>
      <Pressable
        className={cn(props.disabled && 'opacity-50', buttonVariants({ variant, size }), className)}
        role="button"
        {...props}
      />
    </TextClassContext.Provider>
  );
}

export { Button, buttonTextVariants, buttonVariants };
export type { ButtonProps };
