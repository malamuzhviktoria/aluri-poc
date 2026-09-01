import { Text } from '@/components/ui/text';
import type { Product } from '@/data/types';
import * as React from 'react';
import { Image, Pressable, View, type ViewStyle } from 'react-native';

export function ProductCard({
  product,
  style,
  imageRadiusClassName = 'rounded-md',
}: {
  product: Product;
  style?: ViewStyle;
  imageRadiusClassName?: string;
}) {
  const [pressed, setPressed] = React.useState(false);
  const badgeLabel = product.hasOffers ? '🔥 Offers' : product.isNew ? '🔥 New' : product.condition;

  return (
    <Pressable
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={[{ opacity: pressed ? 0.85 : 1 }, style]}
      accessibilityRole="button"
      accessibilityLabel={`${product.brand} ${product.title}, ${product.price} ${product.currency}`}>
      <View
        style={{ width: '100%', aspectRatio: 4 / 5 }}
        className={`overflow-hidden bg-secondary ${imageRadiusClassName}`}>
        <Image
          source={product.image}
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%' }}
          resizeMode="cover"
        />

        <View className="absolute left-1.5 top-1.5 rounded-[7px] bg-white/90 px-2.5 py-1.5 backdrop-blur-sm">
          <Text className="text-[11px] font-normal uppercase text-foreground">{badgeLabel}</Text>
        </View>

        <Text className="absolute bottom-3.5 left-3.5 text-[13px] font-medium text-white">{product.brand}</Text>
      </View>

      <View className="mt-2">
        <View style={{ height: 36 }}>
          <Text numberOfLines={2} className="text-[15px] font-medium leading-[18px] text-foreground/85">
            {product.title}
          </Text>
        </View>
        <Text
          style={{ writingDirection: 'ltr' }}
          className="mt-1.5 text-left text-[17px] font-semibold text-foreground">
          {product.price.toLocaleString()} {product.currency}
        </Text>
      </View>
    </Pressable>
  );
}
