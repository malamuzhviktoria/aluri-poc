import type { ImageSourcePropType } from 'react-native';

export type Seller = {
  name: string;
  handle: string;
  avatarUrl: string;
  verified?: boolean;
};

export type ProductCondition = 'New with tags' | 'Like new' | 'Excellent' | 'Good';

export type Fulfillment =
  | { type: 'delivery'; label: string }
  | { type: 'collection'; label: string };

export type Product = {
  id: string;
  image: ImageSourcePropType;
  imageAspectRatio: number;
  brand: string;
  title: string;
  price: number;
  currency: string;
  condition: ProductCondition;
  hasOffers: boolean;
  isNew?: boolean;
  fulfillment: Fulfillment;
  seller: Seller;
};

export type EditorialFeature = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  image: ImageSourcePropType;
};

export type DiscoverTab = 'all' | 'following' | 'trending' | 'new-in';

export type WardrobeAvatar =
  | { id: string; name: string; kind: 'photo'; avatarUrl: ImageSourcePropType }
  | { id: string; name: string; kind: 'icon'; icon: 'amberstudio' | 'scan' };

export type AudienceTab = 'women' | 'men' | 'kids';

export type HomeCategory = 'all' | 'dresses' | 'tops' | 'bottoms' | 'outerwear';

export type ActivityTab = 'messages' | 'notifications' | 'offers' | 'orders';

export type NotificationIcon =
  | 'offer'
  | 'like'
  | 'follow'
  | 'shipping'
  | 'accepted'
  | 'saved'
  | 'price-drop'
  | 'sold'
  | 'review'
  | 'new-pieces'
  | 'expired';

export type NotificationAvatar =
  | { kind: 'photo'; source: ImageSourcePropType }
  | { kind: 'icon'; icon: NotificationIcon };

export type NotificationItem = {
  id: string;
  avatar: NotificationAvatar;
  segments: { text: string; bold?: boolean }[];
  timestamp: string;
  unread?: boolean;
  badge?: NotificationIcon;
};

export type NotificationGroup = {
  title: string;
  items: NotificationItem[];
};
