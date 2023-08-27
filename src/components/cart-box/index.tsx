
import React, { useState } from 'react';
import { Image, Pressable, TextInput, View, ViewStyle, Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux';
import { H1, H2, H4 } from '~components/text/text';
import { selectLanguage } from '~store/slices/language';
import { width } from '~utils';
import AppColors from '~utils/app-colors';
import styles from './styles';
type Props = {
  containerStyle?: ViewStyle;
  productImage?: string;
  productTitle?: string;
  shopName?: string;
  productPrice?: string;
  shopNumber?: string;
};

const CartBox: React.FC<Props> = ({
  productImage,
  containerStyle = {},
  productTitle,
  shopName,
  productPrice,
  shopNumber,
}) => {
  const [count, setCount] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const selectedLanguage = useSelector(selectLanguage);

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.topView}>
        <Image source={{ uri: productImage }} style={styles.productImageStyle} />
        <View style={styles.titleViewStyle}>
          <H1 size={4.5} numberOfLines={1}>
            {productTitle}
          </H1>
          <H4 color={AppColors.gray3} size={3} numberOfLines={1}>
            {shopName}
          </H4>
          <H2 color={AppColors.blue} numberOfLines={1}>
            {productPrice}
            <Text style={styles.currencyText}>SAR</Text>
          </H2>
        </View>
        <View style={styles.counterTitleView}>
          <H4
            color={AppColors.gray3}
            size={3}
            textStyles={styles.shopNumberTextStyle}
            numberOfLines={1}>
            {shopNumber}
          </H4>
          <View style={styles.counterView}>
            <Pressable onPress={() => setCount(count - 1)}>
              <AntDesign name="minus" size={width(5)} color={AppColors.gray3} />
            </Pressable>
            <H1 size={4.7}>{count}</H1>
            <Pressable onPress={() => setCount(count + 1)}>
              <AntDesign name="plus" size={width(5)} color={AppColors.blue} />
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.lineView}></View>
      <TextInput
        placeholder={selectedLanguage?.MyCart_Screen?.AddComments_PlaceHolder}
        placeholderTextColor={AppColors.gray2}
        style={styles.CommentBox}
        value={comment}
        onChangeText={text => setComment(text)}
        multiline={true}
      />

    </View>
  );
};

export default CartBox;
