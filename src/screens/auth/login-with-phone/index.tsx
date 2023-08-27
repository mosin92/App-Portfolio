import { yupResolver } from '@hookform/resolvers/yup';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Image, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { useDispatch, useSelector } from 'react-redux';
import { BlackLogo } from '~assets/images';
import { Button, DropDown, PhoneInput } from '~components';
import { CustomText, H3 } from '~components/text/text';
import { ScreenNames } from '~routes';
import {
  selectedLanguageName,
  selectLanguage,
  setAppLanguage
} from '~store/slices/language';
import { CommonStyles } from '~utils';
import AppColors from '~utils/app-colors';
import FontFamily from '~utils/font-family';
import { phoneNumberValidationSchema } from '~utils/validationSchema';
import styles from './styles';
interface MenuObjectProps {
  name: string;
  value: string;
}
const LoginWithPhone = ({ navigation }: NativeStackScreenProps<any>) => {
  const selectedLanguage = useSelector(selectLanguage);
  const selectedLanguageValue = useSelector(selectedLanguageName);
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(phoneNumberValidationSchema),
  });
  const [phoneCode, setPhoneCode] = useState("+966");
  const [phoneCodeText, setPhoneCodeText] = useState("SA");
  const [selectedLanguageState, setSelectedLanguageState] = useState<string>(
    selectedLanguageValue,
  );

  const sendCode = async (data: any) => {
    navigation.navigate(ScreenNames.OTPSCREEN, {
      phoneNumber: phoneCode + data?.phone
    })
    console.log(phoneCode + data?.phone);
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
          <View style={styles.headerView}>
            <DropDown
              initialValue={selectedLanguageState}
              getValue={(lan: MenuObjectProps) => {
                setSelectedLanguageState(lan?.name);
                dispatch(setAppLanguage(lan?.value));
              }}
              options={[
                { name: 'En', value: 'En' },
                { name: 'Ar', value: 'Ar' },
              ]}
            />
          </View>
          <Image
            source={BlackLogo}
            resizeMode="contain"
            style={styles.logoStyles}
          />
          <H3 size={5} containerStyles={styles.createTextView} textAlign='center'>
            {selectedLanguage?.LoginPhone_Screen?.number_Question}
          </H3>
          <H3 size={4} textAlign='center' color={AppColors.brown} containerStyles={styles.weatherText} >
            {selectedLanguage?.LoginPhone_Screen?.number_Headingn}
          </H3>
          <PhoneInput
            formControl={control}
            fieldName={'phone'}
            defaultCode={phoneCodeText}
            onChangeCountry={(i: any) => {
              setPhoneCode("+" + i?.callingCode[0]);
              setPhoneCodeText(i?.cca2);
            }}
            errorMsg={errors?.phone?.message}
          />
          <Button
            touchableOpacityProps={{ disabled: !isValid }}
            containerStyle={styles.nextBtn}
            onPress={handleSubmit(sendCode)}>
            {selectedLanguage?.LoginPhone_Screen?.Next_Button}
          </Button>
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
    </LinearGradient>
  );
};

export default LoginWithPhone;
