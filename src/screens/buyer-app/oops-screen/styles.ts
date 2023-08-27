import {StyleSheet} from 'react-native';
import {height, width} from '~utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  successImage: {
    height: height(50),
    width: width(80),
    marginTop: height(13),
  },
  noteText: {
    marginTop: height(2.5),
    marginBottom: height(4),
  },
  btnContainer: {
    marginTop: height(4),
    marginBottom: height(1),
  },
  textView: {
    width: width(85),
    alignItems: 'center',
  },
});
export default styles;
