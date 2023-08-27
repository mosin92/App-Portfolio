import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';
const styles = StyleSheet.create({
  container: {
    height: height(8),
    width: '92%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  imageView: {
    borderWidth: width(0.8),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width(5),
    borderColor: AppColors.white,
    shadowColor: AppColors.darkBlue,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.22,
    elevation: 3,
  },
  profileImageStyles: {
    width: width(10),
    height: width(10),
    borderRadius: width(4),
  },
  nearMeView: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width(4),
    backgroundColor: AppColors.white,
    width: width(11),
    height: width(11),
    marginLeft: width(2),
    shadowColor: AppColors.darkBlue,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.22,
    elevation: 3,
  },
  dot: {
    width: width(1),
    height: width(1),
    borderRadius: width(1),
    backgroundColor: AppColors.blue,
    position: 'absolute',
    top: width(2),
    right: width(3.2),
  },
});
export default styles;
