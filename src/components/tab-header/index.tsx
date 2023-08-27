import React, {useState} from 'react';
import {
  FlatList,
  Pressable,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {Filter} from '~assets/svg';
import {CustomText, H2} from '~components/text/text';
import {width} from '~utils';
import AppColors from '~utils/app-colors';
import FontFamily from '~utils/font-family';
import styles from './styles';
interface ProductItemProps {
  title: string;
}

interface tabsFlatList {
  item: ProductItemProps;
  index: string | number;
}

type Props = {
  onPress?: () => void;
  selected?: string | number;
  TabsData?: Array<ProductItemProps>;
};

const TabHeader: React.FC<Props> = ({TabsData, onPress, selected}) => {
  const renderTab = ({item, index}: tabsFlatList) => {
    return (
      <Pressable onPress={() => onPress(index)} style={styles.tabView}>
        <H2
          fontFamily={FontFamily.SofiaSansSemiBold}
          size={3.8}
          color={selected === index ? AppColors.darkBlue : AppColors.brown}>
          {item.title}
        </H2>
        {selected === index ? <View style={styles.dot}></View> : <View />}
      </Pressable>
    );
  };
  return (
    <View style={styles.tabHeader}>
      <FlatList
        horizontal
        data={TabsData}
        keyExtractor={(item, index) => index?.toString()}
        renderItem={renderTab}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

export default TabHeader;
