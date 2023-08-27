import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { useSelector } from 'react-redux';
import { AppleLogo, FBLogo, GmailLogo, TwitterLogo } from '~assets/images';
import { CustomText, H2, H3 } from '~components/text/text';
import { ScreenNames } from '~routes';
import {
  selectLanguage
} from '~store/slices/language';
import { CommonStyles } from '~utils';
import AppColors from '~utils/app-colors';
import FontFamily from '~utils/font-family';
import styles from './styles';
interface SocialButtonProps {
  title: string;
  image: ImageSourcePropType;
  onPress?: () => void;
}
const SocialLogin = ({ navigation }: NativeStackScreenProps<any>) => {
  const selectedLanguage = useSelector(selectLanguage);
  const SocialButton = ({ title, image, onPress }: SocialButtonProps) => {
    return (
      <TouchableOpacity style={styles.socialButton} activeOpacity={.9} onPress={onPress}>
        <Image source={image} resizeMode="contain" style={styles.logoStyles} />
        <H3 size={4} fontFamily={FontFamily.SofiaSansRegular}>{title}</H3>
      </TouchableOpacity>
    )
  }
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
          <H3 size={5} fontFamily={FontFamily.SofiaSansExtraBold} containerStyles={styles.createTextView} textAlign='center'>
            {selectedLanguage?.Social_Login_Screen?.Welcome}
          </H3>
          <H3 size={4} textAlign='center' color={AppColors.brown} containerStyles={styles.weatherText} >
            {selectedLanguage?.Social_Login_Screen?.Whether_You}
          </H3>
          <SocialButton image={GmailLogo} title={selectedLanguage?.Social_Login_Screen?.Continue_Google} />
          <SocialButton image={FBLogo} title={selectedLanguage?.Social_Login_Screen?.Continue_Facbook} />
          <SocialButton image={AppleLogo} title={selectedLanguage?.Social_Login_Screen?.Continue_Apple} />
          <SocialButton image={TwitterLogo} title={selectedLanguage?.Social_Login_Screen?.Continue_Twitter} />
          <CustomText
            color={AppColors.darkBlue}
            size={2.8}
            containerStyles={styles.byClickingText}
            fontFamily={FontFamily.SofiaSansSemiBold}>
            {selectedLanguage?.CreateAccount_Screen?.ByclickingSignup_Text}
            <Text style={styles.privacyText}>
              {selectedLanguage?.CreateAccount_Screen?.Termsofuse_Text}
            </Text>
            {selectedLanguage?.CreateAccount_Screen?.comma}
            <Text style={styles.privacyText}>
              {selectedLanguage?.CreateAccount_Screen?.PrivacyPolicy_Text}
            </Text>
            {selectedLanguage?.CreateAccount_Screen?.youMayReceive_Text}
          </CustomText>
        </View>
      </ScreenWrapper>
      <H2 onPress={() => navigation.navigate(ScreenNames.COMPLETEPROFILE)} color={AppColors.black} fontFamily={FontFamily.SofiaSansBold} containerStyles={styles.footerButton}>{selectedLanguage?.Social_Login_Screen?.Add_Manual}</H2>
    </LinearGradient>
  );
};

export default SocialLogin;
