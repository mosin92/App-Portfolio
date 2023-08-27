import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ModalDropdown from 'react-native-modal-dropdown';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { useSelector } from 'react-redux';
import { Button, Header, MenuLabel } from '~components';
import { CustomText, H4 } from '~components/text/text';
import { selectLanguage } from '~store/slices/language';
import { CommonStyles, height, width } from '~utils';
import AppColors from '~utils/app-colors';
import { categories } from '~utils/dummy-data';
import FontFamily from '~utils/font-family';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Slider } from '@miblanchard/react-native-slider';

const FilterProductsScreen = ({ navigation }: NativeStackScreenProps<any>) => {
  const selectedLanguage = useSelector(selectLanguage);
  const [isCategoryDropdown, setIsCategoryDropdown] = useState<boolean>(false);
  const [isSubCategoryDropdown, setSubCategoryIsDropdown] =
    useState<boolean>(false);
  const [isProviderDropdown, setIsProviderDropdown] = useState<boolean>(false);
  const [locationRange, setLocationRange] = useState<Array<number>>([20]);
  const [priceRange, setPriceRange] = useState<Array<number>>([500, 2000]);
  return (
    <LinearGradient
      colors={[
        AppColors.linearColorOne,
        AppColors.linearColorTwo,
        AppColors.linearColorThree,
      ]}
      style={[CommonStyles.flex_1, { paddingTop: height(4) }]}>
      <Header
        onLeftIconPress={() => navigation.goBack()}
        title={selectedLanguage?.FilterCategories_Screen?.Filter_Title}
        onTextPress={() => { }}
        rightText={selectedLanguage?.FilterCategories_Screen?.Reset_Button}
      />
      <ScreenWrapper
        scrollType="scroll"
        statusBarColor={AppColors.primary}
        barStyle="dark-content">
        <View style={styles.container}>
          <CustomText
            containerStyles={styles.headerText}
            fontFamily={FontFamily.SofiaSansBold}
            color={AppColors.darkBlue}>
            {selectedLanguage?.Filter_Screen?.Categories_Heading}
          </CustomText>
          <ModalDropdown
            defaultValue={
              selectedLanguage?.Filter_Screen?.Categories_PlaceHolder
            }
            options={categories.map(i => i.title)}
            defaultTextStyle={styles.selectText}
            dropdownTextStyle={styles.selectText}
            textStyle={styles.selectText}
            dropdownStyle={[
              styles.dropDownStyles,
              { height: height(5) * categories.length },
            ]}
            renderRightComponent={() =>
              isCategoryDropdown ? (
                <Feather
                  name="chevron-up"
                  color={AppColors.darkBlue}
                  size={width(5)}
                />
              ) : (
                <Feather
                  name="chevron-down"
                  color={AppColors.darkBlue}
                  size={width(5)}
                />
              )
            }
            onDropdownWillShow={() => setIsCategoryDropdown(true)}
            onDropdownWillHide={() => setIsCategoryDropdown(false)}
            renderSeparator={() => <View style={styles.line} />}
            showsVerticalScrollIndicator={false}
            onSelect={(index, value) => {
              console.log(value, index);
            }}
            // @ts-ignore
            buttonAndRightComponentContainerStyle={styles.containerStyles}
          />
          <CustomText
            containerStyles={styles.headerText}
            fontFamily={FontFamily.SofiaSansBold}
            color={AppColors.darkBlue}>
            {selectedLanguage?.Filter_Screen?.Subcategory_Heading}
          </CustomText>
          <ModalDropdown
            defaultValue={
              selectedLanguage?.Filter_Screen?.Subcategory_PlaceHolder
            }
            options={categories.map(i => i.title)}
            defaultTextStyle={styles.selectText}
            dropdownTextStyle={styles.selectText}
            textStyle={styles.selectText}
            dropdownStyle={[
              styles.dropDownStyles,
              { height: height(5) * categories.length },
            ]}
            renderRightComponent={() =>
              isSubCategoryDropdown ? (
                <Feather
                  name="chevron-up"
                  color={AppColors.darkBlue}
                  size={width(5)}
                />
              ) : (
                <Feather
                  name="chevron-down"
                  color={AppColors.darkBlue}
                  size={width(5)}
                />
              )
            }
            onDropdownWillShow={() => setSubCategoryIsDropdown(true)}
            onDropdownWillHide={() => setSubCategoryIsDropdown(false)}
            renderSeparator={() => <View style={styles.line} />}
            showsVerticalScrollIndicator={false}
            onSelect={(index, value) => {
              console.log(value, index);
            }}
            // @ts-ignore
            buttonAndRightComponentContainerStyle={styles.containerStyles}
          />
          <CustomText
            containerStyles={styles.headerText}
            fontFamily={FontFamily.SofiaSansBold}
            color={AppColors.darkBlue}>
            {selectedLanguage?.Filter_Screen?.Location_Heading}
          </CustomText>
          <MenuLabel
            name={selectedLanguage?.Filter_Screen?.CurrentLocation_PlaceHolder}
            containerStyle={styles.contentContainerStyle}
            textStyles={styles.selectText}
            RightIcon={
              <MaterialIcons
                name="my-location"
                color={AppColors.darkBlue}
                size={width(5)}
              />
            }
          />
          <CustomText
            containerStyles={styles.headerText}
            fontFamily={FontFamily.SofiaSansBold}
            color={AppColors.darkBlue}>
            {selectedLanguage?.Filter_Screen?.ProvidersLabel}
          </CustomText>
          <ModalDropdown
            defaultValue={selectedLanguage?.Filter_Screen?.SelectProvidersLabel}
            options={['All', 'Online', 'Offline']}
            defaultTextStyle={styles.selectText}
            dropdownTextStyle={styles.selectText}
            textStyle={styles.selectText}
            dropdownStyle={[
              styles.dropDownStyles,
              { height: height(5) * ['All', 'Online', 'Offline'].length },
            ]}
            renderRightComponent={() =>
              isProviderDropdown ? (
                <Feather
                  name="chevron-up"
                  color={AppColors.darkBlue}
                  size={width(5)}
                />
              ) : (
                <Feather
                  name="chevron-down"
                  color={AppColors.darkBlue}
                  size={width(5)}
                />
              )
            }
            onDropdownWillShow={() => setIsProviderDropdown(true)}
            onDropdownWillHide={() => setIsProviderDropdown(false)}
            renderSeparator={() => <View style={styles.line} />}
            showsVerticalScrollIndicator={false}
            onSelect={(index, value) => {
              console.log(value, index);
            }}
            // @ts-ignore
            buttonAndRightComponentContainerStyle={styles.containerStyles}
          />
          <CustomText
            containerStyles={styles.headerText}
            fontFamily={FontFamily.SofiaSansBold}
            color={AppColors.darkBlue}>
            {selectedLanguage?.Filter_Screen?.LocationRange_Heading}
          </CustomText>
          <View style={styles.sliderView}>
            <Slider
              minimumValue={0}
              maximumValue={100}
              trackStyle={styles.sliderStyles}
              value={locationRange}
              onValueChange={(number: any) => {
                setLocationRange(number);
              }}
              thumbStyle={styles.thumbStyles}
              renderAboveThumbComponent={() => (
                <View style={styles.aboveThumbStyles}>
                  <Foundation
                    name="arrow-down"
                    color={AppColors.darkBlue}
                    size={width(5)}
                  />
                </View>
              )}
            />
          </View>
          <View style={styles.row}>
            <MenuLabel
              textStyles={styles.selectTextSlider}
              name={locationRange[0]?.toFixed(0)}
              RightIcon={
                <H4
                  color={AppColors.brown}
                  fontFamily={FontFamily.SofiaSansLight}>
                  {selectedLanguage?.Filter_Screen?.km}
                </H4>
              }
            />
          </View>
          <CustomText
            containerStyles={styles.headerText}
            fontFamily={FontFamily.SofiaSansBold}
            color={AppColors.darkBlue}>
            {selectedLanguage?.Filter_Screen?.PriceRange_Heading}
          </CustomText>
          <View style={styles.sliderView}>
            <Slider
              minimumValue={300}
              maximumValue={3000}
              trackStyle={styles.sliderStyles}
              value={priceRange}
              onValueChange={(number: any) => {
                setPriceRange(number);
              }}
              thumbStyle={styles.thumbStyles}
              renderAboveThumbComponent={() => (
                <View style={styles.aboveThumbStyles}>
                  <Foundation
                    name="arrow-down"
                    color={AppColors.darkBlue}
                    size={width(5)}
                  />
                </View>
              )}
            />
          </View>
          <View style={styles.row}>
            <MenuLabel
              textStyles={styles.selectTextSlider}
              name={priceRange[0]?.toFixed(0)}
              RightIcon={
                <H4
                  color={AppColors.brown}
                  fontFamily={FontFamily.SofiaSansLight}>
                  {selectedLanguage?.Filter_Screen?.min}
                </H4>
              }
            />
            <MenuLabel
              textStyles={styles.selectTextSlider}
              name={priceRange[1]?.toFixed(0)}
              RightIcon={
                <H4
                  color={AppColors.brown}
                  fontFamily={FontFamily.SofiaSansLight}>
                  {selectedLanguage?.Filter_Screen?.max}
                </H4>
              }
            />
          </View>
          <Button
            containerStyle={styles.applyBtn}
            onPress={() => navigation.goBack()}>
            {selectedLanguage?.Filter_Screen?.Apply_Button}
          </Button>
        </View>
      </ScreenWrapper>
    </LinearGradient>
  );
};

export default FilterProductsScreen;
