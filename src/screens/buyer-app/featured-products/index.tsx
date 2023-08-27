import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useRef, useState} from 'react';
import {FlatList, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {useSelector} from 'react-redux';
import {Header, ProductHorizontalComponent} from '~components';
import ProductDetailModal from '~components/product-detail-modal';
import {selectLanguage} from '~store/slices/language';
import {CommonStyles} from '~utils';
import AppColors from '~utils/app-colors';
import {products} from '~utils/dummy-data';
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
  categoryImage?: string;
}
interface ProductFlatlist {
  item: ProductItemProps;
  index: string | number;
}

const FeaturedProduct = ({navigation}: NativeStackScreenProps<any>) => {
  const selectedLanguage = useSelector(selectLanguage);
  const productModalRef = useRef<any>(null);
  const [isCart, setIsCart] = useState<boolean>(false);
  const [selectedProduct, setSelectProduct] = useState<any>(null);
  const renderProducts = ({item}: ProductFlatlist) => {
    return (
      <ProductHorizontalComponent
        distance={item.distance}
        productCategory={item.productCategory}
        productImage={item.productImages[0]}
        productName={item.productName}
        productPrice={item.productPrice}
        productUnit={item.productUnit}
        providerLogo={item.providerLogo}
        providerName={item.providerName}
        rating={item.rating}
        categoryImage={item.categoryImage}
        itemsLeft={item.itemsLeft}
        onPress={() => {
          setSelectProduct(item);
          productModalRef?.current?.show();
        }}
      />
    );
  };
  return (
    <LinearGradient
      colors={[
        AppColors.linearColorOne,
        AppColors.linearColorTwo,
        AppColors.linearColorThree,
      ]}
      style={CommonStyles.flex_1}>
      <ScreenWrapper statusBarColor={AppColors.primary} barStyle="dark-content">
        <View style={styles.container}>
          <Header
            onLeftIconPress={() => navigation.goBack()}
            title={selectedLanguage?.Featured_screen?.Featured_Title}
          />
          <FlatList
            data={products.filter(i => {
              return i.itemsLeft === undefined;
            })}
            keyExtractor={(item, index) => index?.toString()}
            renderItem={renderProducts}
            style={styles.flatlistStyles}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainerStyle}
          />
          <ProductDetailModal
            onAddToCartPress={() => setIsCart(true)}
            onRemoveToCartPress={() => setIsCart(false)}
            isAddedToCart={isCart}
            product={selectedProduct}
            images={selectedProduct?.productImages}
            ref={productModalRef}
          />
        </View>
      </ScreenWrapper>
    </LinearGradient>
  );
};

export default FeaturedProduct;
