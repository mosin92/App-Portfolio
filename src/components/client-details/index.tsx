import React from 'react';
import {FlatList, Image, Text, View, ViewStyle} from 'react-native';
import {useSelector} from 'react-redux';
import {H1, H2} from '~components/text/text';
import {selectLanguage} from '~store/slices/language';
import AppColors from '~utils/app-colors';
import FontFamily from '~utils/font-family';
import styles from './styles';

type Props = {
  containerStyle?: ViewStyle;
  clientImage?: string;
  clientName?: string;
};

const ClientDetails: React.FC<Props> = ({
  containerStyle = {},
  clientImage,
  clientName,
}) => {
  const selectedLanguage = useSelector(selectLanguage);
  return (
    <View style={[styles.container, containerStyle]}>
      <H2
        numberOfLines={1}
        size={3.8}
        fontFamily={FontFamily.SofiaSansSemiBold}
        textStyles={styles.clientText}>
        Client Details
      </H2>
      <View style={styles.lineView}></View>
      <View style={styles.shopInfoView}>
        <Image
          source={{
            uri: clientImage,
          }}
          style={styles.shopImage}
        />
        <View style={styles.titleView}>
          <H1 numberOfLines={1} size={4.5}>
            {clientName}
          </H1>
          <View style={styles.orderTextView}>
            <H2
              numberOfLines={1}
              size={3.2}
              color={AppColors.blue}
              fontFamily={FontFamily.SofiaSansSemiBold}>
              Client
            </H2>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ClientDetails;
