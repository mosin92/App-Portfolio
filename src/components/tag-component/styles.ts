import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';
const styles = StyleSheet.create({
  container: {
    width: '48%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.lightGray,
    borderRadius: width(2),
    paddingLeft: width(2),
    paddingVertical: height(1),
    marginBottom: height(1.5),
  },
  logoView: {
    width: width(8),
    height: width(8),
    borderRadius: width(1.5),
    backgroundColor: AppColors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  logo: {
    width: width(6),
    height: width(6),
  },
  titleStyles: {
    flex: 1,
    marginLeft: width(2),
  },
});
export default styles;
