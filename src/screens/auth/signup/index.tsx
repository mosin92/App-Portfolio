import {yupResolver} from '@hookform/resolvers/yup';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Image, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ModalDropdown from 'react-native-modal-dropdown';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {BlackLogo, Kid} from '~assets/images';
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
import {userSignUpValidationSchema} from '~utils/validationSchema';
import styles from './styles';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import dayjs from 'dayjs';
interface MenuObjectProps {
  name: string;
  value: string;
}

const SignUp = ({navigation}: NativeStackScreenProps<any>) => {
  const selectedLanguage = useSelector(selectLanguage);
  const selectedLanguageValue = useSelector(selectedLanguageName);
  const dispatch = useDispatch();
  const {
    control,
    formState: {errors},
  } = useForm({
    mode: 'all',
    resolver: yupResolver(userSignUpValidationSchema),
  });

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [date, setDate] = useState(new Date());
  const [selectedLanguageState, setSelectedLanguageState] = useState<string>(
    selectedLanguageValue,
  );
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (d: any) => {
    setDate(d);
    setSelectedDate(dayjs(d).format('DD/MM/YY'));
    hideDatePicker();
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
          <H1 size={9} containerStyles={styles.createTextView}>
            {selectedLanguage?.CreateAccount_Screen?.CreateAccount_Heading}
          </H1>
          <TextInput
            LeftIcon={
              <AntDesign
                name="user"
                size={width(6)}
                color={AppColors.darkBlue}
              />
            }
            placeholder={
              selectedLanguage?.CreateAccount_Screen?.Username_PlaceHolder
            }
            formControl={control}
            fieldName={'userName'}
            textInputStyle={styles.textInput}
            mainContainerStyles={styles.textInputContainer}
            errorMsg={errors?.userName?.message}
          />
          <TextInput
            LeftIcon={
              <MaterialCommunityIcons
                name="email-outline"
                size={width(6)}
                color={AppColors.darkBlue}
              />
            }
            placeholder={
              selectedLanguage?.CreateAccount_Screen?.Email_PlaceHolder
            }
            formControl={control}
            fieldName={'dob'}
            textInputStyle={styles.textInput}
            mainContainerStyles={styles.textInputContainer}
          />
          <View style={[CommonStyles.row, CommonStyles.width90, styles.row]}>
            <TextInput
              LeftIcon={
                <Image
                  source={Kid}
                  resizeMode="contain"
                  style={styles.kidIcon}
                />
              }
              placeholder={
                selectedLanguage?.CreateAccount_Screen?.Dob_PlaceHolder
              }
              formControl={control}
              fieldName={'email'}
              containerStyle={styles.kidInputContainerStyles}
              textInputStyle={styles.kidInputStyles}
              errorStyles={styles.kidInputStyles}
              errorMsg={errors?.email?.message}
              editable={false}
              value={selectedDate}
              onPress={() => setDatePickerVisibility(true)}
            />
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              date={date}
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              minimumDate={new Date()}
            />
            {/* <MenuLabel name={'Gender'} /> */}
            <ModalDropdown
              defaultValue={
                selectedLanguage?.CreateAccount_Screen?.Gender_PlaceHolder
              }
              options={['Male', 'Female']}
              defaultTextStyle={styles.genderSelectText}
              dropdownTextStyle={styles.genderSelectText}
              textStyle={styles.genderSelectText}
              dropdownStyle={styles.dropDownStyles}
              renderRightComponent={() => (
                <Feather
                  name="chevron-down"
                  color={AppColors.black}
                  size={width(5)}
                />
              )}
              renderSeparator={() => <View style={styles.line} />}
              onSelect={(index, value) => {
                console.log(value, index);
              }}
              // @ts-ignore
              buttonAndRightComponentContainerStyle={
                styles.genderDropDownContainerStyles
              }
            />
          </View>
          <TextInput
            LeftIcon={
              <Feather name="lock" size={width(6)} color={AppColors.darkBlue} />
            }
            placeholder={
              selectedLanguage?.CreateAccount_Screen?.CreatePassword_PlaceHolder
            }
            formControl={control}
            fieldName={'password'}
            textInputStyle={styles.textInput}
            mainContainerStyles={styles.textInputContainer}
            errorMsg={errors?.password?.message}
          />
          <TextInput
            LeftIcon={
              <Feather name="lock" size={width(6)} color={AppColors.darkBlue} />
            }
            placeholder={
              selectedLanguage?.CreateAccount_Screen
                ?.ConfirmPassword_PlaceHolder
            }
            formControl={control}
            fieldName={'confirmPassword'}
            textInputStyle={styles.textInput}
            mainContainerStyles={styles.textInputContainer}
            errorMsg={errors?.confirmPassword?.message}
          />
          <CustomText
            color={AppColors.darkBlue}
            size={2.5}
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
          <Button>
            {selectedLanguage?.CreateAccount_Screen?.CreateAccountButton}
          </Button>

          <CustomText
            color={AppColors.brown}
            size={5}
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

export default SignUp;
