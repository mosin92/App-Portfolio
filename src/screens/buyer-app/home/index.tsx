import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import {
  BuyerHomeHeader,
  CategoryComponent,
  OnlineProviderComponent,
  ProductComponent,
  ProductDetailModal,
} from '~components';
import { H3, H4 } from '~components/text/text';
import { ScreenNames } from '~routes';
import { selectLanguage } from '~store/slices/language';
import { CommonStyles, width } from '~utils';
import AppColors from '~utils/app-colors';
import { categories, products, providers } from '~utils/dummy-data';
import styles from './styles';

interface HeadingRowProps {
  title: string;
  onViewAllPress?: () => void;
}
interface CategoryItemProps {
  title: string;
  image: string;
}
interface CategoryFlatlist {
  item: CategoryItemProps;
  index: string | number;
}
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
interface ProductFlatlist {
  item: ProductItemProps;
  index: string | number;
}
interface ProviderItemProps {
  providerLogo: string;
  providerName: string;
  productCategory: string;
}
interface ProviderFlatlist {
  item: ProviderItemProps;
  index: string | number;
}

const Home = ({ navigation }: NativeStackScreenProps<any>) => {
  const selectedLanguage = useSelector(selectLanguage);
  const productModalRef = useRef<any>(null);
  const [isCart, setIsCart] = useState<boolean>(false);
  const [selectedProduct, setSelectProduct] = useState<any>(null);
  const HeadingRow = ({ title, onViewAllPress }: HeadingRowProps) => {
    return (
      <View style={styles.rowHeadingView}>
        <H3 size={5}>{title}</H3>
        <H4 onPress={onViewAllPress} color={AppColors.blue}>
          {selectedLanguage?.BuyerHome_screen?.ViewAll_Heading}
        </H4>
      </View>
    );
  };
  const renderCategories = ({ item }: CategoryFlatlist) => {
    return (
      <CategoryComponent
        image={item.image}
        title={item.title}
        onPress={() =>
          navigation.navigate(ScreenNames.SUBCATEGORIESSCREEN, {
            header: item.title,
          })
        }
      />
    );
  };
  const renderAvailableNow = ({ item }: ProductFlatlist) => {
    return (
      <ProductComponent
        distance={item.distance}
        productCategory={item.productCategory}
        productImage={item.productImages[0]}
        productName={item.productName}
        productPrice={item.productPrice}
        productUnit={item.productUnit}
        providerLogo={item.providerLogo}
        providerName={item.providerName}
        rating={item.rating}
        itemsLeft={item.itemsLeft}
        onPress={() => {
          setSelectProduct(item);
          productModalRef?.current?.show();
        }}
      />
    );
  };
  const renderFeatured = ({ item }: ProductFlatlist) => {
    return (
      <ProductComponent
        distance={item.distance}
        productCategory={item.productCategory}
        productImage={item.productImages[0]}
        productName={item.productName}
        productPrice={item.productPrice}
        productUnit={item.productUnit}
        providerLogo={item.providerLogo}
        providerName={item.providerName}
        rating={item.rating}
        itemsLeft={item.itemsLeft}
        onPress={() => {
          setSelectProduct(item);
          productModalRef?.current?.show();
        }}
      />
    );
  };
  const renderProviders = ({ item }: ProviderFlatlist) => {
    return (
      <OnlineProviderComponent
        providerLogo={item.providerLogo}
        providerName={item.providerName}
        productCategory={item.productCategory}
      />
    );
  };
  const itemSeparatorComponent = () => {
    return <View style={styles.itemSeparatorStyles} />;
  };
  return (
    <LinearGradient
      colors={[
        AppColors.linearColorOne,
        AppColors.linearColorTwo,
        AppColors.linearColorThree,
      ]}
      style={CommonStyles.flex_1}>
      <ScreenWrapper
        scrollType="scroll"
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
        statusBarColor={AppColors.primary}
        barStyle="dark-content">
        <View style={styles.container}>
          <BuyerHomeHeader
            profileImage={
              'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'
            }
            title={selectedLanguage?.BuyerHome_screen?.Home_Title}
          />
          <TouchableOpacity activeOpacity={1} style={styles.searchView}>
            <View style={styles.innerSearchView}>
              <Ionicons
                name="md-search"
                size={width(5)}
                color={AppColors.brown}
              />
              <H4 color={AppColors.brown}>
                {'   '}
                {selectedLanguage?.BuyerHome_screen?.WhatYouLike_PlaceHolder}
              </H4>
            </View>
            <Ionicons
              name="ios-chevron-down-outline"
              size={width(4)}
              color={AppColors.brown}
            />
          </TouchableOpacity>
          <HeadingRow
            title={selectedLanguage?.BuyerHome_screen?.Categories_Heading}
            onViewAllPress={() => navigation.navigate(ScreenNames.MYCARTSCREEN)}
          />
          <FlatList
            data={categories}
            keyExtractor={(item, index) => index?.toString()}
            horizontal
            renderItem={renderCategories}
            showsHorizontalScrollIndicator={false}
            style={styles.categoryFlatlistStyles}
            contentContainerStyle={styles.categoryContentContainerStyle}
            ItemSeparatorComponent={itemSeparatorComponent}
          />
          <HeadingRow
            title={selectedLanguage?.BuyerHome_screen?.AvailableNow_Heading}
            onViewAllPress={() =>
              navigation.navigate(ScreenNames.AVAILABLEPRODUCTS)
            }
          />
          <FlatList
            data={products.filter(i => {
              return i.itemsLeft != undefined;
            })}
            keyExtractor={(item, index) => index?.toString()}
            horizontal
            renderItem={renderAvailableNow}
            showsHorizontalScrollIndicator={false}
            style={styles.categoryFlatlistStyles}
            contentContainerStyle={styles.categoryContentContainerStyle}
            ItemSeparatorComponent={itemSeparatorComponent}
          />
          <HeadingRow
            title={selectedLanguage?.BuyerHome_screen?.Featured_Heading}
            onViewAllPress={() =>
              navigation.navigate(ScreenNames.FEATUREDPRODUCT)
            }
          />
          <FlatList
            data={products.filter(i => {
              return i.itemsLeft === undefined;
            })}
            keyExtractor={(item, index) => index?.toString()}
            horizontal
            renderItem={renderFeatured}
            showsHorizontalScrollIndicator={false}
            style={styles.categoryFlatlistStyles}
            contentContainerStyle={styles.categoryContentContainerStyle}
            ItemSeparatorComponent={itemSeparatorComponent}
          />
          <HeadingRow
            title={selectedLanguage?.BuyerHome_screen?.NearMe_Heading}
            onViewAllPress={() =>
              navigation.navigate(ScreenNames.NEARMEPRODUCTS)
            }
          />
          <FlatList
            data={products.filter(i => {
              return i.itemsLeft === undefined;
            })}
            keyExtractor={(item, index) => index?.toString()}
            horizontal
            renderItem={renderFeatured}
            showsHorizontalScrollIndicator={false}
            style={styles.categoryFlatlistStyles}
            contentContainerStyle={styles.categoryContentContainerStyle}
            ItemSeparatorComponent={itemSeparatorComponent}
          />
          <HeadingRow
            title={selectedLanguage?.BuyerHome_screen?.TopRated_Heading}
            onViewAllPress={() =>
              navigation.navigate(ScreenNames.TOPRATEDPRODUCTS)
            }
          />
          <FlatList
            data={products.filter(i => {
              return i.itemsLeft === undefined;
            })}
            keyExtractor={(item, index) => index?.toString()}
            horizontal
            renderItem={renderFeatured}
            showsHorizontalScrollIndicator={false}
            style={styles.categoryFlatlistStyles}
            contentContainerStyle={styles.categoryContentContainerStyle}
            ItemSeparatorComponent={itemSeparatorComponent}
          />
          <HeadingRow
            title={selectedLanguage?.BuyerHome_screen?.Latest_Heading}
            onViewAllPress={() =>
              navigation.navigate(ScreenNames.LATESTPRODUCTS)
            }
          />
          <FlatList
            data={products.filter(i => {
              return i.itemsLeft === undefined;
            })}
            keyExtractor={(item, index) => index?.toString()}
            horizontal
            renderItem={renderFeatured}
            showsHorizontalScrollIndicator={false}
            style={styles.categoryFlatlistStyles}
            contentContainerStyle={styles.categoryContentContainerStyle}
            ItemSeparatorComponent={itemSeparatorComponent}
          />
          <HeadingRow
            title={selectedLanguage?.BuyerHome_screen?.OnlineProviders_Heading}
            onViewAllPress={() =>
              navigation.navigate(ScreenNames.ONLINEPROVIDERSSCREEN)
            }
          />
          <FlatList
            data={providers}
            keyExtractor={(item, index) => index?.toString()}
            horizontal
            renderItem={renderProviders}
            showsHorizontalScrollIndicator={false}
            style={styles.categoryFlatlistStyles}
            contentContainerStyle={styles.categoryContentContainerStyle}
            ItemSeparatorComponent={itemSeparatorComponent}
          />
          <ProductDetailModal
            onAddToCartPress={() => setIsCart(true)}
            onRemoveToCartPress={() => setIsCart(false)}
            isAddedToCart={isCart}
            product={selectedProduct}
            images={selectedProduct?.productImages}
            ref={productModalRef}
            onStorePress={() => {
              productModalRef.current.hide()
              navigation.navigate(ScreenNames.STOREDETAILSCREEN)
            }}
          />
        </View>
      </ScreenWrapper>
    </LinearGradient>
  );
};

export default Home;
