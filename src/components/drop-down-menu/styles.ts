import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';

const styles = StyleSheet.create({
  modalContainer: {
    alignSelf: 'center',
    bottom: height(1),
    position: 'absolute',
  },
  buttonContainer: {
    borderRadius: width(4),
    backgroundColor: AppColors.white,
    width: width(85),
    // height: height(15),
    justifyContent: 'space-evenly',
  },
  btn: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    height: height(7),
    justifyContent: 'center',
  },
  btnDlt: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    height: height(7),
    justifyContent: 'center',
  },
  cancelBtn: {
    marginTop: height(1.5),
    alignSelf: 'center',
    width: width(85),
    height: height(6),
    justifyContent: 'center',
    borderRadius: width(4),
    backgroundColor: 'white',
    alignItems: 'center',
  },
  btnText: {
    textAlign: 'center',
    fontSize: height(2),
    color: '#595959',
  },
  line: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: AppColors.black + '80',
    height: 0.5,
  },
});
export default styles;
