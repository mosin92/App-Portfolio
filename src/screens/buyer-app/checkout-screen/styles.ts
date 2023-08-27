import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  shopCoverView: {
    borderRadius: width(3),
  },
  shopCover: {
    width: width(90),
    height: height(10),
    borderRadius: width(3),
    paddingHorizontal: width(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  catogriesText: {
    flexDirection: 'row',
  },
  currencyText: {
    fontSize: width(3),
  },
  shopNameView: {
    width: width(40),
  },
  priceView: {
    width: width(20),
    alignItems: 'flex-end',
  },
  checklistView: {
    backgroundColor: AppColors.white,
    width: width(80),
    borderBottomRightRadius: width(5),
    borderBottomLeftRadius: width(5),
    alignItems: 'center',
    paddingVertical: height(2),
  },
  listRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width(67),
    marginBottom: height(1),
  },
  lineStyle: {
    height: height(0.2),
    borderBottomWidth: width(0.3),
    width: width(74),
    borderBottomColor: AppColors.gray1,
    marginBottom: height(1),
  },
  paymentText: {
    alignSelf: 'flex-start',
    marginLeft: width(5),
    marginTop: height(3),
  },
  walletView: {
    width: width(90),
    backgroundColor: AppColors.white,
    paddingHorizontal: width(3.5),
    paddingVertical: height(1.2),
    borderRadius: width(4),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
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
 iconButtonView: {
    width: width(90),
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: height(2),
  },
  codeView: {
    backgroundColor: AppColors.darkBlue,
    width: width(65),
    height: height(7),
    borderRadius: width(3),
    justifyContent: 'space-between',
    paddingHorizontal: width(5),
    marginVertical: height(3),
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    width: width(5),
    height: width(5),
    marginRight: width(2),
  },
  btnContainer: {
    width: width(90),
    borderRadius: width(2),
    height: height(6.7),
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: AppColors.blue,
  },
});
export default styles;
