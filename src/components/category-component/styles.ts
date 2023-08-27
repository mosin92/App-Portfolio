import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';
const styles = StyleSheet.create({
  categoryBackgroundStyles: {
    width: width(38),
    height: height(7.2),
  },
  categoryBackgroundImageStyles: {
    borderRadius: width(2),
  },
  categoryBackgroundViewStyles: {
    flex: 1,
    borderRadius: width(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    width:'85%',
  }
});
export default styles;
