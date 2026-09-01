import type { AudienceTab, EditorialFeature, HomeCategory, Product, WardrobeAvatar } from './types';

export const AUDIENCE_TABS: { key: AudienceTab; label: string }[] = [
  { key: 'women', label: 'Women' },
  { key: 'men', label: 'Men' },
  { key: 'kids', label: 'Kids' },
];

export const HOME_CATEGORIES: { key: HomeCategory; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'dresses', label: 'Dresses' },
  { key: 'tops', label: 'Tops' },
  { key: 'bottoms', label: 'Bottoms' },
  { key: 'outerwear', label: 'Outerwear' },
];

export const WARDROBE_AVATARS: WardrobeAvatar[] = [
  {
    id: 'maisonlee',
    name: 'maisonlee',
    kind: 'photo',
    avatarUrl: require('../assets/home/avatar-maisonlee.png'),
  },
  {
    id: 'riverran',
    name: 'riverran',
    kind: 'photo',
    avatarUrl: require('../assets/home/avatar-riverran.png'),
  },
  {
    id: 'amber',
    name: 'amber',
    kind: 'photo',
    avatarUrl: require('../assets/home/avatar-amber.png'),
  },
  {
    id: 'petra',
    name: 'petra',
    kind: 'photo',
    avatarUrl: require('../assets/home/avatar-petra.png'),
  },
  {
    id: 'janik',
    name: 'janik',
    kind: 'photo',
    avatarUrl: require('../assets/home/avatar-janik.png'),
  },
  {
    id: 'coco',
    name: 'coco',
    kind: 'photo',
    avatarUrl: require('../assets/home/avatar-coco.png'),
  },
];

export const HOME_HERO: EditorialFeature = {
  id: 'home-after-dark',
  eyebrow: 'EDITORIAL',
  title: 'After Dark:\nStatement Dressing',
  description: '',
  cta: 'Shop',
  image: require('../assets/home/after-dark-hero.png'),
};

export const HOME_SECONDARY_HERO: EditorialFeature = {
  id: 'home-wild-terrain',
  eyebrow: 'EDITORIAL',
  title: 'Wild Terrain:\nRefined Layers',
  description: '',
  cta: '',
  image: require('../assets/home/wild-terrain-hero.png'),
};

export const HOME_PRODUCTS: Product[] = [
  {
    id: 'h1',
    image: require('../assets/home/product-riverran-maxi-dress.png'),
    imageAspectRatio: 4 / 5,
    brand: 'Riverran',
    title: 'Sheer Black High-Neck Maxi Dress',
    price: 495,
    currency: 'د.إ',
    condition: 'Excellent',
    hasOffers: false,
    fulfillment: { type: 'delivery', label: 'Delivery' },
    seller: {
      name: 'Riverran',
      handle: '@riwerran',
      avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop',
    },
  },
  {
    id: 'h2',
    image: require('../assets/home/product-jacobseen-top-skirt.png'),
    imageAspectRatio: 4 / 5,
    brand: 'Jacob Seen',
    title: 'Draped High-Neck Top & Maxi Skirt',
    price: 890,
    currency: 'د.إ',
    condition: 'Like new',
    hasOffers: true,
    fulfillment: { type: 'delivery', label: 'Delivery' },
    seller: {
      name: 'Jacob Seen',
      handle: '@jacobseen',
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop',
    },
  },
  {
    id: 'h3',
    image: require('../assets/home/product-leroy50-slip-dress.png'),
    imageAspectRatio: 4 / 5,
    brand: 'Leroy 50',
    title: 'Backless White Satin Slip Dress',
    price: 495,
    currency: 'د.إ',
    condition: 'New with tags',
    hasOffers: false,
    isNew: true,
    fulfillment: { type: 'collection', label: 'Collection' },
    seller: {
      name: 'Leroy 50',
      handle: '@leroy50',
      avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop',
    },
  },
  {
    id: 'h4',
    image: require('../assets/home/product-hazeljack-blazer.png'),
    imageAspectRatio: 4 / 5,
    brand: 'Hazel Jack',
    title: 'Structured Belted Blazer Jacket',
    price: 890,
    currency: 'د.إ',
    condition: 'Excellent',
    hasOffers: true,
    fulfillment: { type: 'delivery', label: 'Delivery' },
    seller: {
      name: 'Hazel Jack',
      handle: '@hazeljack',
      avatarUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&auto=format&fit=crop',
    },
  },
];
