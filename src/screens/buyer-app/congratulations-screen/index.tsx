import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Image, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {useSelector} from 'react-redux';
import {Success} from '~assets/images';
import {Button} from '~components';
import {H1, H2, H4} from '~components/text/text';
import {ScreenNames} from '~routes';
import {selectLanguage} from '~store/slices/language';
import {CommonStyles, height} from '~utils';
import AppColors from '~utils/app-colors';
import FontFamily from '~utils/font-family';
import styles from './styles';

const CongratulationScreen = ({navigation}: NativeStackScreenProps<any>) => {
  const selectedLanguage = useSelector(selectLanguage);

  return (
    <LinearGradient
      colors={[
        AppColors.linearColorOne,
        AppColors.linearColorTwo,
        AppColors.linearColorThree,
      ]}
      style={styles.mainContainer}>
      <ScreenWrapper statusBarColor={AppColors.primary} barStyle="dark-content">
        <View style={styles.container}>
          <Image
            source={Success}
            style={styles.successImage}
            resizeMode={'contain'}
          />
          <View style={styles.textView}>
            <H1 size={5.9}>
              {
                selectedLanguage?.Congratulations_Screen
                  ?.Congratulations_Heading
              }
            </H1>
            <H4
              color={AppColors.brown}
              textStyles={styles.noteText}
              textAlign={'center'}
              size={3.7}>
              {selectedLanguage?.Congratulations_Screen?.Note}
            </H4>
            <H4   color={AppColors.brown} size={3.7}>
              {selectedLanguage?.Congratulations_Screen?.OrderId_Label}</H4>
            <H2 fontFamily={FontFamily.SofiaSansSemiBold}>OR236GL45697P</H2>
          </View>
          <Button
            onPress={() => navigation.navigate(ScreenNames.OOPSSCREEN)}
            containerStyle={styles.btnContainer}>
            {selectedLanguage?.Congratulations_Screen?.Okay_Button}
          </Button>
        </View>
      </ScreenWrapper>
    </LinearGradient>
  );
};

export default CongratulationScreen;
