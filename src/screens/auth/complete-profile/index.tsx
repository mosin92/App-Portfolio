import {yupResolver} from '@hookform/resolvers/yup';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import dayjs from 'dayjs';
import React, {useRef, useState} from 'react';
import {useForm} from 'react-hook-form';
import {Image, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import ModalDropdown from 'react-native-modal-dropdown';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {BlackLogo, Kid} from '~assets/images';
import {Button, DropDown} from '~components';
import TextInput from '~components/text-input';
import {H1} from '~components/text/text';
import {
  selectedLanguageName,
  selectLanguage,
  setAppLanguage,
} from '~store/slices/language';
import {CommonStyles, width} from '~utils';
import AppColors from '~utils/app-colors';
import {userSignUpValidationSchema} from '~utils/validationSchema';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FilePicker from '~components/file-picker';
import { setIsLoggedIn } from '~store/slices/user';
interface MenuObjectProps {
  name: string;
  value: string;
}

const CompleteProfile = ({}: NativeStackScreenProps<any>) => {
  const selectedLanguage = useSelector(selectLanguage);
  const selectedLanguageValue = useSelector(selectedLanguageName);
  const dispatch = useDispatch();
  const profileRef = useRef<any>(null);
  const {
    control,
    formState: {errors},
  } = useForm({
    mode: 'all',
    resolver: yupResolver(userSignUpValidationSchema),
  });

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [profileImage, setProfileImage] = useState<string>('');
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
            {selectedLanguage?.CreateAccount_Screen?.CompleteProfile}
          </H1>
          <TouchableOpacity
            style={styles.circle}
            activeOpacity={0.95}
            onPress={() => profileRef?.current?.show()}>
            {profileImage !== '' ? (
              <Image
                source={{uri: profileImage}}
                resizeMode="cover"
                style={styles.profileImageStyles}
              />
            ) : (
              <Ionicons
                name="person-outline"
                size={width(18)}
                color={AppColors.darkBlue}
              />
            )}
            <View style={styles.pencilCircle}>
              <MaterialIcons
                name="edit"
                size={width(5)}
                color={AppColors.darkBlue}
              />
            </View>
          </TouchableOpacity>
          <FilePicker
            ref={profileRef}
            onFilesSelected={(img: any) => {
              setProfileImage(img?.path);
            }}
          />
          <TextInput
            LeftIcon={
              <AntDesign
                name="user"
                size={width(6)}
                color={AppColors.darkBlue}
              />
            }
            placeholder={selectedLanguage?.CreateAccount_Screen?.FirstName}
            formControl={control}
            fieldName={'firstName'}
            textInputStyle={styles.textInput}
            mainContainerStyles={styles.textInputContainer}
            errorMsg={errors?.firstName?.message}
          />
          <TextInput
            LeftIcon={
              <AntDesign
                name="user"
                size={width(6)}
                color={AppColors.darkBlue}
              />
            }
            placeholder={selectedLanguage?.CreateAccount_Screen?.FirstName}
            formControl={control}
            fieldName={'lastName'}
            textInputStyle={styles.textInput}
            mainContainerStyles={styles.textInputContainer}
            errorMsg={errors?.lastName?.message}
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
              onPressIn={() => setDatePickerVisibility(true)}
              onPress={() => setDatePickerVisibility(true)}
              onLeftIconPress={() => setDatePickerVisibility(true)}
            />
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              date={date}
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              maximumDate={new Date()}
            />
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
              animated={false}
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

          <Button onPress={()=>dispatch(setIsLoggedIn(true))}>
            {selectedLanguage?.CreateAccount_Screen?.CompleteProfile}
          </Button>
        </View>
      </ScreenWrapper>
    </LinearGradient>
  );
};

export default CompleteProfile;
