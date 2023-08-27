import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';
const styles = StyleSheet.create({
  container: {
    width: width(90),
    alignSelf: 'center',
    backgroundColor: AppColors.white,
    borderRadius: width(5),
    marginVertical: height(0.6),
    maxHeight: height(40),
    paddingHorizontal: width(5),
    paddingTop: height(2),
    paddingBottom: height(3.5),
    alignItems: 'center',
  },
  shopInfoView: {
    width: width(82),
    flexDirection: 'row',
    alignItems: 'center',
  },
  shopImage: {
    height: height(9.5),
    width: width(19),
    borderRadius: width(5),
  },
  titleView: {
    width: width(39),
    marginLeft: width(3),
  },
  orderTextView: {
    flexDirection: 'row',
    marginTop: height(1),
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width(60),
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width(20),
  },
  orderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width(60),
  },
  btnStyle: {
    width: width(9),
    height: width(9),
    borderRadius: width(15),
    backgroundColor: AppColors.blue90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatIcon: {
    width: width(3.8),
    height: width(4),
  },
  lineStyle: {
    height: height(0.2),
    borderBottomWidth: width(0.3),
    width: width(87),
    borderBottomColor: AppColors.gray1,
    marginVertical: height(2),
  },
  deliveryDetailView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width(80),
  },
  deliveryTimeTextView: {
    flexDirection: 'row',
    width: width(43),
    alignItems: 'center',
  },
  deliveryTextView: {
    width: width(26),
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateTimeView: {
    flexDirection: 'row',
  },
  iconStyle: {
    width: width(5),
    height: width(5),
    marginRight: width(3),
  },
  arrowIconStyle: {
    width: width(3),
    height: width(3),
    marginLeft: width(3),
  },
  currencyText: {
    fontSize: width(3),
  },
});
export default styles;
