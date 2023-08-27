import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { FlatList, TextInput, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import { Button, CartBox, Header } from '~components';
import { H1, H4 } from '~components/text/text';
import { ScreenNames } from '~routes';
import { selectLanguage } from '~store/slices/language';
import { CommonStyles, height, width } from '~utils';
import AppColors from '~utils/app-colors';
import { productData } from '~utils/dummy-data';
import styles from './styles';

interface ProductFlatlist {
  item: ProductItemProps;
  index: string | number;
}
interface ProductItemProps {
  productImage: string;
  productTitle: string;
  shopName: string;
  productPrice: string;
  shopNumber: string;
}

const MyCartScreen = ({ navigation }: NativeStackScreenProps<any>) => {
  const selectedLanguage = useSelector(selectLanguage);
  const [notes, setNotes] = useState<string>('');

  const renderProducts = ({ item }: ProductFlatlist) => {
    return (
      <CartBox
        productImage={item.productImage}
        productTitle={item.productTitle}
        shopName={item.shopName}
        productPrice={item.productPrice}
        shopNumber={item.shopNumber}
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
      <ScreenWrapper statusBarColor={AppColors.white} barStyle="dark-content">
        <View style={styles.container}>
          <Header
            title={selectedLanguage?.MyCart_Screen?.MyCart_Title}
            containerStyle={styles.headerContainerStyle}
          />
          <FlatList
            data={productData}
            keyExtractor={(item, index) => index?.toString()}
            renderItem={renderProducts}
            showsHorizontalScrollIndicator={false}
            style={styles.productFlatlistStyles}
            ListFooterComponent={() => (
              <>
                <View style={styles.DeliveryScheduleView}>
                  <View style={styles.ChargesView}>
                    <H1 size={3.6}>
                      {selectedLanguage?.MyCart_Screen?.ServiceCharges_Label}
                    </H1>
                    <H1 size={3.6}>SAR10.00</H1>
                  </View>
                  <View style={styles.ChargesView}>
                    <H1 size={3.6}>
                      {selectedLanguage?.MyCart_Screen?.DeliveryCharges}
                    </H1>
                    <H1 size={3.6}>SAR15.00</H1>
                  </View>
                  <View style={[styles.ChargesView, { marginBottom: height(3) }]}>
                    <H1 size={3.6}>
                      {selectedLanguage?.MyCart_Screen?.TotalCharges_Label}
                    </H1>
                    <H1 size={3.6}>SAR180.00</H1>
                  </View>
                  <H1 size={3.6}>
                    {selectedLanguage?.MyCart_Screen?.SetDeliverySchedule_Label}
                  </H1>
                  <View style={styles.addressView}>
                    <View style={styles.addressTextView}>
                      <View style={styles.iconView}>
                        <Feather
                          name="map-pin"
                          color={AppColors.blue}
                          size={width(4)}
                          style={styles.iconStyle}
                        />
                        <H4 color={AppColors.gray} size={3}>
                          {selectedLanguage?.MyCart_Screen?.Address_Label}
                        </H4>
                      </View>
                      <View style={styles.iconView}>
                        <MaterialCommunityIcons
                          name="navigation-variant-outline"
                          color={AppColors.blue}
                          size={width(4)}
                          style={styles.iconStyle}
                        />
                        <H4 color={AppColors.blue} size={3.3}>
                          {
                            selectedLanguage?.MyCart_Screen
                              ?.CurrentLocation_Label
                          }
                        </H4>
                      </View>
                    </View>
                    <View style={styles.locationText}>
                      <H1
                        size={3.4}
                        textStyles={styles.addressText}
                        numberOfLines={2}>
                        Golden Street, East 25th street, New york, US
                      </H1>
                    </View>
                  </View>
                  <View style={styles.deliveryTextView}>
                    <View style={styles.iconView}>
                      <Feather
                        name="calendar"
                        color={AppColors.blue}
                        size={width(5)}
                        style={styles.iconStyle}
                      />
                      <H4 color={AppColors.gray} size={3}>
                        {selectedLanguage?.MyCart_Screen?.DeliveryDate_Label}
                      </H4>
                    </View>
                    <H4 size={3.3}>15, June 2020</H4>
                  </View>
                  <View style={styles.deliveryTextView}>
                    <View style={styles.iconView}>
                      <Feather
                        name="clock"
                        color={AppColors.blue}
                        size={width(5)}
                        style={styles.iconStyle}
                      />
                      <H4 color={AppColors.gray} size={3}>
                        {selectedLanguage?.MyCart_Screen?.DeliveryTime_Label}
                      </H4>
                    </View>
                    <H4 size={3.3}>15, June 2020</H4>
                  </View>
                </View>
                <View style={styles.DeliveryScheduleView}>
                  <H1 size={3.8}>
                    {selectedLanguage?.MyCart_Screen?.NotForDriver_Heading}
                  </H1>
                  <TextInput
                    placeholder={
                      selectedLanguage?.MyCart_Screen?.NotForDriver_Heading
                    }
                    placeholderTextColor={AppColors.gray2}
                    style={styles.CommentBox}
                    value={notes}
                    onChangeText={text => setNotes(text)}
                    multiline={true}
                  />
                </View>
              </>
            )}
          />
          <Button
            containerStyle={styles.btnStyle}
            onPress={() => navigation.navigate(ScreenNames.PAYMENTSCREEN)}>
            {selectedLanguage?.MyCart_Screen?.Confrim_text}
          </Button>
        </View>
      </ScreenWrapper>
    </LinearGradient>
  );
};

export default MyCartScreen;
