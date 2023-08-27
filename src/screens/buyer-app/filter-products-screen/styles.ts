import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';
import FontFamily from '~utils/font-family';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  flatlistStyles: {
    width: '100%',
  },
  contentContainerStyle: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '92%',
  },
  headerText: {
    width: '92%',
    marginTop: height(2),
    marginBottom: height(1.5),
  },
  containerStyles: {
    height: height(7),
    width: width(92),
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: AppColors.white,
    borderRadius: width(2),
    paddingHorizontal: width(4.5),
  },
  selectText: {
    fontFamily: FontFamily.SofiaSansRegular,
    fontSize: width(4),
    color: AppColors.darkBlue,
  },
  dropDownStyles: {
    maxHeight: height(40),
    width: width(92),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: width(0.1),
    borderBottomRightRadius: width(2),
    borderBottomLeftRadius: width(2),
    paddingLeft: width(3),
  },
  line: {
    alignSelf: 'center',
    width: width(92),
    height: width(0.08),
    backgroundColor: AppColors.white,
  },
  sliderStyles: {
    width: width(92),
  },
  row: {
    width: '92%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectTextSlider: {
    fontFamily: FontFamily.SofiaSansMedium,
    fontSize: width(4),
    color: AppColors.darkBlue,
  },
  thumbStyles: {
    width: width(3),
    height: width(3),
    borderWidth: width(0.5),
    borderColor: AppColors.white,
    backgroundColor: AppColors.darkBlue,
  },
  aboveThumbStyles: {
    bottom: -height(1.7),
  },
  sliderView: {
    marginTop: height(1),
  },
  applyBtn: {
    marginTop: height(3),
    marginBottom: height(5),
  },
});
export default styles;
