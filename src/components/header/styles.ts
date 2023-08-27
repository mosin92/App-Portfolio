import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';
const styles = StyleSheet.create({
  container: {
    height: height(8),
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: AppColors.primary,
    paddingHorizontal: width(4),
  },
  firstView: {
    width: '30%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  secView: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thirdView: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  backView: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width(5),
    backgroundColor: AppColors.white,
    width: width(11),
    height: width(11),
  },
  shareView: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default styles;
