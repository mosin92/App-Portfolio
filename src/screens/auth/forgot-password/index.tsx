import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Image, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {useDispatch, useSelector} from 'react-redux';
import {BlackLogo} from '~assets/images';
import {Button, DropDown} from '~components';
import TextInput from '~components/text-input';
import {CustomText, H1} from '~components/text/text';
import {
  selectedLanguageName,
  selectLanguage,
  setAppLanguage,
} from '~store/slices/language';
import {CommonStyles, width} from '~utils';
import AppColors from '~utils/app-colors';
import FontFamily from '~utils/font-family';
import styles from './styles';
import {yupResolver} from '@hookform/resolvers/yup';
import {forgetValidationSchema} from '~utils/validationSchema';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
interface MenuObjectProps {
  name: string;
  value: string;
}
const ForgotPassword = ({navigation}: NativeStackScreenProps<any>) => {
  const selectedLanguage = useSelector(selectLanguage);
  const selectedLanguageValue = useSelector(selectedLanguageName);
  const dispatch = useDispatch();
  const {
    control,
    formState: {errors},
  } = useForm({
    mode: 'all',
    resolver: yupResolver(forgetValidationSchema),
  });

  const [selectedLanguageState, setSelectedLanguageState] = useState<string>(
    selectedLanguageValue,
  );

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
            <DropDown
              initialValue={selectedLanguageState}
              getValue={(lan: MenuObjectProps) => {
                setSelectedLanguageState(lan?.name);
                dispatch(setAppLanguage(lan?.value));
              }}
              options={[
                {name: 'En', value: 'En'},
                {name: 'Ar', value: 'Ar'},
              ]}
            />
          </View>
          <H1 containerStyles={styles.forgetPasswordTextView}>
            {selectedLanguage?.ForgotPassword_screen?.Forgot_Heading} {`\n`}
            {selectedLanguage?.ForgotPassword_screen?.Password_Heading}
          </H1>
          <TextInput
            LeftIcon={
              <MaterialCommunityIcons
                name="email-outline"
                size={width(6)}
                color={AppColors.darkBlue}
              />
            }
            placeholder={
              selectedLanguage?.ForgotPassword_screen?.Email_PlaceHolder
            }
            formControl={control}
            fieldName={'email'}
            textInputStyle={styles.textInput}
            mainContainerStyles={styles.textInputContainer}
            errorMsg={errors?.email?.message}
          />
          <Button>
            {selectedLanguage?.ForgotPassword_screen?.Send_Button}
          </Button>
        </View>
        <CustomText
          color={AppColors.black}
          size={4.5}
          containerStyles={styles.backToLoginTextView}
          fontFamily={FontFamily.SofiaSansBold}
          onPress={() => navigation.goBack()}>
          {selectedLanguage?.ForgotPassword_screen?.BackToLogin_Button}
        </CustomText>
      </ScreenWrapper>
    </LinearGradient>
  );
};

export default ForgotPassword;
