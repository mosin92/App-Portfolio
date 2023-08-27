import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { useSelector } from 'react-redux';
import {  Header, OnlineProviderComponent } from '~components';
import { selectLanguage } from '~store/slices/language';
import { CommonStyles } from '~utils';
import AppColors from '~utils/app-colors';
import {  providers } from '~utils/dummy-data';
import styles from './styles';

interface ProviderItemProps {
  providerLogo: string;
  providerName: string;
  productCategory: string;
  rating?:number;
}
interface ProviderFlatlist {
  item: ProviderItemProps;
  index: string | number;
}

const OnlineProvidersScreen = ({ navigation }: NativeStackScreenProps<any>) => {
  const selectedLanguage = useSelector(selectLanguage);
  const renderProviders = ({ item }: ProviderFlatlist) => {
    return <OnlineProviderComponent
      providerLogo={item.providerLogo}
      providerName={item.providerName}
      productCategory={item.productCategory}
      containerStyle={styles.containerStyles}
      logoStyles={styles.logoStyles}
      providerNameTextStyles={styles.providerNameTextStyles}
      productCategoryTextStyles={styles.productCategoryTextStyles}
      productCategoryViewStyles={styles.productCategoryViewStyles}
      rating={3}
    />;
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
        statusBarColor={AppColors.primary}
        barStyle="dark-content">
        <View style={styles.container}>
          <Header
            onLeftIconPress={() => navigation.goBack()}
            title={selectedLanguage?.OnlineProvider_screen?.OnlineProviders_Title}
          />
          <FlatList
            data={providers}
            keyExtractor={(item, index) => index?.toString()}
            numColumns={2}
            columnWrapperStyle={styles.columnWrapperStyle}
            renderItem={renderProviders}
            style={styles.categoryFlatlistStyles}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.categoryContentContainerStyle}
          />
        </View>
      </ScreenWrapper>
    </LinearGradient>
  );
};

export default OnlineProvidersScreen;
