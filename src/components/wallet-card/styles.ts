import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';
const styles = StyleSheet.create({
  walletView: {
    width: width(90),
    backgroundColor: AppColors.white,
    paddingHorizontal: width(3.5),
    paddingVertical: height(1.2),
    borderRadius: width(4),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height(2),
  },
  walletIconView: {
    height: height(8),
    width: width(18),
    borderRadius: width(3),
    backgroundColor: AppColors.blue90,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: width(3),
  },
  walletIcon: {
    height: height(2.9),
    width: width(6.5),
  },
  wallet: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceText: {
    marginLeft: width(2),
  },
  addBtn: {
    height: height(4.5),
    paddingHorizontal: width(6),
    borderRadius: width(5),
    backgroundColor: AppColors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  currencyText: {
    fontSize: width(3),
  },
});
export default styles;
