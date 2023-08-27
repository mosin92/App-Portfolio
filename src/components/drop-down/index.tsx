import React from 'react';
import {
  FlatList,
  Pressable,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {H2} from '~components/text/text';
import {width} from '~utils';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import AppColors from '~utils/app-colors';
import {useState} from 'react';
// Component Props
interface MenuObjectProps {
  name: any;
  value: any;
}
interface Props {
  initialValue: string;
  getValue?: any;
  options?: any;
  containerStyles?: ViewStyle;
}

interface RenderMenuProps {
  item?: MenuObjectProps;
  index?: string | number;
}

const DropDown: React.FC<Props> = ({
  initialValue,
  getValue,
  options,
  containerStyles = {},
}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const renderMenu = ({item}: RenderMenuProps) => {
    return (
      <TouchableOpacity
        style={styles.dropDownItemContainer}
        onPress={() => {
          setShowMenu(false);
          getValue(item);
        }}>
        <H2>{item?.name}</H2>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <Pressable
        style={[styles.dropDownContainer, containerStyles]}
        onPress={() => setShowMenu(!showMenu)}>
        <H2>{initialValue}</H2>
        <Feather name="chevron-down" color={AppColors.black} size={width(5)} />
      </Pressable>
      {showMenu && (
        <View style={styles.flatlistView}>
          <FlatList
            data={options}
            keyExtractor={(i, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={renderMenu}
            style={styles.flatlistStyles}
          />
        </View>
      )}
    </View>
  );
};

export default DropDown;
