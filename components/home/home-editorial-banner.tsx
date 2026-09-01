import { Text } from '@/components/ui/text';
import type { EditorialFeature } from '@/data/types';
import { Image, Pressable, View } from 'react-native';

export function HomeEditorialBanner({ feature, onPress }: { feature: EditorialFeature; onPress?: () => void }) {
  return (
    <View className="overflow-hidden rounded-t-xl bg-secondary">
      <Pressable
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={feature.title}
        style={{ width: '100%', aspectRatio: 1 }}>
        {({ pressed }) => (
          <Image
            source={feature.image}
            className={pressed ? 'opacity-90' : ''}
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%' }}
            resizeMode="cover"
          />
        )}
      </Pressable>

      <View style={{ pointerEvents: 'none' }} className="absolute inset-x-0 bottom-0 p-5">
        <Text
          numberOfLines={2}
          style={{ fontFamily: 'Anton_400Regular', fontSize: 26, lineHeight: 30 }}
          className="uppercase text-white">
          {feature.title}
        </Text>
      </View>
    </View>
  );
}
