import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {useSelector} from 'react-redux';
import {Header, OrderCard, TabHeader} from '~components';
import {H2} from '~components/text/text';
import {selectLanguage} from '~store/slices/language';
import {CommonStyles} from '~utils';
import AppColors from '~utils/app-colors';
import {CompletedOrder, OrderData} from '~utils/dummy-data';
import FontFamily from '~utils/font-family';
import styles from './styles';
interface ProductItemProps {
  items: string;
  price: string;
  shopName: string;
  orderNumber: string;
  date: string;
  time: string;
  source: string;
}

interface orderFlatlist {
  item: ProductItemProps;
  index?: string | number;
}

const YourOrder = ({navigation}: NativeStackScreenProps<any>) => {
  const selectedLanguage = useSelector(selectLanguage);
  const [selected, setSelected] = useState(0);

  const orderItemRender = ({item}: orderFlatlist) => {
    return (
      <OrderCard
        items={item.items}
        price={item.price}
        shopName={item.shopName}
        orderNumber={item.orderNumber}
        date={item.date}
        time={item.time}
        source={item.source}
        onPressDetail={() => {}}
      />
    );
  };
  const completedOrderItemRender = ({item}: orderFlatlist) => {
    return (
      <OrderCard
        items={item.items}
        price={item.price}
        shopName={item.shopName}
        orderNumber={item.orderNumber}
        date={item.date}
        time={item.time}
        source={item.source}
        onPressDetail={() => {}}
      />
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
        scrollType="scroll"
        scrollViewProps={{showsVerticalScrollIndicator: false}}
        statusBarColor={AppColors.white}
        barStyle="dark-content">
        <View style={styles.container}>
          <Header
            title={
              selectedLanguage?.YourOrder_Inprocess_Screen?.YourOrder_Heading
            }
            containerStyle={styles.headerContainerStyle}
            backView={styles.backView}
            onLeftIconPress={() => navigation.goBack()}
            onRightIconPress={() => {}}
          />
          <TabHeader
            TabsData={[
              {
                title:
                  selectedLanguage?.YourOrder_Inprocess_Screen?.InProcess_tab,
              },
              {
                title:
                  selectedLanguage?.YourOrder_Inprocess_Screen?.Completed_tab,
              },
              {
                title:
                  selectedLanguage?.YourOrder_Inprocess_Screen?.Cancelled_tab,
              },
            ]}
            onPress={index => setSelected(index)}
            selected={selected}
          />
          {selected === 0 ? (
            <FlatList
              data={OrderData}
              keyExtractor={(item, index) => index?.toString()}
              renderItem={orderItemRender}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.listView}
            />
          ) : selected === 1 ? (
            <FlatList
              data={CompletedOrder}
              keyExtractor={(item, index) => index?.toString()}
              renderItem={completedOrderItemRender}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.listView}
            />
          ) : (
            <View />
          )}
        </View>
      </ScreenWrapper>
    </LinearGradient>
  );
};

export default YourOrder;
