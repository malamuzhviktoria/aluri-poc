import { TextClassContext } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { Slot } from '@rn-primitives/slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { View } from 'react-native';

const badgeVariants = cva(
  'shrink-0 flex-row items-center justify-center gap-1 self-start rounded-pill px-2.5 py-1',
  {
    variants: {
      variant: {
        default: 'bg-card/95',
        dark: 'bg-primary/80',
        outline: 'border-border border bg-background/90',
        success: 'bg-success',
        destructive: 'bg-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const badgeTextVariants = cva('text-caption1 font-semibold', {
  variants: {
    variant: {
      default: 'text-foreground',
      dark: 'text-primary-foreground',
      outline: 'text-foreground',
      success: 'text-success-foreground',
      destructive: 'text-destructive-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type BadgeProps = React.ComponentProps<typeof View> & {
  asChild?: boolean;
} & VariantProps<typeof badgeVariants>;

function Badge({ className, variant, asChild, ...props }: BadgeProps) {
  const Component = asChild ? Slot : View;
  return (
    <TextClassContext.Provider value={badgeTextVariants({ variant })}>
      <Component className={cn(badgeVariants({ variant }), className)} {...props} />
    </TextClassContext.Provider>
  );
}

export { Badge, badgeTextVariants, badgeVariants };
export type { BadgeProps };
