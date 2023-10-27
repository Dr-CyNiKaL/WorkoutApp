import React from 'react';
import { ViewStyle } from 'react-native';
import { AntDesign, FontAwesome, FontAwesome5, Ionicons, Feather, MaterialCommunityIcons, Entypo, MaterialIcons, SimpleLineIcons, Octicons, Foundation, EvilIcons } from '@expo/vector-icons';

export const Icons = {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  Feather,
  FontAwesome,
  FontAwesome5,
  AntDesign,
  Entypo,
  SimpleLineIcons,
  Octicons,
  Foundation,
  EvilIcons,
};

interface IconProps {
  type: keyof typeof Icons;
  name: string;
  color: string;
  size?: number;
  style?: ViewStyle;
}

export const Icon: React.FC<IconProps> = ({ type, name, color, size = 24, style }) => {
  const fontSize = 24;
  const Tag = Icons[type];

  return (
    <>
      {type && name && (
        <Tag name={name} size={size || fontSize} color={color} style={style} />
      )}
    </>
  );
};