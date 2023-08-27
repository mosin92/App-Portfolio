import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  Text,
  Image,
  ImageSourcePropType,
  Pressable,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {useSelector} from 'react-redux';
import {Paypal, Scaner, Wallet} from '~assets/images';
import {Button, Header, IconButton, WalletCard} from '~components';
import {H1, H2, H4} from '~components/text/text';
import {ScreenNames} from '~routes';
import {selectLanguage} from '~store/slices/language';
import {CommonStyles} from '~utils';
import AppColors from '~utils/app-colors';
import {socialBtnData} from '~utils/data';
import FontFamily from '~utils/font-family';
import styles from './styles';

interface ProductItemProps {
  buttonIcon: ImageSourcePropType;
  title: string;
}

interface IconButtonList {
  item: ProductItemProps;
  index?: string | number;
}

const CheckoutScreen = ({navigation}: NativeStackScreenProps<any>) => {
  const selectedLanguage = useSelector(selectLanguage);
  const [active, setActive] = useState();
  return (
    <LinearGradient
      colors={[
        AppColors.linearColorOne,
        AppColors.linearColorTwo,
        AppColors.linearColorThree,
      ]}
      style={CommonStyles.flex_1}>
      <ScreenWrapper
        statusBarColor={AppColors.primary}
        barStyle="dark-content"
        scrollType="scroll"
        scrollViewProps={{showsVerticalScrollIndicator: false}}>
        <View style={styles.container}>
          <Header
            title={selectedLanguage?.Payment_Screen?.Payment_Title}
            onLeftIconPress={() => navigation.goBack()}
          />
          <ImageBackground
            source={{
              uri: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/12/1/3/AS0617H_Chocolate-Chip-Pistachio-Pancakes_s4x3.jpg.rend.hgtvcom.616.462.suffix/1462825767706.jpeg',
            }}
            style={styles.shopCover}
            blurRadius={5}
            imageStyle={styles.shopCoverView}>
            <View style={styles.shopNameView}>
              <H1 size={4} color={AppColors.white} numberOfLines={1}>
                Pasha Creez Bar
              </H1>
              <View style={styles.catogriesText}>
                <H4
                  fontFamily={FontFamily.SofiaSansSemiBold}
                  size={3}
                  numberOfLines={1}>
                  Categories:
                </H4>
                <H4
                  fontFamily={FontFamily.SofiaSansSemiBold}
                  color={AppColors.white}
                  size={3}
                  numberOfLines={1}>
                  Hotel Bar
                </H4>
              </View>
            </View>
            <View style={styles.priceView}>
              <H1
                fontFamily={FontFamily.SofiaSansSemiBold}
                size={4.5}
                color={AppColors.white}
                numberOfLines={1}>
                45
                <Text style={styles.currencyText}>SAR</Text>
              </H1>
            </View>
          </ImageBackground>
          <View style={styles.checklistView}>
            <View style={styles.listRow}>
              <H4
                fontFamily={FontFamily.SofiaSansSemiBold}
                size={3}
                numberOfLines={1}
                color={AppColors.brown}>
                {selectedLanguage?.Payment_Screen?.ServiceCharges_Label}
              </H4>
              <H4
                fontFamily={FontFamily.SofiaSansSemiBold}
                size={3.3}
                numberOfLines={1}
                color={AppColors.brown}>
                45
                <Text style={styles.currencyText}>SAR</Text>
              </H4>
            </View>
            <View style={styles.listRow}>
              <H4
                fontFamily={FontFamily.SofiaSansSemiBold}
                size={3}
                numberOfLines={1}
                color={AppColors.brown}>
                {selectedLanguage?.Payment_Screen?.DeliveryCharges}
              </H4>
              <H4
                fontFamily={FontFamily.SofiaSansSemiBold}
                size={3.3}
                numberOfLines={1}
                color={AppColors.brown}>
                45
                <Text style={styles.currencyText}>SAR</Text>
              </H4>
            </View>
            <View style={styles.lineStyle}></View>
            <View style={styles.listRow}>
              <H4
                fontFamily={FontFamily.SofiaSansSemiBold}
                size={3.4}
                numberOfLines={1}>
                {selectedLanguage?.Payment_Screen?.TotalAmount_Label}
              </H4>
              <H4
                fontFamily={FontFamily.SofiaSansSemiBold}
                size={3.3}
                numberOfLines={1}>
                70
                <Text style={styles.currencyText}>SAR</Text>
              </H4>
            </View>
          </View>
          <View style={styles.paymentText}>
            <H1 size={4.8}>
              {selectedLanguage?.Payment_Screen?.PaymentMethod_Heading}
            </H1>
          </View>
          <WalletCard price={'45'} />
          <View style={styles.iconButtonView}>
            {socialBtnData.map((item, index) => {
              return (
                <IconButton
                  buttonIcon={item.buttonIcon}
                  title={item.title}
                  active={active === index}
                  onPress={() => setActive(index)}
                />
              );
            })}
          </View>
          <View style={styles.codeView}>
            <Image
              source={Scaner}
              style={styles.iconStyle}
              resizeMode={'contain'}
            />
            <H2 size={4} color={AppColors.white}>
              {selectedLanguage?.Payment_Screen?.PaymentCodeDelivery_Button}
            </H2>
          </View>
          <Pressable
            style={styles.btnContainer}
            onPress={() =>
              navigation.navigate(ScreenNames.CONGRATULATIONSCREEN)
            }>
            <H1
              size={5}
              color={AppColors.white}
              fontFamily={FontFamily.SofiaSansSemiBold}>
              {selectedLanguage?.Payment_Screen?.PayNow_Button}
              45
              <Text style={styles.currencyText}>SAR</Text>
            </H1>
          </Pressable>
        </View>
      </ScreenWrapper>
    </LinearGradient>
  );
};

export default CheckoutScreen;
