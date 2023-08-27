import React from 'react';
import { FlatList, ScrollView, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import { StoreDetailsProductComponent, TagComponent } from '~components';
import { H4 } from '~components/text/text';
import { selectLanguage } from '~store/slices/language';
import { CommonStyles, height } from '~utils';
import AppColors from '~utils/app-colors';
import { products } from '~utils/dummy-data';
import FontFamily from '~utils/font-family';
import styles from './styles';

interface ProductItemProps {
  productImages: Array<string>;
  distance: number;
  itemsLeft?: number;
  providerLogo: string;
  providerName: string;
  productName: string;
  productPrice: number;
  rating: number;
  productCategory: string;
  productUnit: string;
}
interface ProductProps {
  item: ProductItemProps;
  index: string | number;
}
interface Props {
  description?: string;
}
const ItemsTab = ({ description, }: Props) => {
  const selectedLanguage = useSelector(selectLanguage);
  const renderProducts = ({ item }: ProductProps) => {
    return <StoreDetailsProductComponent
      productName={item.productName}
      productImage={item.productImages[0]}
      productCategory={item.productCategory}
      productDescription={'Nice product like it btw.'}
      isAddedToCart={false}
      productPrice={item.productPrice}
      productSubCategory={item.productCategory}
      itemsLeft={10}
      rating={item.rating}
    />;
  };
  return (
    <View
      style={styles.contentContainerStyle}
    >
      <View style={styles.whiteBackgroundView}>
        <View style={CommonStyles.row}>
          <H4
            size={3.8}
            fontFamily={FontFamily.SofiaSansBold}>
            {selectedLanguage?.ServiceDetailsOverview_Screen?.Items_Heading}
          </H4>
          <H4
            size={3.6}
            color={AppColors.blue}
            fontFamily={FontFamily.SofiaSansRegular}>
            {selectedLanguage?.ServiceDetailsOverview_Screen?.SeeAll_Heading}
          </H4>
        </View>
        <FlatList
          data={products}
          keyExtractor={(_, i) => i.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={renderProducts}
          style={styles.flatlist}
        />
      </View>
      <TouchableOpacity activeOpacity={.9} style={styles.itemsFooterBtn}>
        <H4 fontFamily={FontFamily.SofiaSansBold} color={AppColors.white}>Order</H4>
        <H4 fontFamily={FontFamily.SofiaSansBold} color={AppColors.white}>50SAR</H4>
      </TouchableOpacity>
    </View>
  );
};

export default ItemsTab;
