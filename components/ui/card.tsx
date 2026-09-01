import { Text, TextClassContext } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { View } from 'react-native';

function Card({ className, ...props }: React.ComponentProps<typeof View>) {
  return (
    <TextClassContext.Provider value="text-card-foreground">
      <View className={cn('bg-card border-border shadow-card rounded-2xl border', className)} {...props} />
    </TextClassContext.Provider>
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<typeof Text>) {
  return <Text variant="title3" className={cn('leading-tight', className)} {...props} />;
}

function CardDescription({ className, ...props }: React.ComponentProps<typeof Text>) {
  return <Text variant="subhead" className={cn(className)} {...props} />;
}

export { Card, CardDescription, CardTitle };
