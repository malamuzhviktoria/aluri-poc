import type { ActivityTab, NotificationGroup } from './types';

export const ACTIVITY_TABS: { key: ActivityTab; label: string }[] = [
  { key: 'messages', label: 'Messages' },
  { key: 'notifications', label: 'Notifications' },
  { key: 'offers', label: 'Offers' },
  { key: 'orders', label: 'Orders' },
];

const MAISON_LEE_AVATAR = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop';
const STUDIO_NOOR_AVATAR = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop';
const JACOB_SEEN_AVATAR = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop';
const RIVERRAN_AVATAR = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop';
const HAZEL_JACK_AVATAR = 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&auto=format&fit=crop';

export const NOTIFICATION_GROUPS: NotificationGroup[] = [
  {
    title: 'Today',
    items: [
      {
        id: 'n1',
        avatar: { kind: 'photo', source: { uri: MAISON_LEE_AVATAR } },
        badge: 'follow',
        unread: true,
        segments: [
          { text: 'Maison Lee', bold: true },
          { text: ' started following you.' },
        ],
        timestamp: '12 min ago',
      },
      {
        id: 'n2',
        avatar: { kind: 'photo', source: require('../assets/discover/product-cream-knit-set.png') },
        badge: 'like',
        segments: [{ text: 'Your item "Cream Knit V-Neck Sweater" received 8 new likes.' }],
        timestamp: '1h ago',
      },
      {
        id: 'n3',
        avatar: { kind: 'photo', source: { uri: STUDIO_NOOR_AVATAR } },
        badge: 'follow',
        segments: [
          { text: 'Studio Noor', bold: true },
          { text: ' started following your wardrobe.' },
        ],
        timestamp: '2h ago',
      },
      {
        id: 'n4',
        avatar: { kind: 'icon', icon: 'shipping' },
        badge: 'shipping',
        segments: [
          { text: 'Your order from ' },
          { text: 'Néra Studio', bold: true },
          { text: ' has been shipped.' },
        ],
        timestamp: '3h ago',
      },
    ],
  },
  {
    title: 'This Week',
    items: [
      {
        id: 'n5',
        avatar: { kind: 'photo', source: { uri: JACOB_SEEN_AVATAR } },
        badge: 'accepted',
        segments: [
          { text: 'Jacob Seen', bold: true },
          { text: ' accepted your offer on the Black Draped Maxi Skirt.' },
        ],
        timestamp: 'Yesterday',
      },
      {
        id: 'n6',
        avatar: { kind: 'photo', source: require('../assets/discover/product-brown-jacket.png') },
        badge: 'saved',
        segments: [
          { text: 'Your listing "Oversized Brown Aviator Shearling Jacket" was saved by 14 people.' },
        ],
        timestamp: '2d ago',
      },
      {
        id: 'n7',
        avatar: { kind: 'photo', source: { uri: RIVERRAN_AVATAR } },
        badge: 'price-drop',
        segments: [
          { text: 'Riveran', bold: true },
          { text: ' reduced the price of an item you liked from AED 620 to AED 540.' },
        ],
        timestamp: '3d ago',
      },
      {
        id: 'n8',
        avatar: { kind: 'photo', source: require('../assets/home/product-leroy50-slip-dress.png') },
        badge: 'sold',
        segments: [{ text: 'Your "White Satin Slip Dress" has been sold.' }],
        timestamp: '4d ago',
      },
    ],
  },
  {
    title: 'Earlier',
    items: [
      {
        id: 'n9',
        avatar: { kind: 'photo', source: { uri: HAZEL_JACK_AVATAR } },
        badge: 'review',
        segments: [
          { text: 'Hazel Jack', bold: true },
          { text: ' left you a 5-star review.' },
        ],
        timestamp: '18 Aug',
      },
      {
        id: 'n10',
        avatar: { kind: 'icon', icon: 'new-pieces' },
        badge: 'new-pieces',
        segments: [
          { text: 'A seller you follow, ' },
          { text: 'Maison Lélé', bold: true },
          { text: ', added 5 new pieces.' },
        ],
        timestamp: '15 Aug',
      },
      {
        id: 'n11',
        avatar: { kind: 'photo', source: require('../assets/discover/product-olive-fleece.png') },
        badge: 'expired',
        segments: [{ text: 'Your offer on the Olive Quarter-Zip Performance Fleece expired.' }],
        timestamp: '12 Aug',
      },
    ],
  },
];
