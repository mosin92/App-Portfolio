import {StyleSheet} from 'react-native';
import {height} from '~utils';

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
    width: '92%',
    paddingBottom: height(3),
    paddingTop: height(1),
  },
});
export default styles;
