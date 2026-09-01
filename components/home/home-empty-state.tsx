import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { ICON_SIZE } from '@/lib/tokens';
import { Shirt } from 'lucide-react-native';
import { View } from 'react-native';

export function HomeEmptyState({ title, description }: { title: string; description: string }) {
  return (
    <View className="flex-1 items-center justify-center px-10 pb-24">
      <View className="mb-5 h-16 w-16 items-center justify-center rounded-full bg-[#F4F5F7]">
        <Icon as={Shirt} size={ICON_SIZE.lg} className="text-muted-foreground" />
      </View>
      <Text className="text-center text-[19px] font-medium text-foreground">{title}</Text>
      <Text className="mt-2 text-center text-[15px] leading-[21px] text-muted-foreground">{description}</Text>
    </View>
  );
}
