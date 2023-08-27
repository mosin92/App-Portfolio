import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';
import FontFamily from '~utils/font-family';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: AppColors.white,
  },
  productImageBackgroundStyles: {
    width: width(100),
    height: height(45),
  },
  dotsView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    alignSelf: 'center',
    bottom: height(8),
  },
  activeDotStyles: {
    width: width(3),
    height: width(3),
    borderWidth: width(0.6),
    borderRadius: width(4),
    backgroundColor: AppColors.transparent,
    borderColor: AppColors.white,
  },
  dot: {
    width: width(1.6),
    height: width(1.6),
    borderRadius: width(5),
    backgroundColor: AppColors.brown,
    marginHorizontal: width(1),
  },
  whiteBackgroundView: {
    width: '90%',
    backgroundColor: AppColors.white,
    paddingVertical: height(2),
    paddingHorizontal: width(5),
    alignSelf: 'center',
    borderRadius: width(3.5),
    marginBottom: height(2),
  },
  descriptionTitle: {
    width: '100%',
    marginBottom: height(1.5),
  },
  columnWrapperStyle: {
    width: '100%',
    justifyContent: 'space-between',
  },
  mainRow: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  imageView: {
    width: '19%',
    height: width(15),
    borderRadius: width(10),
  },
  titleView: {
    width: '50%',
  },
  btnsView: {
    width: '24%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: AppColors.blue + '20',
    paddingHorizontal: width(2.7),
    paddingVertical: height(0.5),
    borderRadius: width(5),
    alignSelf: 'flex-start',
    marginTop: height(0.5),
  },
  rowView: {
    marginTop: height(2),
    alignItems: 'flex-start',
  },
  valueStyles: {
    width: '60%',
  },
  socialView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: width(11),
    height: width(11),
    borderRadius: width(11),
    marginRight: width(3),
  },
  marginTop: {marginTop: 0},
  tabBarView: {
    width: width(100),
    height: height(85),
    marginTop: height(10),
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: AppColors.white,
    width: '100%',
  },
  tabItem: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: height(2),
    backgroundColor: AppColors.white,
  },
  bar: {
    width: '40%',
    backgroundColor: AppColors.blue,
    height: height(0.4),
    borderRadius: width(2),
  },
  barItemText: {
    color: AppColors.darkBlue,
    fontFamily: FontFamily.SofiaSansBold,
  },
  tabItemView: {
    width: '25%',
    alignItems: 'center',
  },
  contentContainerStyle: {
    paddingTop: height(2),
    paddingBottom: height(10),
  },
  priceRangeView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  verticalLine: {
    height: height(7),
    width: width(0.25),
    backgroundColor: AppColors.gray1,
  },
  instaImageView: {
    width: width(15),
    height: width(15),
    borderRadius: width(3),
  },
  instaImage: {
    flex: 1,
    borderRadius: width(3),
  },
  itemSeparator: {
    width: width(2),
  },
  flatlist: {
    height: height(36),
  },
  itemsFooterBtn: {
    width: '90%',
    alignSelf: 'center',
    height: height(6.5),
    borderRadius: width(2),
    backgroundColor: AppColors.blue,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width(5),
  },
});
export default styles;
