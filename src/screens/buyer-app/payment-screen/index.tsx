
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { useSelector } from 'react-redux';
import {
  Button,
  ClientDetails,
  Header,
  ProductDetailList,
  ShopDetailsCard,
} from '~components';
import { H1, H4 } from '~components/text/text';
import { ScreenNames } from '~routes';
import { selectLanguage } from '~store/slices/language';
import AppColors from '~utils/app-colors';
import { products } from '~utils/dummy-data';
import styles from './styles';

const PaymentScreen = ({ navigation }: NativeStackScreenProps<any>) => {

  const selectedLanguage = useSelector(selectLanguage);

  return (
    <ScreenWrapper
      statusBarColor={AppColors.blue50}
      barStyle="dark-content"
      scrollType="scroll"
      scrollViewProps={{ showsVerticalScrollIndicator: false, bounces: false }}>
      <View style={styles.container}>
        <Header
          title={selectedLanguage?.Payment_Screen?.Payment_Title}
          containerStyle={styles.headerContainerStyle}
          textColor={AppColors.white}
          iconColor={AppColors.white}
          backView={styles.backView}
          onLeftIconPress={() => navigation.goBack()}
        />
        <ShopDetailsCard
          shopName="Sofia Retailer Store"
          orderId="OR563PO7890"
          time="09:30 PM"
          date="18 Apr, 2020"
          leftTime="1 day, 18 Hours"
          containerStyle={styles.shopDetailContainer}
        />
        <LinearGradient
          colors={[
            AppColors.linearColorOne,
            AppColors.linearColorTwo,
            AppColors.linearColorThree,
          ]}
          style={styles.modalView}>
          <ProductDetailList
            containerStyle={styles.ProductDetailListContainer}
            productData={products}
            serviceCharges="10.00"
            deliveryCharges="15.00"
            totalCharges="205.00"
          />
          <ClientDetails
            clientImage="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg"
            clientName="Alex Joe"
          />
          <View style={styles.noteForRiderView}>
            <H1 size={4.5}>Notes For Driver</H1>
            <H4 textStyles={styles.noteText}>Kindly be on time</H4>
          </View>
          <Button
            onPress={() => navigation.navigate(ScreenNames.CHECKOUTSCREEN)}>
            {selectedLanguage?.Payment1_Screen?.PayNow_Button}
          </Button>
        </LinearGradient>
      </View>
    </ScreenWrapper>
  );
};

export default PaymentScreen;
