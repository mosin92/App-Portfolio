import React from 'react';
import {
  Image, ImageStyle, TextStyle, TouchableOpacity, View, ViewStyle
} from 'react-native';
import { CustomText } from '~components/text/text';
import AppColors from '~utils/app-colors';
import FontFamily from '~utils/font-family';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { width } from '~utils';
import { Fragment } from 'react';
type Props = {
  onPress?: () => void;
  providerLogo: string;
  providerName: string;
  productCategory: string;
  containerStyle?: ViewStyle;
  logoStyles?: ImageStyle;
  providerNameTextStyles?: TextStyle;
  productCategoryTextStyles?: TextStyle;
  rating?: number;
  productCategoryViewStyles?: ViewStyle;
};

const OnlineProviderComponent: React.FC<Props> = ({
  onPress,
  providerLogo,
  providerName,
  productCategory,
  rating,
  containerStyle = {},
  logoStyles = {},
  providerNameTextStyles = {},
  productCategoryTextStyles = {},
  productCategoryViewStyles = {}
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      activeOpacity={0.9}
      onPress={onPress}>
      <Image source={{ uri: providerLogo }} resizeMode='cover' style={[styles.logoStyles, logoStyles]} />
      <CustomText
        fontFamily={FontFamily.SofiaSansExtraBold}
        size={3}
        color={AppColors.darkBlue}
        textAlign='center'
        textStyles={providerNameTextStyles}
        containerStyles={styles.providerName}>
        {providerName}
      </CustomText>
      <View style={styles.ratingAndCategoryRow}>
        {rating != undefined &&
          <Fragment>
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
          </Fragment>}
        <CustomText
          fontFamily={FontFamily.SofiaSansLight}
          size={2.5}
          color={AppColors.darkBlue}
          textAlign='center'
          numberOfLines={1}
          textStyles={productCategoryTextStyles}
          containerStyles={[styles.productCategory, productCategoryViewStyles]}>
          {productCategory}
        </CustomText>
      </View>
    </TouchableOpacity>
  );
};

export default OnlineProviderComponent;
