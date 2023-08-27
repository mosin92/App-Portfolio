import React from 'react';
import {
  Image, ImageBackground,
  Text,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { CustomText } from '~components/text/text';
import { width } from '~utils';
import AppColors from '~utils/app-colors';
import FontFamily from '~utils/font-family';
import styles from './styles';
type Props = {
  onPress?: () => void;
  productImage: string;
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
  categoryImage?: string;
};

const ProductHorizontalComponent: React.FC<Props> = ({
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
  categoryImage,
  containerStyle = {},
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      activeOpacity={0.9}
      onPress={onPress}>
      <ImageBackground
        source={{ uri: productImage }}
        style={styles.imageBackgroundStyles}
        imageStyle={styles.imageBackgroundImageStyles}>
        <CustomText
          fontFamily={FontFamily.SofiaSansBold}
          size={2.5}
          containerStyles={styles.distanceTextView}>
          {distance}km
        </CustomText>
      </ImageBackground>
      <View style={styles.rightView}>
        <CustomText
          fontFamily={FontFamily.SofiaSansBold}
          size={5}
          color={AppColors.darkBlue}
          containerStyles={styles.titleStyles}>
          {productName}
        </CustomText>
        <View style={styles.secView}>
          <View style={styles.ratingView}>
            <FontAwesome name="star" size={width(3.6)} color={AppColors.orange} />
            <CustomText
              fontFamily={FontFamily.SofiaSansMedium}
              containerStyles={styles.ratingText}
              color={AppColors.darkBlue}
              size={3.6}>
              {rating}
            </CustomText>
          </View>
          <View style={styles.dot} />
          <Image
            source={{ uri: providerLogo }}
            resizeMode="cover"
            style={styles.providerLogoStyles}
          />
          <CustomText
            size={3}
            numberOfLines={1}
            color={AppColors.darkBlue}
            containerStyles={styles.providerNameText}>
            {providerName}
          </CustomText>
        </View>
        <View style={styles.titleRow}>
          <View style={styles.categoryRow}>
            <Image
              source={{ uri: categoryImage }}
              resizeMode="cover"
              style={styles.categoryLogo} />
            <CustomText color={AppColors.brown} numberOfLines={1} size={3.3} containerStyles={styles.categoryTextView}>
              {productCategory}
            </CustomText>
          </View>
          <CustomText
            color={AppColors.darkBlue}
            fontFamily={FontFamily.SofiaSansBold}
            size={5}>
            {(productPrice)?.toFixed(2)}<Text style={styles.currencyText}>SAR</Text>
          </CustomText>
        </View>
      </View>
      {itemsLeft != undefined && (
        <CustomText
          size={3.6}
          fontFamily={FontFamily.SofiaSansBold}
          containerStyles={styles.itemsLeftVIew}>
          {itemsLeft} <Text style={styles.leftStyles}>Left</Text>
        </CustomText>
      )}
    </TouchableOpacity>
  );
};

export default ProductHorizontalComponent;
