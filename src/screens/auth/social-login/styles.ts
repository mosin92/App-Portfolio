import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: height(3),
  },
  socialButton: {
    width: '90%',
    height: height(5.5),
    borderWidth: width(0.2),
    borderColor: AppColors.darkBlue,
    borderRadius: width(2.5),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height(2),
  },
  logoStyles: {
    width: width(7),
    height: width(7),
    marginHorizontal: width(4),
  },
  createTextView: {
    width: width(90),
    marginTop: height(6),
    alignSelf: 'center',
    marginBottom: height(1),
  },
  weatherText: {
    width: width(85),
    alignSelf: 'center',
    marginBottom: height(3),
  },
  byClickingText: {
    width: width(90),
    marginBottom: height(2),
    marginTop: height(3),
  },
  privacyText: {
    color: AppColors.blue,
  },
  footerButton: {
    alignSelf:'center',
    width: '90%',
    backgroundColor: AppColors.blue,
    height: height(6),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: height(4),
    borderRadius:width(2)
  },
});
export default styles;
