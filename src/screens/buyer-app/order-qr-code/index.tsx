import {View, Text, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AppColors from '~utils/app-colors';
import {CommonStyles, width} from '~utils';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {Header} from '~components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import styles from './styles';
import {useSelector} from 'react-redux';
import {selectLanguage} from '~store/slices/language';
import {Wallet} from '~assets/images';
import {H1, H2} from '~components/text/text';
import FontFamily from '~utils/font-family';
import QRCode from 'react-native-qrcode-svg';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const OrderQRCode = ({navigation}: NativeStackScreenProps<any>) => {
  const selectedLanguage = useSelector(selectLanguage);
  const renderOrderDetailCard = () => {
    return (
      <View style={styles.detailCard}>
        {/* Order info */}
        <View style={styles.orderinfo}>
          {/* image */}
          <View style={styles.iconboxContainer}>
            <MaterialCommunityIcons
              color={AppColors.blue}
              size={width(7)}
              name="cube-outline"
            />
          </View>
          {/* order Id */}
          <View style={styles.orderRef}>
            <H2
              size={2.8}
              fontFamily={FontFamily.SofiaSansSemiBold}
              color={AppColors.gray3}>
              <Text>Order id:</Text>
            </H2>
            <H1
              size={4.3}
              fontFamily={FontFamily.SofiaSansBold}
              color={AppColors.black}>
              ORD256TDFZX
            </H1>
          </View>
          {/* order date */}
          <View style={styles.orderdate}>
            <H2
              size={2.8}
              fontFamily={FontFamily.SofiaSansSemiBold}
              color={AppColors.brown}>
              23,Mar,2022
            </H2>
          </View>
        </View>
        {/* line-divider */}
        <View style={styles.lineStyle}></View>
        {/* order-loc-info */}
        <View style={styles.orderLocSection}>
          {/* loc-from */}
          <View style={styles.orderLoc}>
            <View style={styles.iconflex}>
              <SimpleLineIcons
                name="location-pin"
                color={AppColors.blue}
                size={width(5)}
                style={styles.orderLocIcon}
              />
              <H1 size={3.3}>From</H1>
            </View>
            {/* location address */}
            <H2
              numberOfLines={3}
              fontFamily={FontFamily.SofiaSansSemiBold}
              color={AppColors.gray3}
              size={3.3}
              containerStyles={styles.addressText}>
              C-40, Golden street,East 9th street,New york,USA
            </H2>
          </View>
          {/* line divider */}
          <View style={styles.verticalLineStyle}></View>
          {/* Loc-To */}
          <View style={styles.orderLoc}>
            <View style={styles.iconflex}>
              <SimpleLineIcons
                name="location-pin"
                color={AppColors.blue}
                size={width(5)}
                style={styles.orderLocIcon}
              />
              <H1 size={3.3}>To</H1>
            </View>
            {/* location address */}
            <H2
              numberOfLines={3}
              color={AppColors.gray3}
              fontFamily={FontFamily.SofiaSansSemiBold}
              size={3.3}
              containerStyles={styles.addressText}>
              C-40, Golden street,East 9th street,New york,USA
            </H2>
          </View>
        </View>
      </View>
    );
  };

  const renderOrderQrCode = () => {
    return (
      <View style={styles.orderQrContainer}>
        <View style={styles.qrContainer}>
          <QRCode
            value="Just some string value"
            size={width(40)}
            logoBackgroundColor="transparent"
          />
        </View>
        <H1
          textStyles={styles.QrnoStyle}
          size={3.5}
          color={AppColors.gray3}
          containerStyles={styles.qrText}>
          ORD260RTHKXZ
        </H1>
        {/* footer */}
        <View style={styles.lineStyle}></View>
        <View style={styles.qrfooter}>
          <H2
            containerStyles={styles.footerText}
            size={4}
            color={AppColors.gray3}>
            Scan QR code to check in & out
          </H2>
        </View>
      </View>
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
            title={selectedLanguage?.OrderQRCode_Screen?.OrderQRCode_Heading}
            containerStyle={styles.headerContainerStyle}
            backView={styles.backView}
            onLeftIconPress={() => navigation.goBack()}
          />
          {/* Order detail card */}
          {renderOrderDetailCard()}
          {/* Order QR Code */}
          {renderOrderQrCode()}
        </View>
      </ScreenWrapper>
    </LinearGradient>
  );
};
export default OrderQRCode;
