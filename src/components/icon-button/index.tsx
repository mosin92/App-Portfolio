import React, {useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  View,
  ViewStyle,
} from 'react-native';
import {useSelector} from 'react-redux';
import {H1, H2} from '~components/text/text';
import {selectLanguage} from '~store/slices/language';
import styles from './styles';

type Props = {
  containerStyle?: ViewStyle;
  buttonIcon: ImageSourcePropType;
  title?: string;
  onPress?: () => void;
  active?: number;
};

const IconButton: React.FC<Props> = ({
  containerStyle = {},
  buttonIcon,
  title,

  onPress,
  active,
}) => {
  const selectedLanguage = useSelector(selectLanguage);

  return (
    <View style={[styles.container, containerStyle]}>
      <Pressable onPress={onPress} style={styles.circleView}>
        {active ? <View style={styles.fillCircle}></View> : <View />}
      </Pressable>
      <Image
        source={buttonIcon}
        style={styles.iconStyle}
        resizeMode={'contain'}
      />
      <H1 size={4.3}>{title}</H1>
    </View>
  );
};

export default IconButton;
