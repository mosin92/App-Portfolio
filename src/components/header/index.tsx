import React from 'react';
import {TouchableOpacity, View, ViewStyle} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Filter} from '~assets/svg';
import {CustomText, H2} from '~components/text/text';
import {width} from '~utils';
import AppColors from '~utils/app-colors';
import FontFamily from '~utils/font-family';
import styles from './styles';
type Props = {
  onLeftIconPress?: () => void;
  onFilterIconPress?: () => void;
  onTextPress?: () => void;
  onSharePress?: () => void;
  onMenuPress?: () => void;
  onRightIconPress?: () => void;
  title: string;
  rightText?: string;
  containerStyle?: ViewStyle;
  backView?: ViewStyle;
  textColor?: string;
  iconColor?: string;
};

const Header: React.FC<Props> = ({
  onLeftIconPress,
  onFilterIconPress,
  onTextPress,
  onMenuPress,
  onSharePress,
  title,
  rightText,
  containerStyle = {},
  textColor,
  iconColor = AppColors.darkBlue,
  backView,
  onRightIconPress,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.firstView}>
        {onLeftIconPress && (
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.backView, backView]}
            onPress={onLeftIconPress}>
            <Ionicons
              name="arrow-back-sharp"
              size={width(6)}
              color={iconColor}
            />
          </TouchableOpacity>
        )}
      </View>
      <H2
        fontFamily={FontFamily.SofiaSansBold}
        textAlign="center"
        color={textColor}
        containerStyles={styles.secView}>
        {title}
      </H2>
      <View style={styles.thirdView}>
        {onFilterIconPress && (
          <TouchableOpacity
            activeOpacity={1}
            style={styles.backView}
            onPress={onFilterIconPress}>
            <Filter />
          </TouchableOpacity>
        )}
        {onTextPress && (
          <CustomText onPress={onTextPress} color={AppColors.blue}>
            {rightText}
          </CustomText>
        )}
        {onSharePress && onMenuPress && (
          <View style={styles.shareView}>
            <Octicons
              name="share-android"
              size={width(5)}
              color={AppColors.darkBlue}
              onPress={onSharePress}
            />
            <TouchableOpacity
              activeOpacity={1}
              style={styles.backView}
              onPress={onMenuPress}>
              <Entypo
                name="dots-three-vertical"
                size={width(5)}
                color={AppColors.darkBlue}
              />
            </TouchableOpacity>
          </View>
        )}
        {onRightIconPress ? (
          <View>
            {onLeftIconPress && (
              <TouchableOpacity
                activeOpacity={1}
                style={styles.backView}
                onPress={onRightIconPress}>
                <AntDesign name="search1" size={width(6)} color={iconColor} />
              </TouchableOpacity>
            )}
          </View>
        ) : (
          <View />
        )}
      </View>
    </View>
  );
};

export default Header;
