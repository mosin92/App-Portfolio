import {StyleSheet, Platform} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';
import FontFamily from '~utils/font-family';
const styles = StyleSheet.create({
  container: {
    height: height(7),
    width: width(90),
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.white,
    borderRadius: width(2),
  },
  iconStyleLeft: {
    width: width(10),
    alignItems: 'flex-end',
  },
  iconStyleRight: {
    width: width(10),
    alignItems: 'flex-start',
  },
  input: {
    fontFamily: FontFamily.SofiaSansRegular,
    fontSize: width(4),
    width: width(66),
    height: height(7),
    color: AppColors.darkBlue,
    left: Platform.OS === 'ios' ? 0 : -width(1),
    marginHorizontal: width(2),
  },
  errorStyles: {
    width: width(90),
  },
});
export default styles;
