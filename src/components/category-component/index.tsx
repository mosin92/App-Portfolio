import React from 'react';
import {
  ImageBackground,
  ImageStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {H4} from '~components/text/text';
import AppColors from '~utils/app-colors';
import FontFamily from '~utils/font-family';
import styles from './styles';
type Props = {
  title: string;
  image: string;
  colors?: Array<string>;
  onPress?: () => void;
  categoryBackgroundStyles?: ViewStyle;
  categoryBackgroundViewStyles?: ViewStyle;
  categoryBackgroundImageStyles?: ImageStyle;
  titleFont?: string;
};

const CategoryComponent: React.FC<Props> = ({
  title,
  image,
  onPress,
  categoryBackgroundStyles,
  categoryBackgroundImageStyles,
  categoryBackgroundViewStyles,
  titleFont = FontFamily.SofiaSansExtraBold,
  colors = [AppColors.darkBlue + '90', AppColors.darkBlue + '90'],
}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <ImageBackground
        source={{uri: image}}
        resizeMode="cover"
        style={[styles.categoryBackgroundStyles, categoryBackgroundStyles]}
        imageStyle={[
          styles.categoryBackgroundImageStyles,
          categoryBackgroundImageStyles,
        ]}
        blurRadius={0.5}>
        <LinearGradient
          colors={colors}
          style={[
            styles.categoryBackgroundViewStyles,
            categoryBackgroundViewStyles,
          ]}>
          <H4
            size={4.5}
            fontFamily={titleFont}
            color={AppColors.white}
            textAlign="center"
            containerStyles={styles.title}>
            {title}
          </H4>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};
export default CategoryComponent;
