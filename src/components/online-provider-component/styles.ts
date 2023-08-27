import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';
const styles = StyleSheet.create({
  container: {
    width: width(32),
    height: height(16),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.white,
    borderRadius: width(3),
  },
  logoStyles: {
    width: width(14),
    height: width(14),
    borderRadius: width(5.5),
    marginTop: height(0.5),
  },
  providerName: {
    width: '80%',
    marginTop: height(1.5),
    marginBottom:height(.5)
  },
  productCategory: {
    maxWidth: '60%',
  },
  ratingAndCategoryRow:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
  },
  ratingView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: width(1),
    height: width(1),
    borderRadius: width(5),
    backgroundColor: AppColors.blue,
    marginHorizontal: width(1.5),
  },
  ratingText: {marginLeft: width(1)},
});
export default styles;
