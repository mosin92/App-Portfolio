import { NativeStackScreenProps } from '@react-navigation/native-stack';
import OTPInputView from "@twotalltotems/react-native-otp-input";
import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { useSelector } from 'react-redux';
import { BlackLogo } from '~assets/images';
import { Button } from '~components';
import { CustomText, H1, H3, H4 } from '~components/text/text';
import { useTimeCounter } from '~hooks/useTimeCounter';
import { ScreenNames } from '~routes';
import {
  selectLanguage
} from '~store/slices/language';
import { CommonStyles } from '~utils';
import AppColors from '~utils/app-colors';
import FontFamily from '~utils/font-family';
import styles from './styles';

const OtpScreen = ({ navigation, route }: NativeStackScreenProps<any>) => {
  const selectedLanguage = useSelector(selectLanguage);
  const { isExpired, startInterval, time, stopInterval } = useTimeCounter(15)
  console.log('sss');

  useEffect(() => {
    startInterval()
    return () => stopInterval()
  }, [])

  return (
    <LinearGradient
      colors={[
        AppColors.linearColorOne,
        AppColors.linearColorTwo,
        AppColors.linearColorThree,
      ]}
      style={CommonStyles.flex_1}>
      <ScreenWrapper
        scrollType="keyboard"
        statusBarColor={AppColors.primary}
        barStyle="dark-content">
        <View style={styles.container}>
          <View style={styles.headerView}>
            <Image
              source={BlackLogo}
              resizeMode="contain"
              style={styles.logoStyles}
            />
          </View>
          <H1 size={9} containerStyles={styles.createTextView}>
            {selectedLanguage?.PhoneVerification_Screen?.Phone_Heading}{`\n`}{selectedLanguage?.PhoneVerification_Screen?.Verification_Heading}
          </H1>
          <H4 fontFamily={FontFamily.SofiaSansLight} containerStyles={styles.enterOtpText}>
            {selectedLanguage?.PhoneVerification_Screen?.EnterOtp_Label}
          </H4>
          <H3 fontFamily={FontFamily.SofiaSansMedium} size={4} containerStyles={styles.enterOtpText}>
            {route?.params?.phoneNumber?.slice(-(route?.params?.phoneNumber?.length), -4)}XXXX
          </H3>
          <OTPInputView
            style={styles.otpContainer}
            pinCount={4}
            placeholderTextColor={AppColors.brown}
            placeholderCharacter={'*'}
            onCodeChanged={(code) => {
              console.log(code);
            }}
            autoFocusOnLoad={false}
            codeInputFieldStyle={styles.inputStyle}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
          // onCodeFilled={(code) => onCodeFilled(code)}
          />
          <H3 size={4} fontFamily={FontFamily.SofiaSansLight} containerStyles={styles.otpExpiredInText}>
            {selectedLanguage?.PhoneVerification_Screen?.OtpExpire_Label} <Text style={styles.timeText}>{time}</Text>
          </H3>
          <H3
            onPress={() => {
              if (isExpired) {
                startInterval()
              }
            }}
            containerStyles={styles.resendButton}
            color={isExpired ? AppColors.darkBlue : AppColors.brown}>
            {selectedLanguage?.PhoneVerification_Screen?.Resend_Button}
          </H3>
          <Button onPress={() => navigation.navigate(ScreenNames.SOCIALLOGIN)}>
            {selectedLanguage?.PhoneVerification_Screen?.VerifyNumber_Button}
          </Button>
          <CustomText
            color={AppColors.brown}
            size={4.5}
            containerStyles={styles.alreadyHaveAnAccountView}
            fontFamily={FontFamily.SofiaSansRegular}>
            {selectedLanguage?.CreateAccount_Screen?.AlreadyAccountLabel}
          </CustomText>
          <CustomText
            color={AppColors.blue}
            size={5}
            onPress={() => navigation.goBack()}
            fontFamily={FontFamily.SofiaSansBold}>
            {selectedLanguage?.CreateAccount_Screen?.Login_Button}
          </CustomText>
        </View>
      </ScreenWrapper>
    </LinearGradient>
  );
};

export default OtpScreen;
