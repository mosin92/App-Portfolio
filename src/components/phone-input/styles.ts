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
    paddingHorizontal:width(3)
  },
  errorStyles: {
    width: width(90),
  },
  textContainerStyle: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor:AppColors.white
  },
  containerStyle: {
    flex: 1,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    elevation: 0,
  },
  textInputStyle: {
    height: height(4.5),
    paddingTop: 0,
    paddingBottom: 0,
    paddingHorizontal: width(1),
    fontFamily: FontFamily.SofiaSansRegular,
    fontSize: width(3.8),
    color: AppColors.black,
    backgroundColor:AppColors.white
  },
  codeTextStyle: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    marginRight: 0,
    marginLeft: 0,
    fontFamily: FontFamily.SofiaSansRegular,
    fontSize: width(3.8),
    color: AppColors.black,
  },
  countryPickerButtonStyle: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    marginRight: width(3),
    marginLeft: 0,
    marginTop: 0,
    marginBottom: 0,
    borderRightWidth:width(.1),
    borderRightColor:AppColors.brown,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AppColors.white,
  },
});
export default styles;
