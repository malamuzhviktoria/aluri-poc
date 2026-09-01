import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { ICON_SIZE } from '@/lib/tokens';
import { Search } from 'lucide-react-native';
import * as React from 'react';
import { Pressable } from 'react-native';

export function SearchBar({ onPress }: { onPress?: () => void }) {
  const [pressed, setPressed] = React.useState(false);

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      accessibilityRole="button"
      accessibilityLabel="Search wardrobes and brands"
      className={`mx-4 mt-5 h-12 flex-row items-center gap-3 rounded-md bg-[#F4F5F7] px-4 ${pressed ? 'opacity-80' : ''}`}>
      <Icon as={Search} size={ICON_SIZE.md} className="text-[#707070]" />
      <Text className="text-[15px] font-normal text-[#707070]">Search wardrobes and brands</Text>
    </Pressable>
  );
}
