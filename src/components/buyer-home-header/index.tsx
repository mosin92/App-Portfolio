import React from 'react';
import { Image, TouchableOpacity, View, ViewStyle } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { H2 } from '~components/text/text';
import { width } from '~utils';
import AppColors from '~utils/app-colors';
import FontFamily from '~utils/font-family';
import styles from './styles';
type Props = {
  onProfilePress?: () => void;
  onNearMePress?: () => void;
  onNotificationPress?: () => void;
  profileImage: string;
  title: string;
  containerStyle?: ViewStyle;
};

const BuyerHomeHeader: React.FC<Props> = ({
  onProfilePress,
  onNearMePress,
  onNotificationPress,
  profileImage,
  title,
  containerStyle = {},
}) => {
  return (
    <View
      style={[styles.container, containerStyle]}>
      <View style={styles.firstView}>
        <TouchableOpacity activeOpacity={1} style={styles.imageView} onPress={onProfilePress}>
          <Image source={{ uri: profileImage }} resizeMode={'cover'} style={styles.profileImageStyles} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} style={styles.nearMeView} onPress={onNearMePress}>
          <MaterialIcons name='near-me' size={width(6)} color={AppColors.darkBlue} />
        </TouchableOpacity>
      </View>
      <H2 fontFamily={FontFamily.SofiaSansBold} containerStyles={styles.secView}>{title}</H2>
      <View style={styles.thirdView}>
        <TouchableOpacity activeOpacity={1} style={styles.nearMeView} onPress={onNotificationPress}>
          <View style={styles.dot} />
          <MaterialIcons name='notifications-none' size={width(6)} color={AppColors.darkBlue} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BuyerHomeHeader;
