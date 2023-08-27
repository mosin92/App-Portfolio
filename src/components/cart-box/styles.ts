import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';
const styles = StyleSheet.create({
  container: {
    paddingTop: height(1.5),
    paddingHorizontal: width(3.5),
    width: width(92),
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.white,
    borderRadius: width(3),
    marginVertical: height(0.6),
    maxHeight: height(40),
  },
  topView: {
    flexDirection: 'row',
    width: width(85),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  counterTitleView: {
    alignItems: 'flex-end',
    width: width(24),
  },
  titleViewStyle: {
    width: width(38),
  },
  productImageStyle: {
    height: height(9),
    width: width(18),
    borderRadius: width(3),
  },
  counterView: {
    flexDirection: 'row',
    width: width(20),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shopNumberTextStyle: {
    marginBottom: height(2),
  },
  lineView: {
    width: width(85),
    backgroundColor: AppColors.gray1,
    height: height(0.1),
    marginTop: height(1.5),
  },
  CommentBox: {
    width: width(85),
    color: AppColors.darkBlue,
    maxHeight: height(25),
    minHeight: height(5),
    marginVertical: height(1),
  },
  currencyText: {
    fontSize: width(3),
  },
});

export default styles;
