import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';
const styles = StyleSheet.create({
  container: {
    width: width(43),
    height: height(8),
    alignSelf: 'center',
    backgroundColor: AppColors.white,
    borderRadius: width(3),
    maxHeight: height(41),
    paddingHorizontal: width(5),
    alignItems: 'center',
    marginVertical: height(0.6),
    flexDirection: 'row',
  },
  circleView: {
    width: width(5),
    height: width(5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width(10),
    borderColor: AppColors.gray3,
    borderWidth: width(0.5),
    marginRight: width(2),
  },
  fillCircle: {
    backgroundColor: AppColors.blue1,
    width: width(2.5),
    height: width(2.5),
    borderRadius: width(10),
  },
  iconStyle: {
    width: width(5),
    height: width(5),
    marginRight: width(2),
  },
});
export default styles;
