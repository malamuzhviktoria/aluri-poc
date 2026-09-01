import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import type { LucideIcon } from 'lucide-react-native';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * Non-functional stand-in for a tab that isn't built yet in this pass.
 * Keeps the bottom tab bar structurally complete without designing
 * screens that are out of scope for the Discover-only skeleton.
 */
export function PlaceholderScreen({ icon, title }: { icon: LucideIcon; title: string }) {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background gap-3">
      <View className="h-14 w-14 items-center justify-center rounded-full bg-[#F4F5F7]">
        <Icon as={icon} size={24} className="text-muted-foreground" />
      </View>
      <Text variant="headline">{title}</Text>
      <Text variant="footnote">This screen isn't part of this design pass yet.</Text>
    </SafeAreaView>
  );
}
