import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import Button from '~components/button';
import { H2, H3, H4 } from '~components/text/text';
import { selectLanguage } from '~store/slices/language';
import { CommonStyles, height, width } from '~utils';
import AppColors from '~utils/app-colors';
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
  rating?: any;
  productCategory: string;
  productUnit: string;
  tags?: Array<string>;
  subCategory: string;
  description?: string;
  store?: string;
}
type Props = {
  product?: ProductItemProps | null;
  images?: any;
  isAddedToCart?: boolean;
  onAddToCartPress?: () => void;
  onRemoveToCartPress?: () => void;
  onStorePress?: () => void;
};
interface SwiperImagesProps {
  item?: string;
  index?: string | number;
}

const ProductDetailModal: React.ForwardRefRenderFunction<any, Props> = (
  {
    onAddToCartPress,
    onRemoveToCartPress,
    onStorePress,
    images,
    product,
    isAddedToCart = false,
  },
  ref,
) => {
  const [isVisible, setVisible] = useState<boolean>(false);
  useImperativeHandle(ref, () => ({
    show: function () {
      setVisible(true);
    },
    hide: function () {
      setVisible(false);
    },
  }));
  const selectedLanguage = useSelector(selectLanguage);
  const [imageIndex, setImageIndex] = useState<number>(0);
  const swiperRef = useRef<FlatList>(null);
  const onViewChangeRef = useRef(({ changed }: { changed: any }) => {
    if (changed[0].isViewable) {
      setImageIndex(changed[0].index);
    }
  });
  let temp = new Array(Math.ceil(product?.rating ?? 0)).fill('');
  const onLeftArrowPress = () => {
    if (imageIndex === 0) {
      swiperRef?.current?.scrollToIndex({
        index: images?.length - 1,
        animated: true,
      });
    } else {
      swiperRef?.current?.scrollToIndex({
        index: imageIndex - 1,
        animated: true,
      });
    }
  };
  const onRightArrowPress = () => {
    if (imageIndex >= images?.length - 1) {
      swiperRef?.current?.scrollToIndex({ index: 0, animated: true });
    } else {
      swiperRef?.current?.scrollToIndex({
        index: imageIndex + 1,
        animated: true,
      });
    }
  };
  const renderImages = ({ item, index }: SwiperImagesProps) => {
    return (
      <Image
        key={index}
        source={{
          uri: item,
        }}
        style={styles.productImageBackgroundStyles}
      />
    );
  };
  return (
    <Modal
      isVisible={isVisible}
      statusBarTranslucent
      style={styles.modalMainStyles}
      customBackdrop={<View style={styles.backDrop} />}>
      <View style={styles.mainViewStyles}>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <View style={styles.wrapper}>
            <View style={styles.closePriceView} pointerEvents="box-none">
              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.closeButton}
                onPress={() => setVisible(false)}>
                <Ionicons
                  name="close-outline"
                  size={width(6)}
                  color={AppColors.white}
                />
              </TouchableOpacity>
              <View
                style={[
                  CommonStyles.row,
                  CommonStyles.width100,
                  styles.paddingHor3,
                ]}>
                <Feather
                  onPress={onLeftArrowPress}
                  name="chevron-left"
                  size={width(6)}
                  color={AppColors.white}
                />
                <Feather
                  onPress={onRightArrowPress}
                  name="chevron-right"
                  size={width(6)}
                  color={AppColors.white}
                />
              </View>
              <View
                style={[
                  CommonStyles.row,
                  CommonStyles.width100,
                  {
                    marginBottom: height(2),
                  },
                ]}>
                <View style={styles.dotsView}>
                  {images?.map((i: any, n: any) => {
                    return (
                      <View
                        key={n}
                        style={[
                          imageIndex === n
                            ? styles.activeDotStyles
                            : styles.dot,
                        ]}
                      />
                    );
                  })}
                </View>
                <H2 color={AppColors.white} containerStyles={styles.priceView}>
                  {product?.productPrice?.toFixed(2)}
                  <Text style={styles.currencyText}>SAR</Text>
                </H2>
              </View>
            </View>
            <FlatList
              data={images}
              horizontal
              renderItem={renderImages}
              ref={swiperRef}
              viewabilityConfig={{ viewAreaCoveragePercentThreshold: 90 }}
              onViewableItemsChanged={onViewChangeRef.current}
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              snapToAlignment="center"
            />
          </View>
          <H2
            size={7}
            fontFamily={FontFamily.SofiaSansBold}
            containerStyles={styles.titleView}>
            {product?.productName}
          </H2>
          <View style={styles.categoryRow}>
            {temp.map((i, n) => {
              return (
                <View key={n} style={styles.star}>
                  <FontAwesome
                    name="star"
                    size={width(3.5)}
                    color={AppColors.orange}
                  />
                </View>
              );
            })}
            <H4
              containerStyles={styles.ratingTextView}
              fontFamily={FontFamily.SofiaSansBold}>
              {product?.rating}
            </H4>
          </View>
          <View style={styles.categoryRow}>
            <H3 size={4} fontFamily={FontFamily.SofiaSansMedium}>
              {product?.productCategory}
            </H3>
            <View style={styles.dotBlue} />
            <H3 size={4} fontFamily={FontFamily.SofiaSansMedium}>
              {product?.subCategory}
            </H3>
          </View>
          <View style={styles.categoryRow}>
            <H3 size={4} fontFamily={FontFamily.SofiaSansMedium}>
              {`Store: `}
            </H3>
            <H3
              size={3.8}
              color={AppColors.blue}
              fontFamily={FontFamily.SofiaSansMedium}
              onPress={onStorePress}>
              {product?.store}
            </H3>
          </View>
          <H4 containerStyles={styles.titleView}>
            {selectedLanguage?.ItemDetailsPopup?.Tags_Heading}
          </H4>
          <View style={styles.tagsMainView}>
            {product?.tags?.map((i, idx) => {
              return (
                <H4
                  key={idx}
                  color={AppColors.blue}
                  containerStyles={styles.tagView}>
                  {i}
                </H4>
              );
            })}
          </View>
          <H4 containerStyles={styles.titleView}>
            {selectedLanguage?.ItemDetailsPopup?.Description_Heading}
          </H4>
          <H4
            size={3.4}
            fontFamily={FontFamily.SofiaSansLight}
            containerStyles={styles.descriptionView}>
            {product?.description}
          </H4>
        </ScrollView>
        {isAddedToCart ? (
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.deleteButton}
            onPress={onRemoveToCartPress}>
            <Button
              touchableOpacityProps={{ disabled: true }}
              containerStyle={styles.btn}>
              {`✓ ${selectedLanguage?.ItemDetailsPopup?.Addedtocart_Button}`}
            </Button>
            <MaterialIcons
              name="delete-outline"
              size={width(7)}
              color={AppColors.white}
            />
          </TouchableOpacity>
        ) : (
          <Button
            onPress={onAddToCartPress}
            containerStyle={styles.addToCartBtn}>
            {selectedLanguage?.ItemDetailsPopup?.Addtocart_Button}
          </Button>
        )}
      </View>
    </Modal>
  );
};

export default forwardRef(ProductDetailModal);
