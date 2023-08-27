import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';
const styles = StyleSheet.create({
  container: {
    width: width(87),
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
    backgroundColor: AppColors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shopImage: {
    height: height(8),
    width: width(16),
    borderRadius: width(5),
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
  chatIcon: {
    width: width(3.8),
    height: width(4),
  },
  lineStyle: {
    height: height(0.2),
    borderStyle: 'dashed',
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
    width: width(43),
  },
  deliveryTextView: {
    width: width(26),
  },
  dateTimeView: {
    flexDirection: 'row',
  },
  timeText: {
    marginRight: width(2),
  },
  textStyle: {
    marginBottom: height(1),
  },
});
export default styles;
