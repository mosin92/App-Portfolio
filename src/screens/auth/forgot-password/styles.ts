import {Platform, StyleSheet} from 'react-native';
import {height, width} from '~utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
  forgetPasswordTextView: {
    marginTop: height(6),
    alignSelf: 'flex-start',
    marginLeft: width(5),
    marginBottom: height(10),
  },
  textInputContainer: {
    marginBottom: height(10),
  },
  textInput: {
    width: width(76),
  },
  backToLoginTextView: {
    alignSelf: 'center',
    marginTop:Platform.OS==='ios'?height(20): height(23),
  },
});
export default styles;
