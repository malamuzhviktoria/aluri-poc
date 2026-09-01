import { ActivityTabs } from '@/components/activity/activity-tabs';
import { NotificationRow } from '@/components/activity/notification-row';
import { FLOATING_TAB_BAR_CLEARANCE } from '@/components/chrome/floating-tab-bar';
import { DiscoverHeader } from '@/components/discover/discover-header';
import { HomeEmptyState } from '@/components/home/home-empty-state';
import { Text } from '@/components/ui/text';
import { NOTIFICATION_GROUPS } from '@/data/activity';
import type { ActivityTab } from '@/data/types';
import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const COMING_SOON_COPY: Partial<Record<ActivityTab, { title: string; description: string }>> = {
  messages: {
    title: 'Messages is coming soon',
    description: 'Conversations with sellers and buyers will appear here soon.',
  },
  offers: {
    title: 'Offers is coming soon',
    description: 'Offers you send and receive will be tracked here soon.',
  },
  orders: {
    title: 'Orders is coming soon',
    description: 'Your purchases and sales will be tracked here soon.',
  },
};

export default function ActivityScreen() {
  const [activeTab, setActiveTab] = React.useState<ActivityTab>('notifications');
  const comingSoon = COMING_SOON_COPY[activeTab];

  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-background">
      <DiscoverHeader title="Activity" onSearchPress={() => {}} />

      <View className="mb-4 mt-1">
        <ActivityTabs value={activeTab} onValueChange={setActiveTab} />
      </View>

      {comingSoon ? (
        <HomeEmptyState title={comingSoon.title} description={comingSoon.description} />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: FLOATING_TAB_BAR_CLEARANCE }}>
          {NOTIFICATION_GROUPS.map((group) => (
            <View key={group.title} className="mb-2">
              <Text className="px-5 pb-2 pt-4 text-[17px] font-semibold text-foreground">{group.title}</Text>
              {group.items.map((item, index) => (
                <React.Fragment key={item.id}>
                  <NotificationRow notification={item} />
                  {index < group.items.length - 1 && <View className="mx-5 h-[1px] bg-border/50" />}
                </React.Fragment>
              ))}
            </View>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
