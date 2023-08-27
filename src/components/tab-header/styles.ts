import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';
const styles = StyleSheet.create({
  tabHeader: {
    width: width(100),
    height: height(8),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: AppColors.white,
    paddingHorizontal: width(8),
  },
  dot: {
    width: width(1.2),
    height: width(1.2),
    borderRadius: width(10),
    backgroundColor: AppColors.blue,
    marginTop: height(0.7),
  },
  tabView: {
    alignItems: 'center',
    marginRight: width(15),
  },
  flatListContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
export default styles;
