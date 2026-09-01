import { TextClassContext } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import * as TabsPrimitive from '@rn-primitives/tabs';
import * as React from 'react';
import { Platform } from 'react-native';

function Tabs({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return <TabsPrimitive.Root className={cn('flex flex-col gap-4', className)} {...props} />;
}

function TabsList({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      className={cn('flex-row items-center gap-2', Platform.select({ web: 'inline-flex w-fit' }), className)}
      {...props}
    />
  );
}

function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  const { value } = TabsPrimitive.useRootContext();
  const active = props.value === value;
  return (
    <TextClassContext.Provider
      value={cn('text-footnote font-semibold', active ? 'text-primary-foreground' : 'text-muted-foreground')}>
      <TabsPrimitive.Trigger
        className={cn(
          'h-9 flex-row items-center justify-center rounded-pill px-4',
          active ? 'bg-primary' : 'bg-secondary',
          Platform.select({ web: 'cursor-default whitespace-nowrap transition-colors' }),
          className
        )}
        {...props}
      />
    </TextClassContext.Provider>
  );
}

function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return <TabsPrimitive.Content className={cn(className)} {...props} />;
}

export { Tabs, TabsContent, TabsList, TabsTrigger };
