import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';

const styles = StyleSheet.create({
  dropDownContainer: {
    width: width(18),
    height: height(4),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: AppColors.white,
    paddingLeft: width(3),
    paddingRight: width(2),
  },
  dropDownItemContainer: {
    width: width(18),
    height: height(4),
    justifyContent: 'center',
    backgroundColor: AppColors.white,
    paddingHorizontal: width(2),
    borderTopWidth: width(0.05),
    borderTopColor: AppColors.black + '50',
  },
  flatlistView: {position: 'absolute', top: height(4), zIndex: 5},
  flatlistStyles: {maxHeight: height(10), backgroundColor: AppColors.white},
});
export default styles;
