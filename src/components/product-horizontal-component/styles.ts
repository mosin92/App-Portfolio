import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';
import FontFamily from '~utils/font-family';
const styles = StyleSheet.create({
  container: {
    width: width(92),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AppColors.white,
    borderRadius: width(3),
    height: height(18),
    marginBottom: height(2),
  },
  imageBackgroundStyles: {
    width: '39%',
    height: '100%',
  },
  imageBackgroundImageStyles: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: width(3),
    borderBottomLeftRadius: width(3),
  },
  distanceTextView: {
    width: '35%',
    alignItems: 'center',
    paddingVertical: height(0.4),
    backgroundColor: AppColors.black + '80',
    borderRadius: width(3),
    marginLeft: width(2.5),
    marginTop: height(1),
  },
  itemsLeftVIew: {
    width: '16%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: AppColors.blue,
    paddingVertical: height(1),
    borderTopRightRadius: width(3),
    borderBottomLeftRadius: width(2.8),
    zIndex: 1,
    top: 0,
    right: 0,
  },
  secView: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    marginTop: height(1),
    marginBottom: height(2),
  },
  providerLogoStyles: {
    width: width(5),
    height: width(5),
    borderRadius: width(5),
    marginLeft: width(0.5),
    marginRight: width(1.5),
  },
  providerNameText: {
    width: '50%',
  },
  leftStyles: {
    fontFamily: FontFamily.SofiaSansLight,
    fontSize: width(2.8),
  },
  titleRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: width(5),
  },
  titleStyles: {
    width: '50%',
  },
  currencyText: {
    fontSize: width(2.7),
  },
  categoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width:'50%'
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
  categoryTextView: {
    width: '65%',
    marginLeft: width(2),
  },
  rightView: {
    marginLeft: '4%',
    width: '57%',
  },
  categoryLogo: {
    width: width(4),
    height: width(4),
    borderRadius: width(4),
  },
});
export default styles;
