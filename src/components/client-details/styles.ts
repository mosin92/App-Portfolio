import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';
const styles = StyleSheet.create({
  container: {
    width: width(87),
    alignSelf: 'center',
    backgroundColor: AppColors.white,
    borderRadius: width(5),
    maxHeight: height(41),
    paddingVertical: height(3),
    marginVertical: height(1),
  },
  shopInfoView: {
    width: width(70),
    backgroundColor: AppColors.white,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: width(7),
  },
  shopImage: {
    height: height(8),
    width: width(16),
    borderRadius: width(15),
    marginRight: width(4),
  },
  titleView: {
    width: width(39),
  },
  orderTextView: {
    flexDirection: 'row',
    marginTop: height(1),
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width(20),
  },
  btnStyle: {
    width: width(9),
    height: width(9),
    borderRadius: width(15),
    backgroundColor: AppColors.blue90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  currencyText: {
    fontSize: width(3),
  },
  productFlatlistStyles: {
    height: height(50),
  },
  lineView: {
    height: height(0.2),
    borderBottomColor: AppColors.gray1,
    borderBottomWidth: width(0.2),
    borderStyle: 'dashed',
    width: width(87),
    marginVertical: height(1),
  },
  chargesView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width(75),
    marginTop: height(1.5),
  },
  chargesText: {
    width: width(24),
  },
  clientText: {
    marginLeft: width(7),
  },
});
export default styles;
