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
  createTextView: {
    width: width(90),
    marginTop: height(4),
    alignSelf: 'flex-start',
    marginLeft: width(5),
    marginBottom: height(2),
  },
  alreadyHaveAnAccountView: {
    marginTop: height(10),
    marginBottom: height(1),
  },
  enterOtpText:{
    width:'90%',
    marginTop:height(1),
  },
  otpExpiredInText:{
    width:'90%',
    marginTop:height(4),
  },
  resendButton:{
    marginVertical:height(5)
  },
  otpContainer: {
    alignSelf: "flex-start",
    height: width(18),
    width: width(72),
    marginTop: height(4),
    marginLeft:width(5)
  },
  inputStyle: {
    backgroundColor: AppColors.white,
    width: width(15),
    height: width(17),
    borderWidth:0,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: width(1),
    color: AppColors.black,
    fontSize: width(8),
    fontFamily: FontFamily.SofiaSansRegular,
  },
  underlineStyleHighLighted: {
    borderColor: AppColors.darkBlue,
  },
  timeText:{
    color:AppColors.darkBlue,
    fontFamily:FontFamily.SofiaSansBold
  }
});
export default styles;
