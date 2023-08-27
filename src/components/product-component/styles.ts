import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';
import FontFamily from '~utils/font-family';
const styles = StyleSheet.create({
  container: {
    width: width(48),
    alignItems: 'center',
    backgroundColor: AppColors.white,
    borderRadius: width(3),
    overflow: 'hidden',
  },
  imageBackgroundStyles: {
    width: '100%',
    height: height(18),
  },
  imageBackgroundImageStyles: {
    borderTopRightRadius: width(3),
    borderTopLeftRadius: width(3),
  },
  gradientView: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gradientInnerTopView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  distanceTextView: {
    paddingHorizontal: width(2.6),
    paddingVertical: height(0.4),
    backgroundColor: AppColors.black + '80',
    borderRadius: width(3),
    marginLeft: width(2.5),
    marginTop: width(0.8),
  },
  itemsLeftVIew: {
    backgroundColor: AppColors.blue,
    paddingHorizontal: width(2.7),
    paddingVertical: height(1),
    borderTopRightRadius: width(3),
    borderBottomLeftRadius: width(2.8),
  },
  gradientInnerBottomView: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    marginBottom: height(1.6),
  },
  providerLogoStyles: {
    width: width(8),
    height: width(8),
    borderRadius: width(5),
    marginLeft: width(2.5),
    marginRight: width(2.5),
  },
  providerNameText: {
    width: '65%',
  },
  leftStyles: {
    fontFamily: FontFamily.SofiaSansLight,
    fontSize: width(2.5),
  },
  titleRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width(3),
    paddingTop: height(1.1),
  },
  titleStyles: {
    width: '77%',
  },
  currencyText: {
    fontSize: width(2),
  },
  categoryRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width(3),
    paddingBottom: height(1.5),
    paddingTop: height(0.5),
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
    marginHorizontal: width(1),
  },
  ratingText: {marginLeft: width(1)},
  categoryTextView: {
    width: '50%',
  },
  unitContainer: {
    paddingHorizontal: width(3),
    paddingVertical: height(0.1),
    backgroundColor: AppColors.blue + '30',
    borderRadius: width(3),
    marginLeft: width(2.5),
  },
});
export default styles;
