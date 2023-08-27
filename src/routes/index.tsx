import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {
  CompleteProfile,
  ForgotPasswordScreen,
  LoginWithPhone,
  OtpScreen,
  SocialLogin,
} from '../screens/auth';
import ScreenNames from './routes';
import SplashScreen from 'react-native-splash-screen';
import {useSelector} from 'react-redux';
import {selectIsLoggedIn} from '~store/slices/user';
import {
  AvailableNowProducts,
  BuyerHome,
  CheckoutScreen,
  CongratulationScreen,
  FeaturedProduct,
  FilterProductsScreen,
  LatestProducts,
  MyCartScreen,
  NearMeProduct,
  OnlineProvidersScreen,
  OopsScreen,
  PaymentScreen,
  StoreDetailScreen,
  SubCategoriesScreen,
  TopRatedProducts,
  YourOrder,
  OrderQrCode,
  CurrentOrder,
} from '~screens/buyer-app';

const Stack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef();
const Routes = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      {!isLoggedIn ? (
        <Stack.Navigator
          screenOptions={{
            animation: 'slide_from_right',
            headerShown: false,
          }}
          initialRouteName={ScreenNames.CURRENTORDER}>
          {/* my changes */}
          <Stack.Screen
            name={ScreenNames.ORDERQRCODE}
            component={OrderQrCode}
          />

          <Stack.Screen
            name={ScreenNames.CURRENTORDER}
            component={CurrentOrder}
          />
          {/* *****  */}
          <Stack.Screen
            name={ScreenNames.LOGINWITHPHONE}
            component={LoginWithPhone}
          />
          <Stack.Screen name={ScreenNames.OTPSCREEN} component={OtpScreen} />
          <Stack.Screen
            name={ScreenNames.SOCIALLOGIN}
            component={SocialLogin}
          />
          <Stack.Screen
            name={ScreenNames.FORGOT_PASSWORD}
            component={ForgotPasswordScreen}
          />
          <Stack.Screen
            name={ScreenNames.COMPLETEPROFILE}
            component={CompleteProfile}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            animation: 'simple_push',
            headerShown: false,
          }}
          initialRouteName={ScreenNames.HOME}>
          <Stack.Screen name={ScreenNames.HOME} component={BuyerHome} />
          <Stack.Screen
            name={ScreenNames.SUBCATEGORIESSCREEN}
            component={SubCategoriesScreen}
          />
          <Stack.Screen
            name={ScreenNames.AVAILABLEPRODUCTS}
            component={AvailableNowProducts}
          />
          <Stack.Screen
            name={ScreenNames.ONLINEPROVIDERSSCREEN}
            component={OnlineProvidersScreen}
          />
          <Stack.Screen
            name={ScreenNames.FEATUREDPRODUCT}
            component={FeaturedProduct}
          />
          <Stack.Screen
            name={ScreenNames.NEARMEPRODUCTS}
            component={NearMeProduct}
          />
          <Stack.Screen
            name={ScreenNames.TOPRATEDPRODUCTS}
            component={TopRatedProducts}
          />
          <Stack.Screen
            name={ScreenNames.LATESTPRODUCTS}
            component={LatestProducts}
          />
          <Stack.Screen
            name={ScreenNames.FILTERPRODUCTSSCREEN}
            component={FilterProductsScreen}
          />
          <Stack.Screen
            name={ScreenNames.MYCARTSCREEN}
            component={MyCartScreen}
          />
          <Stack.Screen
            name={ScreenNames.STOREDETAILSCREEN}
            component={StoreDetailScreen}
          />
          <Stack.Screen
            name={ScreenNames.PAYMENTSCREEN}
            component={PaymentScreen}
          />
          <Stack.Screen
            name={ScreenNames.CHECKOUTSCREEN}
            component={CheckoutScreen}
          />
          <Stack.Screen
            name={ScreenNames.CONGRATULATIONSCREEN}
            component={CongratulationScreen}
          />
          <Stack.Screen name={ScreenNames.OOPSSCREEN} component={OopsScreen} />
          <Stack.Screen name={ScreenNames.YOURORDER} component={YourOrder} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
export default Routes;
export {default as ScreenNames} from './routes';
