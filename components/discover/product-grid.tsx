import { ProductCard } from '@/components/marketplace/product-card';
import type { Product } from '@/data/types';
import { View } from 'react-native';

export function ProductGrid({
  products,
  imageRadiusClassName,
}: {
  products: Product[];
  imageRadiusClassName?: string;
}) {
  return (
    <View className="flex-row flex-wrap justify-between gap-y-6 px-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          style={{ width: '48.5%' }}
          imageRadiusClassName={imageRadiusClassName}
        />
      ))}
    </View>
  );
}
