import React from 'react';
import {Image, Text, View, ViewStyle} from 'react-native';
import {useSelector} from 'react-redux';
import {Wallet} from '~assets/images';
import {H1, H4} from '~components/text/text';
import {selectLanguage} from '~store/slices/language';
import AppColors from '~utils/app-colors';
import FontFamily from '~utils/font-family';
import styles from './styles';

type Props = {
  containerStyle?: ViewStyle;
  price?: string | number;
};

const WalletCard: React.FC<Props> = ({price}) => {
  const selectedLanguage = useSelector(selectLanguage);

  return (
    <View style={styles.walletView}>
      <View style={styles.wallet}>
        <View style={styles.walletIconView}>
          <Image
            source={Wallet}
            style={styles.walletIcon}
            resizeMode={'contain'}
          />
        </View>
        <H1 size={4}>{selectedLanguage?.Payment_Screen?.Wallet_Label}</H1>
      </View>
      <View style={styles.wallet}>
        <H4 color={AppColors.gray2}>
          {selectedLanguage?.Payment_Screen?.Bal_Text}
        </H4>
        <H4
          fontFamily={FontFamily.SofiaSansSemiBold}
          size={3.3}
          numberOfLines={1}
          textStyles={styles.priceText}>
          {price}
          <Text style={styles.currencyText}>SAR</Text>
        </H4>
      </View>
      <View style={styles.addBtn}>
        <H1 size={4} color={AppColors.white}>
          +{selectedLanguage?.Payment_Screen?.ADD_Button}
        </H1>
      </View>
    </View>
  );
};

export default WalletCard;
