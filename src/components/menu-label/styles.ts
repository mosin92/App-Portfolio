import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';
const styles = StyleSheet.create({
  container: {
    height: height(7),
    width: width(43),
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.white,
    borderRadius: width(2),
    paddingLeft: width(4.5),
  },
  titleStyles: {
    flex: 1,
  },
  iconStyleRight: {
    width: width(10),
    alignItems: 'flex-start',
  },
});
export default styles;
