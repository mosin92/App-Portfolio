import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';
import FontFamily from '~utils/font-family';

const styles = StyleSheet.create({
  container: {
    width: width(90),
    borderRadius: width(2),
    height: height(6.7),
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  primaryContainer: {
    backgroundColor: AppColors.blue,
  },
  secondaryContainer: {
    backgroundColor: AppColors.blue,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  primaryText: {
    color: AppColors.white,
    fontSize: width(5),
    fontFamily: FontFamily.SofiaSansBold,
  },
  secondaryText: {
    color: AppColors.white,
    fontSize: width(3.8),
    fontFamily: FontFamily.SofiaSansBold,
  },
});

export default styles;
