import type { DiscoverTab, EditorialFeature, Product } from './types';

export const DISCOVER_TABS: { key: DiscoverTab; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'following', label: 'Following' },
  { key: 'trending', label: 'Trending' },
  { key: 'new-in', label: 'New In' },
];

export const HERO_FEATURE: EditorialFeature = {
  id: 'hero-urban-explorer',
  eyebrow: 'EDITORIAL · MAY 2026',
  title: 'Urban Explorer:\nEveryday Adventure',
  description: 'Weatherproof shells and technical layers built for the city and beyond.',
  cta: 'Shop',
  image: require('../assets/discover/hero-urban-explorer.png'),
};

export const SECONDARY_FEATURE: EditorialFeature = {
  id: 'secondary-trail-ready',
  eyebrow: 'EDITORIAL · JULY 2026',
  title: 'Trail Ready:\nBuilt for the Wild',
  description: 'Technical shells and insulated layers for the trail above the clouds.',
  cta: 'Shop',
  image: require('../assets/discover/secondary-alpine-layers.png'),
};

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    image: require('../assets/discover/product-charcoal-shirt.png'),
    imageAspectRatio: 1,
    brand: 'Studio Noor',
    title: 'Charcoal Oversized Fit Cotton Button-Down Shirt',
    price: 540,
    currency: 'د.إ',
    condition: 'New with tags',
    hasOffers: true,
    fulfillment: { type: 'delivery', label: 'Delivery' },
    seller: {
      name: 'Laylah',
      handle: '@laylah',
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop',
      verified: true,
    },
  },
  {
    id: 'p2',
    image: require('../assets/discover/product-brown-jacket.png'),
    imageAspectRatio: 1,
    brand: 'Maison Lee',
    title: 'Oversized Brown Aviator Shearling Jacket',
    price: 540,
    currency: 'د.إ',
    condition: 'Like new',
    hasOffers: false,
    fulfillment: { type: 'collection', label: 'Collection' },
    seller: {
      name: 'Maison Lee',
      handle: '@maisonlee',
      avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop',
    },
  },
  {
    id: 'p3',
    image: require('../assets/discover/product-technical-rain-jacket.png'),
    imageAspectRatio: 1,
    brand: 'Janik',
    title: 'Black Technical Hooded Outdoor Jacket',
    price: 120,
    currency: 'د.إ',
    condition: 'Excellent',
    hasOffers: false,
    fulfillment: { type: 'delivery', label: 'Delivery' },
    seller: {
      name: 'Janik',
      handle: '@janik',
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop',
    },
  },
  {
    id: 'p4',
    image: require('../assets/discover/product-olive-fleece.png'),
    imageAspectRatio: 1,
    brand: 'Amber',
    title: 'Olive Quarter-Zip Performance Fleece',
    price: 300,
    currency: 'د.إ',
    condition: 'New with tags',
    hasOffers: false,
    isNew: true,
    fulfillment: { type: 'delivery', label: 'Delivery' },
    seller: {
      name: 'Amber',
      handle: '@amber',
      avatarUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&auto=format&fit=crop',
    },
  },
];
