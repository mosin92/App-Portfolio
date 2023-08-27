import React from 'react';
import {Image, Pressable, View, ViewStyle} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
import {Chat} from '~assets/images';
import {H1, H2} from '~components/text/text';
import {selectLanguage} from '~store/slices/language';
import {width} from '~utils';
import AppColors from '~utils/app-colors';
import FontFamily from '~utils/font-family';
import styles from './styles';
type Props = {
  containerStyle?: ViewStyle;
  shopName?: string;
  orderId?: string;
  time?: string;
  date?: string;
  leftTime?: string;
  onPressPhone?: () => void;
  onPressChat?: () => void;
};

const ShopDetailsCard: React.FC<Props> = ({
  containerStyle = {},
  shopName,
  orderId,
  onPressPhone,
  onPressChat,
  time,
  date,
  leftTime,
}) => {
  const selectedLanguage = useSelector(selectLanguage);

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.shopInfoView}>
        <Image
          source={{
            uri: 'https://www.rockrobinsid.com/images/blogs/blog-img-012-2.jpg',
          }}
          style={styles.shopImage}
        />
        <View style={styles.titleView}>
          <H1 numberOfLines={1} size={4.5}>
            {shopName}
          </H1>
          <View style={styles.orderTextView}>
            <H2
              numberOfLines={1}
              size={3.2}
              color={AppColors.gray3}
              fontFamily={FontFamily.SofiaSansSemiBold}>
              OR ID:{' '}
            </H2>
            <H2
              numberOfLines={1}
              size={3.2}
              fontFamily={FontFamily.SofiaSansSemiBold}>
              {orderId}
            </H2>
          </View>
        </View>
        <View style={styles.btnView}>
          <Pressable onPress={onPressPhone} style={styles.btnStyle}>
            <Feather name="phone" color={AppColors.blue} size={width(5)} />
          </Pressable>
          <Pressable onPress={onPressChat} style={styles.btnStyle}>
            <Image
              source={Chat}
              style={styles.chatIcon}
              resizeMode={'contain'}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.lineStyle}></View>
      <View style={styles.deliveryDetailView}>
        <View style={styles.deliveryTimeTextView}>
          <H2
            numberOfLines={1}
            size={4}
            color={AppColors.gray3}
            textStyles={styles.textStyle}>
            {selectedLanguage?.Payment1_Screen?.Deliverytimedate}
          </H2>
          <View style={styles.dateTimeView}>
            <H2
              numberOfLines={1}
              size={4}
              textStyles={styles.timeText}
              fontFamily={FontFamily.SofiaSansSemiBold}>
              {time}
            </H2>
            <H2
              numberOfLines={1}
              size={4}
              fontFamily={FontFamily.SofiaSansSemiBold}>
              {date}
            </H2>
          </View>
        </View>
        <View style={styles.deliveryTextView}>
          <H2
            numberOfLines={1}
            size={4}
            color={AppColors.gray3}
            textAlign="right"
            textStyles={styles.textStyle}>
            {selectedLanguage?.Payment1_Screen?.TimeLeft_Label}
          </H2>
          <H2 numberOfLines={1} size={4} color={AppColors.blue}>
            {leftTime}
          </H2>
        </View>
      </View>
    </View>
  );
};

export default ShopDetailsCard;
