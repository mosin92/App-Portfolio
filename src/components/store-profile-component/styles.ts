import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';
const styles = StyleSheet.create({
  container: {
    width: '90%',
    justifyContent: 'center',
    borderRadius: width(3),
    paddingVertical: height(2),
    top: height(40),
    position: 'absolute',
  },
  mainRow: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  imageView: {
    width: '19%',
    height: width(15),
    borderWidth: width(0.7),
    borderColor: AppColors.white,
    borderRadius: width(1),
  },
  imageStyles: {
    flex: 1,
    borderRadius: width(0.5),
  },
  titleView: {
    width: '50%',
  },
  btnsView: {
    width: '22%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  favBtnView: {
    width: width(8),
    height: width(8),
    borderRadius: width(10),
    backgroundColor: AppColors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyles: {
    width: '93%',
  },
  addressView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    marginTop: height(1.5),
  },
  ratingView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    marginRight: width(0.5),
  },
  ratingText: {marginLeft: width(1)},
});
export default styles;
