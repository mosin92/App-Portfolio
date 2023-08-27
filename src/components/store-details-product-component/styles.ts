import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AppColors.white,
    borderRadius: width(3),
    marginTop: height(2),
  },
  imageBackgroundStyles: {
    width: '26%',
    height: '100%',
  },
  imageBackgroundImageStyles: {
    width: '100%',
    height: '100%',
    borderRadius: width(3),
  },
  distanceTextView: {
    paddingHorizontal: width(1.5),
    alignItems: 'center',
    paddingVertical: height(0.25),
    backgroundColor: AppColors.black + '80',
    borderRadius: width(3),
    marginRight: width(2),
    marginTop: height(1),
    alignSelf: 'flex-end',
  },
  itemsLeftVIew: {
    width: width(7.5),
    height: width(7.5),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: AppColors.blue,
    borderRadius: width(10),
    zIndex: 1,
    top: 0,
    right: 0,
  },
  secView: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    marginTop: height(0.1),
  },
  titleStyles: {
    width: '80%',
  },
  currencyText: {
    fontSize: width(2.7),
  },
  ratingView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height(1),
    marginLeft: width(2),
  },
  dot: {
    width: width(0.8),
    height: width(0.8),
    borderRadius: width(5),
    backgroundColor: AppColors.blue,
    marginHorizontal: width(1.5),
  },
  priceText: {
    marginTop: height(0.6),
  },
  descriptionText: {
    marginTop: height(0.2),
  },
  rightView: {
    width: '67%',
    paddingLeft: width(3.5),
    paddingVertical: height(0.7),
  },
});
export default styles;
