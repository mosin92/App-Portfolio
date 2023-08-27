import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: height(8),
  },
  headerContainerStyle: {
    backgroundColor: AppColors.white,
    width: '100%',
  },
  backView: {
    backgroundColor: AppColors.lightGray,
  },
  listView: {
    marginTop: height(2),
  },
});
export default styles;
