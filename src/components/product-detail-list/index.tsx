import React from 'react';
import { FlatList, Image, Text, View, ViewStyle } from 'react-native';
import { useSelector } from 'react-redux';
import { H1, H2 } from '~components/text/text';
import { selectLanguage } from '~store/slices/language';
import AppColors from '~utils/app-colors';
import FontFamily from '~utils/font-family';
import styles from './styles';
interface ProductItemProps {
  productImages: Array<string>;
  productName: string;
  productPrice: number;
  productCategory: string;
}

interface ProductFlatlist {
  item: ProductItemProps;
  index?: string | number;
}

type Props = {
  containerStyle?: ViewStyle;
  productData?: Array<ProductItemProps>;
  serviceCharges?: string;
  deliveryCharges?: string;
  totalCharges?: string;
};

const ProductDetailList: React.FC<Props> = ({
  containerStyle = {},
  productData,
  serviceCharges,
  deliveryCharges,
  totalCharges,
}) => {
  const selectedLanguage = useSelector(selectLanguage);
  const renderProductList = ({ item }: ProductFlatlist) => {
    return (
      <View style={styles.shopInfoView}>
        <Image
          source={{
            uri: item?.productImages[0],
          }}
          style={styles.shopImage}
        />
        <View style={styles.titleView}>
          <H1 numberOfLines={1} size={4.5}>
            {item.productName}
          </H1>
          <View style={styles.orderTextView}>
            <H2 numberOfLines={1} size={3.2} color={AppColors.gray3}>
              {selectedLanguage?.Payment_Screen?.Categories_Label}
            </H2>
            <H2
              numberOfLines={1}
              size={3.2}
              textStyles={styles.productCategory}
              fontFamily={FontFamily.SofiaSansSemiBold}>
              {item.productCategory}
            </H2>
          </View>
        </View>
        <View style={styles.btnView}>
          <H2
            numberOfLines={1}
            size={4}
            fontFamily={FontFamily.SofiaSansSemiBold}>
            {item.productPrice}
            <Text style={styles.currencyText}>SAR</Text>
          </H2>
        </View>
      </View>
    );
  };
  return (
    <View style={[styles.container, containerStyle]}>
      <FlatList
        data={productData}
        keyExtractor={(item, index) => index?.toString()}
        renderItem={renderProductList}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={styles.productFlatlistStyles}
      />
      <View style={styles.lineView}></View>
      <View style={styles.chargesView}>
        {/* <View style={styles.chargesText}>
          <H2
            numberOfLines={1}
            size={4.3}
            fontFamily={FontFamily.SofiaSansSemiBold}>
            {serviceCharges}
            <Text style={styles.currencyText}>SAR</Text>
          </H2>
          <H2 numberOfLines={1} size={3} color={AppColors.gray3}>
            {selectedLanguage?.Payment_Screen?.ServiceCharges_Label}
          </H2>
        </View> */}
        <View style={styles.chargesText}>
          <H2
            numberOfLines={1}
            size={4.3}
            fontFamily={FontFamily.SofiaSansSemiBold}>
            {deliveryCharges}
            <Text style={styles.currencyText}>SAR</Text>
          </H2>
          <H2 numberOfLines={1} size={3} color={AppColors.gray3}>
            {selectedLanguage?.Payment_Screen?.DeliveryCharges}
          </H2>
        </View>
        <View style={styles.chargesText}>
          <H2
            numberOfLines={1}
            size={4.3}
            textAlign='right'
            fontFamily={FontFamily.SofiaSansSemiBold}>
            {totalCharges}
            <Text style={styles.currencyText}>SAR</Text>
          </H2>
          <H2
            textAlign='right' numberOfLines={1} size={3} color={AppColors.gray3}>
            {selectedLanguage?.Payment_Screen?.TotalAmount_Label}
          </H2>
        </View>
      </View>
    </View>
  );
};

export default ProductDetailList;
