import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';

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
  loginTextView: {
    width: width(90),
    marginTop: height(6),
    alignSelf: 'flex-start',
    marginLeft: width(5),
    marginBottom: height(4),
  },
  textInputContainer: {
    marginBottom: height(2),
  },
  textInput: {
    width: width(76),
  },
  forgetTextView: {
    marginTop: height(3),
    marginBottom: height(5),
  },
  line: {
    width: width(30),
    height: height(0.4),
  },
  orView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height(10),
    marginBottom: height(4),
  },
  orTextView: {
    marginHorizontal: width(3),
  },
  logoButtonStyles: {
    width: width(43),
    height: height(8),
    backgroundColor: AppColors.white,
    borderRadius: width(2),
    shadowColor: '#00000090',
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.22,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dontAccountView: {
    marginTop: height(5),
    marginBottom: height(1),
  },
});
export default styles;
