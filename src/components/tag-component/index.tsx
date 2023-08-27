import React from 'react';
import {
  Image,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {CustomText} from '~components/text/text';
import AppColors from '~utils/app-colors';
import FontFamily from '~utils/font-family';
import styles from './styles';
type Props = {
  RightIcon?: Element;
  onPress?: () => void;
  name?: string | number;
  image?: string;
  textStyles?: TextStyle;
  containerStyle?: ViewStyle;
};

const TagComponent: React.FC<Props> = ({
  onPress,
  name,
  image,
  textStyles = {},
  containerStyle = {},
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      activeOpacity={0.9}
      onPress={onPress}>
      <View style={styles.logoView}>
        <Image
          source={{
            uri: image,
          }}
          resizeMode="contain"
          style={styles.logo}
        />
      </View>
      <CustomText
        fontFamily={FontFamily.SofiaSansRegular}
        size={3}
        color={AppColors.darkBlue}
        textStyles={textStyles}
        containerStyles={styles.titleStyles}>
        {name}
      </CustomText>
    </TouchableOpacity>
  );
};

export default TagComponent;
