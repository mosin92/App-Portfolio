import React from 'react';
import {Image, Pressable, Text, View, ViewStyle} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
import {Arrow, Chat, Package} from '~assets/images';
import {H1, H2, H4} from '~components/text/text';
import {selectLanguage} from '~store/slices/language';
import {width} from '~utils';
import AppColors from '~utils/app-colors';
import FontFamily from '~utils/font-family';
import styles from './styles';
type Props = {
  containerStyle?: ViewStyle;
  orderNumber?: string;
  orderId?: string;
  items?: string;
  date?: string;
  price?: string;
  shopName?: string;
  time?: string;
  source?: string;
  onPressDetail?: () => void;
};

const OrderCard: React.FC<Props> = ({
  containerStyle = {},
  orderNumber,
  items,
  price,
  shopName,
  time,
  date,
  source,
  onPressDetail,
}) => {
  const selectedLanguage = useSelector(selectLanguage);

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.shopInfoView}>
        <Image
          source={{
            uri: source,
          }}
          style={styles.shopImage}
        />
        <View style={styles.titleView}>
          <View style={styles.orderRow}>
            <H1 numberOfLines={1} size={3.3} color={AppColors.blue}>
              {orderNumber}
            </H1>
            <H1 numberOfLines={1} size={3}>
              {time}
              {date}
            </H1>
          </View>
          <H1 numberOfLines={1} size={4.5}>
            {shopName}
          </H1>
          <View style={styles.orderTextView}>
            <H2
              numberOfLines={1}
              size={3.2}
              color={AppColors.gray3}
              fontFamily={FontFamily.SofiaSansSemiBold}>
              {selectedLanguage?.YourOrder_Inprocess_Screen?.Price_Label}
            </H2>
            <H2
              numberOfLines={1}
              size={3.8}
              fontFamily={FontFamily.SofiaSansSemiBold}>
              {price}
              <Text style={styles.currencyText}>SAR</Text>
            </H2>
          </View>
        </View>
      </View>
      <View style={styles.lineStyle}></View>
      <View style={styles.deliveryDetailView}>
        <View style={styles.deliveryTimeTextView}>
          <Image
            source={Package}
            resizeMode={'contain'}
            style={styles.iconStyle}
          />
          <H2 numberOfLines={1} size={4}>
            {items}
          </H2>
        </View>
        <Pressable onPress={onPressDetail} style={styles.deliveryTextView}>
          <H2
            numberOfLines={1}
            size={4}
            color={AppColors.blue}
            textAlign="right">
            {selectedLanguage?.YourOrder_Inprocess_Screen?.ViewDetails_Button}
          </H2>
          <Image
            source={Arrow}
            resizeMode={'contain'}
            style={styles.arrowIconStyle}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default OrderCard;
