import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.white,
    width: width(90),
    minHeight: height(35),
    borderRadius: width(5),
    marginTop: height(2),
    marginBottom: height(3),
  },
  header: {
    justifyContent: 'center',
    paddingHorizontal: width(6),
    height: height(8),
  },
  lineStyle: {
    height: height(0.2),
    borderBottomWidth: width(0.3),
    width: width(90),
    borderBottomColor: AppColors.gray1,
    marginBottom: height(2),
  },
  itemCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: height(10),
    marginVertical: height(1),
    paddingHorizontal: width(6),
  },
  itemImg: {
    width: width(20),
    height: height(11),
    borderRadius: width(2),
    marginRight: width(2),
  },
  footer: {
    marginTop: height(2),
  },
  totalbill: {
    backgroundColor: AppColors.lightGray,
    maxHeight: height(12),
    borderRadius: width(2),
    marginHorizontal: width(3),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: width(2),
    paddingVertical: height(2),
    marginBottom: height(2),
  },
  verticalLineStyle: {
    borderLeftWidth: width(0.3),
    height: '100%',
    borderLeftColor: AppColors.gray2,
  },
  currencyText: {
    fontSize: 11,
  },
});

export default styles;
