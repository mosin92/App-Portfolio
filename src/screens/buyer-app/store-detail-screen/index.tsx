import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { Fragment, useRef, useState } from 'react';
import { FlatList, Image, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { useSelector } from 'react-redux';
import { Header, StoreProfileComponent } from '~components';
import { selectLanguage } from '~store/slices/language';
import { CommonStyles } from '~utils';
import AppColors from '~utils/app-colors';
import { providers } from '~utils/dummy-data';
import styles from './styles';
import TabBarView from './tab-view';
interface SwiperImagesProps {
  item?: string;
  index?: string | number;
}
const StoreDetailScreen = ({ navigation }: NativeStackScreenProps<any>) => {
  const selectedLanguage = useSelector(selectLanguage);
  const [imageIndex, setImageIndex] = useState<number>(0);
  const swiperRef = useRef<FlatList>(null);
  const onViewChangeRef = useRef(({ changed }: { changed: any }) => {
    if (changed[0].isViewable) {
      setImageIndex(changed[0].index);
    }
  });
  const renderImages = ({ item, index }: SwiperImagesProps) => {
    return (
      <Image
        key={index}
        source={{
          uri: item,
        }}
        style={styles.productImageBackgroundStyles}
      />
    );
  };
  return (
    <ScreenWrapper
      scrollType="scroll"
      scrollViewProps={{ bounces: false, showsVerticalScrollIndicator: false }}
      statusBarColor={AppColors.primary}
      barStyle="dark-content">
      <Header
        onLeftIconPress={() => navigation.goBack()}
        title={providers[0]?.providerName}
        rightText={selectedLanguage?.FilterCategories_Screen?.Reset_Button}
        onSharePress={() => { }}
        onMenuPress={() => { }}
      />
      <View style={styles.container}>
        <View style={CommonStyles.flex_1}>
          <FlatList
            data={providers[0]?.coverImages}
            horizontal
            renderItem={renderImages}
            ref={swiperRef}
            bounces={false}
            viewabilityConfig={{ viewAreaCoveragePercentThreshold: 90 }}
            onViewableItemsChanged={onViewChangeRef.current}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            snapToAlignment="center"
          />
          <View style={styles.dotsView}>
            {providers[0]?.coverImages?.map((i: any, n: any) => {
              return (
                <View
                  key={n}
                  style={[
                    imageIndex === n ? styles.activeDotStyles : styles.dot,
                  ]}
                />
              );
            })}
          </View>
        </View>
        <StoreProfileComponent
          storeImage={providers[0].providerLogo}
          isFav={false}
          storeAddress={providers[0]?.address}
          storeName={providers[0]?.providerName}
          storeRating={providers[0].rating}
        />
        <LinearGradient
          colors={[
            AppColors.linearColorOne,
            AppColors.linearColorTwo,
            AppColors.linearColorThree,
          ]}
          style={styles.tabBarView}>
          <TabBarView
            storeAutherProfileDetails={{
              date: 'March 2019',
              image:
                'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
              name: 'Fatima Mehmood',
              type: 'Private',
              address: 'Street 21, Times Square, New York City, USA',
              email: 'baetoti@baetoti.com',
              link: 'bartoti.com',
              phone: '+92345656554',
              instaImages: providers[0].coverImages
            }}
            tags={providers[0]?.tags}
            storeDescription={providers[0]?.description}
          />
        </LinearGradient>
      </View>
    </ScreenWrapper>
  );
};

export default StoreDetailScreen;
