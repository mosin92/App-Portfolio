import {StyleSheet} from 'react-native';
import {height, width} from '~utils';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
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
  },
  textView: {
    alignItems: 'center',
    width: width(80),
  },
});
export default styles;
