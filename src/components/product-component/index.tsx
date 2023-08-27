import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {CustomText} from '~components/text/text';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';
import FontFamily from '~utils/font-family';
import styles from './styles';
type Props = {
  onPress?: () => void;
  productImage?: string;
  distance: number;
  itemsLeft?: number;
  providerLogo: string;
  providerName: string;
  productName: string;
  productPrice: number;
  rating: number;
  productCategory: string;
  productUnit: string;
  containerStyle?: ViewStyle;
};

const ProductComponent: React.FC<Props> = ({
  onPress,
  productImage,
  distance,
  itemsLeft,
  providerLogo,
  providerName,
  productName,
  productPrice,
  rating,
  productCategory,
  productUnit,
  containerStyle = {},
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      activeOpacity={0.9}
      onPress={onPress}>
      <ImageBackground
        source={{uri: productImage}}
        style={styles.imageBackgroundStyles}
        imageStyle={styles.imageBackgroundImageStyles}>
        <LinearGradient
          style={styles.gradientView}
          colors={[
            AppColors.transparent,
            AppColors.black + '30',
            AppColors.black,
          ]}>
          <View style={styles.gradientInnerTopView}>
            <CustomText
              fontFamily={FontFamily.SofiaSansBold}
              size={2.5}
              containerStyles={[
                styles.distanceTextView,
                {marginTop: !itemsLeft ? height(1) : height(0.4)},
              ]}>
              {distance}km
            </CustomText>
            {itemsLeft != undefined && (
              <CustomText
                size={3.3}
                fontFamily={FontFamily.SofiaSansBold}
                containerStyles={styles.itemsLeftVIew}>
                {itemsLeft} <Text style={styles.leftStyles}>Left</Text>
              </CustomText>
            )}
          </View>
          <View style={styles.gradientInnerBottomView}>
            <Image
              source={{uri: providerLogo}}
              resizeMode="cover"
              style={styles.providerLogoStyles}
            />
            <CustomText
              size={3.6}
              numberOfLines={1}
              containerStyles={styles.providerNameText}>
              {providerName}
            </CustomText>
          </View>
        </LinearGradient>
      </ImageBackground>
      <View style={styles.titleRow}>
        <CustomText
          fontFamily={FontFamily.SofiaSansBold}
          size={3.3}
          color={AppColors.darkBlue}
          containerStyles={styles.titleStyles}>
          {productName}
        </CustomText>
        <CustomText
          color={AppColors.darkBlue}
          fontFamily={FontFamily.SofiaSansBold}
          size={3.3}>
          {productPrice}
          <Text style={styles.currencyText}>SAR</Text>
        </CustomText>
      </View>
      <View style={styles.categoryRow}>
        <View style={styles.ratingView}>
          <FontAwesome name="star" size={width(3)} color={AppColors.orange} />
          <CustomText
            fontFamily={FontFamily.SofiaSansBold}
            containerStyles={styles.ratingText}
            color={AppColors.darkBlue}
            size={3}>
            {rating}
          </CustomText>
        </View>
        <View style={styles.dot} />
        <CustomText
          color={AppColors.brown}
          size={3}
          containerStyles={styles.categoryTextView}>
          {productCategory}
        </CustomText>
        <CustomText
          fontFamily={FontFamily.SofiaSansBold}
          color={AppColors.blue}
          size={2.5}
          containerStyles={styles.unitContainer}>
          {productUnit}
        </CustomText>
      </View>
    </TouchableOpacity>
  );
};

export default ProductComponent;
