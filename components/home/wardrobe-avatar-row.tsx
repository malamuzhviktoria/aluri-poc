import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { WARDROBE_AVATARS } from '@/data/home';
import type { WardrobeAvatar } from '@/data/types';
import { Frame, Loader } from 'lucide-react-native';
import * as React from 'react';
import { Image, Pressable, ScrollView, View } from 'react-native';

const RING_COLOR = '#6EE7B7';

function AvatarGlyph({ avatar }: { avatar: WardrobeAvatar }) {
  if (avatar.kind === 'photo') {
    return (
      <Image
        source={avatar.avatarUrl}
        style={{ width: '100%', height: '100%' }}
        className="rounded-full"
        resizeMode="cover"
      />
    );
  }
  if (avatar.icon === 'amberstudio') {
    return (
      <View className="h-full w-full items-center justify-center rounded-full bg-[#7C4A2D]">
        <Icon as={Frame} size={22} className="text-white/90" />
      </View>
    );
  }
  return (
    <View className="h-full w-full items-center justify-center rounded-full bg-[#CFEAF7]">
      <View className="h-9 w-9 items-center justify-center rounded-xl bg-[#111827]">
        <Icon as={Loader} size={18} className="text-white" />
      </View>
    </View>
  );
}

function WardrobeAvatarItem({ avatar }: { avatar: WardrobeAvatar }) {
  const [pressed, setPressed] = React.useState(false);

  return (
    <Pressable
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      className={`w-16 items-center gap-1.5 ${pressed ? 'opacity-70' : ''}`}>
      <View style={{ borderColor: RING_COLOR }} className="h-16 w-16 items-center justify-center rounded-full border-2 p-0.5">
        <AvatarGlyph avatar={avatar} />
      </View>
      <Text numberOfLines={1} className="text-[12px] text-muted-foreground">
        {avatar.name}
      </Text>
    </Pressable>
  );
}

export function WardrobeAvatarRow() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerClassName="gap-4 px-4 pt-5">
      {WARDROBE_AVATARS.map((avatar) => (
        <WardrobeAvatarItem key={avatar.id} avatar={avatar} />
      ))}
    </ScrollView>
  );
}
