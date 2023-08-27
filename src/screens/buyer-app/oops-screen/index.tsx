import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Image, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {useSelector} from 'react-redux';
import {Failed} from '~assets/images';
import {Button} from '~components';
import {H1, H2, H4} from '~components/text/text';
import {ScreenNames} from '~routes';
import {selectLanguage} from '~store/slices/language';
import {CommonStyles} from '~utils';
import AppColors from '~utils/app-colors';
import FontFamily from '~utils/font-family';
import styles from './styles';

const OopsScreen = ({navigation}: NativeStackScreenProps<any>) => {
  const selectedLanguage = useSelector(selectLanguage);

  return (
    <LinearGradient
      colors={[
        AppColors.linearColorOne,
        AppColors.linearColorTwo,
        AppColors.linearColorThree,
      ]}
      style={CommonStyles.flex_1}>
      <ScreenWrapper statusBarColor={AppColors.primary} barStyle="dark-content">
        <View style={styles.container}>
          <Image
            source={Failed}
            style={styles.successImage}
            resizeMode={'contain'}
          />
          <View style={styles.textView}>
            <H1 size={5.9}>{selectedLanguage?.Opps_Screen?.opps_Heading}</H1>
            <H4
              color={AppColors.brown}
              textStyles={styles.noteText}
              size={3.5}
              textAlign={'center'}>
              {selectedLanguage?.Opps_Screen?.Note}
            </H4>
          </View>
          <Button
            onPress={() => navigation.navigate(ScreenNames.YOURORDER)}
            containerStyle={styles.btnContainer}>
            {selectedLanguage?.Opps_Screen?.TryAgain_Button}
          </Button>
          <H4 color={AppColors.brown} textStyles={styles.noteText} size={3.7}>
            {selectedLanguage?.Opps_Screen?.NotNow_Button}
          </H4>
        </View>
      </ScreenWrapper>
    </LinearGradient>
  );
};

export default OopsScreen;
