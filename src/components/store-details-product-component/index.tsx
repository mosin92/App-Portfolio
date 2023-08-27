import React from 'react';
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import { CustomText } from '~components/text/text';
import { selectLanguage } from '~store/slices/language';
import { CommonStyles, width } from '~utils';
import AppColors from '~utils/app-colors';
import FontFamily from '~utils/font-family';
import styles from './styles';
type Props = {
  onCartPress?: () => void;
  productImage: string;
  itemsLeft?: number;
  productName: string;
  productPrice: number;
  rating: number;
  productCategory: string;
  productSubCategory: string;
  productDescription: string;
  containerStyle?: ViewStyle;
  isAddedToCart: boolean
};

const StoreDetailsProductComponent: React.FC<Props> = ({
  productImage,
  itemsLeft,
  productDescription,
  productName,
  productPrice,
  rating,
  productCategory,
  productSubCategory,
  onCartPress,
  isAddedToCart = false,
  containerStyle = {},
}) => {

  const selectedLanguage = useSelector(selectLanguage);
  return (
    <View
      style={[styles.container, containerStyle]}>
      <ImageBackground
        source={{ uri: productImage }}
        style={styles.imageBackgroundStyles}
        imageStyle={styles.imageBackgroundImageStyles}>
        <View style={[CommonStyles.flex_1, CommonStyles.justifyContentSpacebetween]}>
          <CustomText
            fontFamily={FontFamily.SofiaSansBold}
            size={2}
            containerStyles={styles.distanceTextView}>
            {itemsLeft} {selectedLanguage?.ServiceDetailsOverview_Screen?.left}
          </CustomText>
          <View style={styles.ratingView}>
            <FontAwesome name="star" size={width(2.3)} color={AppColors.orange} />
            <CustomText
              fontFamily={FontFamily.SofiaSansBold}
              size={2.5}
            >
              {rating}
            </CustomText>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.rightView}>
        <CustomText
          fontFamily={FontFamily.SofiaSansMedium}
          size={3.8}
          color={AppColors.darkBlue}
          containerStyles={styles.titleStyles}>
          {productName}
        </CustomText>
        <View style={styles.secView}>
          <CustomText
            fontFamily={FontFamily.SofiaSansMedium}
            color={AppColors.darkBlue}
            size={3}>
            {productCategory}
          </CustomText>
          <View style={styles.dot} />
          <CustomText
            fontFamily={FontFamily.SofiaSansMedium}
            color={AppColors.darkBlue}
            size={3}>
            {productSubCategory}
          </CustomText>
        </View>
        <CustomText
          color={AppColors.brown}
          fontFamily={FontFamily.SofiaSansRegular}
          size={2.3}
          containerStyles={styles.descriptionText}>
          {productDescription}
        </CustomText>
        <CustomText
          color={AppColors.darkBlue}
          fontFamily={FontFamily.SofiaSansMedium}
          containerStyles={styles.priceText}
          size={4}>
          {(productPrice)?.toFixed(2)}<Text style={styles.currencyText}>SAR</Text>
        </CustomText>
      </View>
      <TouchableOpacity activeOpacity={.9} onPress={onCartPress} style={[styles.itemsLeftVIew, { backgroundColor: isAddedToCart ? AppColors.blue : AppColors.blue + '20' }]}>
        {isAddedToCart ?
          <Feather name='check' size={width(4)} color={AppColors.white} /> :
          <AntDesign name='shoppingcart' size={width(4)} color={AppColors.blue} />}
      </TouchableOpacity>
    </View>
  );
};

export default StoreDetailsProductComponent;
