import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { THEME } from '@/lib/theme';
import type { NotificationIcon, NotificationItem } from '@/data/types';
import {
  ArrowDown,
  Bookmark,
  Check,
  CheckCircle2,
  Clock,
  Heart,
  Sparkles,
  Star,
  Tag,
  Truck,
  UserPlus,
} from 'lucide-react-native';
import { Image, View } from 'react-native';

const WHITE = '#FFFFFF';

const BADGE_CONFIG: Record<NotificationIcon, { icon: typeof Tag; bg: string; color: string }> = {
  offer: { icon: Tag, bg: THEME.foreground, color: WHITE },
  like: { icon: Heart, bg: '#C4707A', color: WHITE },
  follow: { icon: UserPlus, bg: THEME.foreground, color: WHITE },
  shipping: { icon: Truck, bg: '#5B7A99', color: WHITE },
  accepted: { icon: Check, bg: '#4C7A5E', color: WHITE },
  saved: { icon: Bookmark, bg: THEME.foreground, color: WHITE },
  'price-drop': { icon: ArrowDown, bg: '#4C7A5E', color: WHITE },
  sold: { icon: CheckCircle2, bg: '#4C7A5E', color: WHITE },
  review: { icon: Star, bg: '#B8934A', color: WHITE },
  'new-pieces': { icon: Sparkles, bg: THEME.foreground, color: WHITE },
  expired: { icon: Clock, bg: THEME.mutedForeground, color: WHITE },
};

function NotificationAvatarGlyph({ notification }: { notification: NotificationItem }) {
  const { avatar } = notification;

  if (avatar.kind === 'photo') {
    return (
      <Image source={avatar.source} style={{ width: '100%', height: '100%' }} className="rounded-full" resizeMode="cover" />
    );
  }

  const config = BADGE_CONFIG[avatar.icon];
  return (
    <View style={{ backgroundColor: config.bg }} className="h-full w-full items-center justify-center rounded-full">
      <Icon as={config.icon} size={20} color={config.color} />
    </View>
  );
}

export function NotificationRow({ notification }: { notification: NotificationItem }) {
  const badge = notification.badge ? BADGE_CONFIG[notification.badge] : null;

  return (
    <View
      className={`flex-row items-center gap-3 px-5 py-4 ${notification.unread ? 'bg-[#F4F5F7]/50' : ''}`}>
      <View className="h-12 w-12 shrink-0">
        <NotificationAvatarGlyph notification={notification} />
        {badge && (
          <View
            style={{ backgroundColor: badge.bg, borderColor: THEME.background }}
            className="absolute -bottom-1 -right-1 h-[22px] w-[22px] items-center justify-center rounded-full border-2">
            <Icon as={badge.icon} size={12} color={badge.color} />
          </View>
        )}
      </View>

      <Text className="flex-1 text-[15px] leading-[21px]">
        {notification.segments.map((segment, index) => {
          const emphasized = notification.unread || segment.bold;
          return (
            <Text
              key={index}
              className={emphasized ? 'font-semibold text-foreground' : 'font-normal text-foreground/70'}>
              {segment.text}
            </Text>
          );
        })}
        <Text className="text-[13px] font-normal text-muted-foreground"> {notification.timestamp}</Text>
      </Text>

      {notification.unread && <View className="h-2 w-2 shrink-0 rounded-full bg-foreground" />}
    </View>
  );
}
