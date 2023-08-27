import React from 'react';
import {TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
import {CustomText} from '~components/text/text';
import {selectedLanguageName} from '~store/slices/language';
import {width} from '~utils';
import AppColors from '~utils/app-colors';
import FontFamily from '~utils/font-family';
import styles from './styles';
type Props = {
  RightIcon?: Element;
  onPress?: () => void;
  name?: string | number;
  textStyles?: TextStyle;
  containerStyle?: ViewStyle;
};

const MenuLabel: React.FC<Props> = ({
  RightIcon = (
    <Feather name="chevron-down" color={AppColors.black} size={width(5)} />
  ),
  onPress,
  name,
  textStyles = {},
  containerStyle = {},
}) => {
  const selectedLanguage = useSelector(selectedLanguageName);
  return (
    <TouchableOpacity
      style={[
        styles.container,
        containerStyle,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          flexDirection: selectedLanguage === 'Ar' ? 'row-reverse' : 'row',
          paddingRight: selectedLanguage === 'Ar' ? width(4.5) : 0,
        },
      ]}
      activeOpacity={0.9}
      onPress={onPress}>
      <CustomText
        fontFamily={FontFamily.SofiaSansMedium}
        size={4}
        color={AppColors.brown}
        textStyles={textStyles}
        containerStyles={styles.titleStyles}>
        {name}
      </CustomText>
      {RightIcon && (
        <TouchableOpacity activeOpacity={1} style={styles.iconStyleRight}>
          {RightIcon}
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default MenuLabel;
