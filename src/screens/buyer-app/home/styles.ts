import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: height(8),
  },
  searchView: {
    width: '92%',
    backgroundColor: AppColors.white,
    height: height(7),
    borderRadius: width(1.8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width(5),
    marginTop: height(0.8),
    shadowColor: AppColors.darkBlue,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.0,
    elevation: 1,
  },
  innerSearchView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowHeadingView: {
    width: '92%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height(3),
    marginBottom: height(2),
  },
  categoryFlatlistStyles: {
    width: '100%',
  },
  categoryContentContainerStyle: {
    paddingHorizontal: width(4),
  },
  itemSeparatorStyles: {
    width: width(4),
  },
});
export default styles;
