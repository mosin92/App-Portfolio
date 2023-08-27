import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';
import FontFamily from '~utils/font-family';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: height(3),
  },
  headerView: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: height(2),
  },
  logoStyles: {
    width: width(29),
    height: width(29),
    marginTop: height(10),
  },
  buttonLogo: {
    width: width(40),
    height: height(11),
  },
  buttonLogoGoogle: {
    width: width(19),
    height: height(5),
  },
  createTextView: {
    width: width(90),
    marginTop: height(8),
    alignSelf: 'center',
    marginBottom: height(1.5),
  },
  weatherText: {
    width: width(85),
    alignSelf: 'center',
    marginBottom: height(3),
  },
  byClickingText: {
    width: width(90),
    marginBottom: height(2),
    marginTop: height(7),
  },
  privacyText: {
    color: AppColors.blue,
  },
  row: {
    marginBottom: height(2),
  },
  nextBtn:{
    marginTop:height(3)
  }
});
export default styles;
