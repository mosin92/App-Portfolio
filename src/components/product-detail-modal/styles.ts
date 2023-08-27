import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';
const styles = StyleSheet.create({
  modalMainStyles: {
    flex: 1,
  },
  mainViewStyles: {
    height: '85%',
    width: '100%',
    backgroundColor: AppColors.white,
    alignSelf: 'center',
    borderRadius: width(7),
    overflow: 'hidden',
  },
  backDrop: {
    height: '120%',
    width: '100%',
    backgroundColor: AppColors.black,
  },
  wrapper: {
    width: '100%',
    height: height(41),
    borderRadius: width(7),
    backgroundColor: AppColors.black,
  },
  productImageBackgroundStyles: {
    width: width(90),
    height: '100%',
    borderRadius: width(7),
  },
  closePriceView: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: width(7),
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    zIndex: 1,
  },
  currencyText: {
    fontSize: width(3),
  },
  activeDotStyles: {
    width: width(3),
    height: width(3),
    borderWidth: width(0.6),
    borderRadius: width(4),
    backgroundColor: AppColors.transparent,
    borderColor: AppColors.white,
  },
  closeButton: {
    width: width(9),
    height: width(9),
    backgroundColor: AppColors.black + '90',
    borderRadius: width(10),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height(2),
    marginRight: width(4),
  },
  priceView: {
    paddingHorizontal: width(5),
    paddingVertical: height(1.4),
    backgroundColor: AppColors.black + '90',
    borderRadius: width(10),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: width(5),
  },
  titleView: {
    width: '90%',
    alignSelf: 'center',
    marginTop: height(1.5),
  },
  descriptionView: {
    width: '90%',
    alignSelf: 'center',
    marginTop: height(1),
  },
  categoryRow: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height(0.2),
  },
  dotsView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: width(4),
  },
  dot: {
    width: width(1.6),
    height: width(1.6),
    borderRadius: width(5),
    backgroundColor: AppColors.brown,
    marginHorizontal: width(1),
  },
  dotBlue: {
    width: width(1),
    height: width(1),
    borderRadius: width(5),
    backgroundColor: AppColors.blue,
    marginHorizontal: width(1),
  },
  tagsMainView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    flexWrap: 'wrap',
    marginTop: height(0.5),
  },
  tagView: {
    paddingHorizontal: width(3),
    paddingVertical: height(0.5),
    backgroundColor: AppColors.blue + '20',
    borderRadius: width(4),
    marginRight: width(2),
    marginBottom: height(1),
  },
  deleteButton: {
    width: '90%',
    height: height(6.7),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: AppColors.blue1,
    marginVertical: height(2),
    borderRadius: width(3),
    paddingRight: width(3.5),
  },
  btn: {
    width: '87%',
    borderRadius: width(3),
  },
  addToCartBtn: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: width(3),
    marginVertical: height(2),
  },
  star: {
    marginRight: width(0.5),
  },
  ratingTextView: {
    marginLeft: width(1),
  },
  paddingHor3: {
    paddingHorizontal: width(3),
  },
});
export default styles;
