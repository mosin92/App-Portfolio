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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height(2),
  },
  logoStyles: {
    width: width(22),
    height: width(22),
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
    marginTop: height(5),
    alignSelf: 'flex-start',
    marginLeft: width(5),
    marginBottom: height(4),
  },
  textInputContainer: {
    marginBottom: height(1.8),
  },
  textInput: {
    width: width(76),
  },
  byClickingText: {width: width(90), marginBottom: height(2)},
  privacyText: {
    color: AppColors.blue,
  },
  alreadyHaveAnAccountView: {
    marginTop: height(5),
    marginBottom: height(1),
  },
  inputRow: {
    flexDirection: 'row',
    width: width(90),
    backgroundColor: 'red',
  },
  kidIcon: {
    width: width(6),
    height: width(6),
  },
  kidInputContainerStyles: {
    width: width(43),
  },
  kidInputStyles: {
    width: width(33),
  },
  genderDropDownContainerStyles: {
    height: height(7),
    width: width(43),
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: AppColors.white,
    borderRadius: width(2),
    paddingHorizontal: width(4.5),
  },
  genderSelectText: {
    fontFamily: FontFamily.SofiaSansMedium,
    fontSize: width(4),
    color: AppColors.brown,
  },
  dropDownStyles: {
    height: 'auto',
    maxHeight: height(20),
    width: width(43),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: width(0.1),
  },
  line: {
    width: width(43),
    height: width(0.08),
    backgroundColor: AppColors.brown,
  },
  row: {
    marginBottom: height(2),
  },
});
export default styles;
