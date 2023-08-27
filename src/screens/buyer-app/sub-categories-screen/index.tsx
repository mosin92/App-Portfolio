import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { CategoryComponent, Header } from '~components';
import { CommonStyles } from '~utils';
import AppColors from '~utils/app-colors';
import { categories } from '~utils/dummy-data';
import FontFamily from '~utils/font-family';
import styles from './styles';

interface CategoryItemProps {
  title: string;
  image: string;
}
interface CategoryFlatlist {
  item: CategoryItemProps;
  index: string | number;
}

const SubCategoriesScreen = ({ navigation, route }: NativeStackScreenProps<any>) => {

  const renderCategories = ({ item }: CategoryFlatlist) => {
    return <CategoryComponent
      colors={[
        AppColors.darkBlue + '00',
        AppColors.darkBlue + '30',
        AppColors.darkBlue,
      ]}
      image={item.image} title={item.title}
      categoryBackgroundStyles={styles.categoryBackgroundStyles}
      categoryBackgroundImageStyles={styles.categoryBackgroundImageStyles}
      categoryBackgroundViewStyles={styles.categoryBackgroundViewStyles}
      titleFont={FontFamily.SofiaSansSemiBold} />;
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
            title={route?.params?.header}
          />
          <FlatList
            data={categories}
            keyExtractor={(item, index) => index?.toString()}
            numColumns={2}
            columnWrapperStyle={styles.columnWrapperStyle}
            renderItem={renderCategories}
            style={styles.categoryFlatlistStyles}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.categoryContentContainerStyle}
          />
        </View>
      </ScreenWrapper>
    </LinearGradient>
  );
};

export default SubCategoriesScreen;
