import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {CustomText, H3} from '~components/text/text';
import {width} from '~utils';
import AppColors from '~utils/app-colors';
import FontFamily from '~utils/font-family';
import styles from './styles';

type Props = {
  onChatPress?: () => void;
  onFavPress?: () => void;
  storeImage?: string;
  storeName?: string;
  isFav?: boolean;
  storeAddress?: string;
  storeRating?: number;
};

const StoreProfileComponent: React.FC<Props> = ({
  onChatPress,
  onFavPress,
  storeImage,
  storeName,
  storeAddress,
  storeRating,
  isFav,
}) => {
  let temp = new Array(Math.ceil(storeRating ?? 0)).fill('');
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={[
        AppColors.linearColorOne,
        AppColors.linearColorTwo,
        AppColors.linearColorThree,
      ]}
      style={styles.container}>
      <View style={styles.mainRow}>
        <View style={styles.imageView}>
          <Image
            source={{uri: storeImage}}
            style={styles.imageStyles}
            resizeMode="cover"
          />
        </View>
        <View style={styles.titleView}>
          <H3 size={4}>{storeName}</H3>
          <View style={styles.ratingView}>
            {temp.map((i, n) => {
              return (
                <View key={n} style={styles.star}>
                  <FontAwesome
                    name="star"
                    size={width(3.5)}
                    color={AppColors.blue}
                  />
                </View>
              );
            })}
            <CustomText
              fontFamily={FontFamily.SofiaSansBold}
              containerStyles={styles.ratingText}
              color={AppColors.darkBlue}
              size={3.6}>
              {storeRating}
            </CustomText>
          </View>
        </View>
        <View style={styles.btnsView}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={onChatPress}
            style={styles.favBtnView}>
            <MaterialCommunityIcons
              name="chat"
              color={AppColors.blue}
              size={width(5)}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={onFavPress}
            style={styles.favBtnView}>
            <MaterialIcons
              name={isFav ? 'favorite' : 'favorite-border'}
              color={isFav ? AppColors.red : AppColors.darkBlue}
              size={width(5)}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.addressView}>
        <Octicons name="location" size={width(4.5)} color={AppColors.brown} />
        <CustomText
          fontFamily={FontFamily.SofiaSansRegular}
          size={3.6}
          color={AppColors.brown}
          containerStyles={styles.titleStyles}>
          {storeAddress}
        </CustomText>
      </View>
    </LinearGradient>
  );
};

export default StoreProfileComponent;
