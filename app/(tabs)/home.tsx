import { AudienceSwitcher } from '@/components/home/audience-switcher';
import { HomeCategoryTabs } from '@/components/home/home-category-tabs';
import { HomeEmptyState } from '@/components/home/home-empty-state';
import { SearchBar } from '@/components/home/search-bar';
import { WardrobeAvatarRow } from '@/components/home/wardrobe-avatar-row';
import { FLOATING_TAB_BAR_CLEARANCE } from '@/components/chrome/floating-tab-bar';
import { ProductGrid } from '@/components/discover/product-grid';
import { EditorialHero } from '@/components/marketplace/editorial-hero';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { HOME_HERO, HOME_PRODUCTS, HOME_SECONDARY_HERO } from '@/data/home';
import type { AudienceTab, HomeCategory } from '@/data/types';
import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [audience, setAudience] = React.useState<AudienceTab>('women');
  const [category, setCategory] = React.useState<HomeCategory>('all');

  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-background">
      <AudienceSwitcher value={audience} onValueChange={setAudience} />

      {audience === 'women' ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: FLOATING_TAB_BAR_CLEARANCE }}>
          <SearchBar onPress={() => {}} />

          <WardrobeAvatarRow />

          <View className="mt-5">
            <HomeCategoryTabs value={category} onValueChange={setCategory} />
          </View>

          <View className="mt-5">
            <EditorialHero feature={HOME_HERO} onPress={() => {}} aspectRatio={3 / 2} showCta={false} />
          </View>

          <View className="mt-6 flex-row items-center justify-between px-4">
            <Text className="text-[22px] font-medium text-foreground">New In</Text>
            <Button onPress={() => {}} size="sm" className="h-9 px-4">
              <Text className="text-[13px] font-semibold uppercase text-primary-foreground">Shop</Text>
            </Button>
          </View>

          <View className="mt-4">
            <ProductGrid products={HOME_PRODUCTS} />
          </View>

          <View className="mt-8">
            <EditorialHero
              feature={HOME_SECONDARY_HERO}
              onPress={() => {}}
              aspectRatio={3 / 2}
              showCta={false}
            />
          </View>
        </ScrollView>
      ) : audience === 'men' ? (
        <HomeEmptyState
          title="Men’s edit is coming soon"
          description="A curated selection for men will be added here soon."
        />
      ) : (
        <HomeEmptyState
          title="Kids’ edit is coming soon"
          description="A curated selection for kids will be added here soon."
        />
      )}
    </SafeAreaView>
  );
}
