import { FLOATING_TAB_BAR_CLEARANCE } from '@/components/chrome/floating-tab-bar';
import { DiscoverCategoryTabs } from '@/components/discover/discover-category-tabs';
import { DiscoverHeader } from '@/components/discover/discover-header';
import { ProductGrid } from '@/components/discover/product-grid';
import { HomeEmptyState } from '@/components/home/home-empty-state';
import { EditorialHero } from '@/components/marketplace/editorial-hero';
import { Text } from '@/components/ui/text';
import { HERO_FEATURE, PRODUCTS, SECONDARY_FEATURE } from '@/data/discover';
import type { DiscoverTab } from '@/data/types';
import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function filterProducts(tab: DiscoverTab) {
  switch (tab) {
    case 'following':
      return PRODUCTS.filter((product) => product.seller.verified);
    case 'trending':
      return PRODUCTS.filter((product) => product.hasOffers);
    case 'new-in':
      return PRODUCTS.filter((product) => product.condition === 'New with tags');
    default:
      return PRODUCTS;
  }
}

const COMING_SOON_COPY: Partial<Record<DiscoverTab, { title: string; description: string }>> = {
  following: {
    title: 'Following is coming soon',
    description: 'Curated updates from the people and wardrobes you follow will appear here soon.',
  },
  trending: {
    title: 'Trending is coming soon',
    description: 'Popular looks, wardrobes, and pieces will appear here soon.',
  },
  'new-in': {
    title: 'New In is coming soon',
    description: 'Freshly added pieces and new wardrobe finds will appear here soon.',
  },
};

export default function DiscoverScreen() {
  const [activeTab, setActiveTab] = React.useState<DiscoverTab>('all');
  const visibleProducts = filterProducts(activeTab);
  const comingSoon = COMING_SOON_COPY[activeTab];

  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-background">
      <DiscoverHeader onSearchPress={() => {}} />

      <View className="mt-1 pb-2.5">
        <DiscoverCategoryTabs value={activeTab} onValueChange={setActiveTab} />
      </View>

      {comingSoon ? (
        <HomeEmptyState title={comingSoon.title} description={comingSoon.description} />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: FLOATING_TAB_BAR_CLEARANCE }}>
          <View className="mt-6">
            <EditorialHero feature={HERO_FEATURE} onPress={() => {}} />
          </View>

          <View className="mt-3">
            {visibleProducts.length > 0 ? (
              <ProductGrid products={visibleProducts} />
            ) : (
              <Text variant="footnote" className="px-5">
                Nothing here yet — check back soon.
              </Text>
            )}
          </View>

          <View className="mt-8">
            <EditorialHero feature={SECONDARY_FEATURE} onPress={() => {}} />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
