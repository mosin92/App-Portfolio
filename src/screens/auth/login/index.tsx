import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Image, TouchableOpacity, View, ImageSourcePropType, ImageStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {useDispatch, useSelector} from 'react-redux';
import {BlackLogo, FaceBookLogo, GoogleLogo} from '~assets/images';
import {Button, DropDown} from '~components';
import TextInput from '~components/text-input';
import {CustomText, H1, H2, H3} from '~components/text/text';
import {ScreenNames} from '~routes';
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
import {loginValidationSchema} from '~utils/validationSchema';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
interface MenuObjectProps {
  name: string;
  value: string;
}
interface LinearColorProps {
  colors: Array<string>;
}
interface LogoButtonProps {
  image: ImageSourcePropType;
  buttonLogoStyles?: ImageStyle;
}

const Login = ({navigation}: NativeStackScreenProps<any>) => {
  const selectedLanguage = useSelector(selectLanguage);
  const selectedLanguageValue = useSelector(selectedLanguageName);
  const dispatch = useDispatch();
  const {
    control,
    formState: {errors},
  } = useForm({
    mode: 'all',
    resolver: yupResolver(loginValidationSchema),
  });

  const [selectedLanguageState, setSelectedLanguageState] = useState<string>(
    selectedLanguageValue,
  );

  const LinearColor = ({colors}: LinearColorProps) => {
    return (
      <LinearGradient
        colors={colors}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.line}
      />
    );
  };
  const LogoButton = ({image, buttonLogoStyles = {}}: LogoButtonProps) => {
    return (
      <TouchableOpacity activeOpacity={0.8} style={styles.logoButtonStyles}>
        <Image
          source={image}
          resizeMode="contain"
          style={[styles.buttonLogo, buttonLogoStyles]}
        />
      </TouchableOpacity>
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
          <H1 containerStyles={styles.loginTextView}>
            {selectedLanguage?.Login_Screen?.Login_Heading}
          </H1>
          <TextInput
            LeftIcon={
              <AntDesign
                name="user"
                size={width(6)}
                color={AppColors.darkBlue}
              />
            }
            placeholder={selectedLanguage?.Login_Screen?.Username_PlaceHolder}
            formControl={control}
            fieldName={'email'}
            textInputStyle={styles.textInput}
            mainContainerStyles={styles.textInputContainer}
            errorMsg={errors?.email?.message}
          />
          <TextInput
            LeftIcon={
              <Feather name="lock" size={width(6)} color={AppColors.darkBlue} />
            }
            placeholder={selectedLanguage?.Login_Screen?.Password_PlaceHolder}
            formControl={control}
            fieldName={'password'}
            textInputStyle={styles.textInput}
            mainContainerStyles={styles.textInputContainer}
            errorMsg={errors?.password?.message}
          />
          <H3
            containerStyles={styles.forgetTextView}
            onPress={() => navigation.navigate(ScreenNames.FORGOT_PASSWORD)}>
            {selectedLanguage?.Login_Screen?.ForgotPassword_Button}
          </H3>
          <Button>{selectedLanguage?.Login_Screen?.Login_Heading}</Button>
          <View style={styles.orView}>
            <LinearColor colors={[AppColors.linearColorOne, AppColors.gray2]} />
            <H2
              size={5.5}
              fontFamily={FontFamily.SofiaSansExtraBold}
              containerStyles={styles.orTextView}>
              {selectedLanguage?.Login_Screen?.OR_Text}
            </H2>
            <LinearColor colors={[AppColors.gray2, AppColors.linearColorOne]} />
          </View>
          <View style={[CommonStyles.row, CommonStyles.width90]}>
            <LogoButton image={FaceBookLogo} />
            <LogoButton
              image={GoogleLogo}
              buttonLogoStyles={styles.buttonLogoGoogle}
            />
          </View>
          <CustomText
            color={AppColors.brown}
            size={5}
            containerStyles={styles.dontAccountView}
            fontFamily={FontFamily.SofiaSansRegular}>
            {selectedLanguage?.Login_Screen?.DoNotAcouuntLabel}
          </CustomText>
          <CustomText
            color={AppColors.blue}
            size={5}
            onPress={() => navigation.navigate(ScreenNames.COMPLETEPROFILE)}
            fontFamily={FontFamily.SofiaSansBold}>
            {selectedLanguage?.Login_Screen?.CreateAccountButton}
          </CustomText>
        </View>
      </ScreenWrapper>
    </LinearGradient>
  );
};

export default Login;
