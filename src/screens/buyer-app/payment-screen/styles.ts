import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: AppColors.blue50,
  },
  headerContainerStyle: {
    backgroundColor: AppColors.blue50,
    width: '100%',
  },
  modalView: {
    backgroundColor: AppColors.white30,
    width: width(100),
    borderTopLeftRadius: width(9),
    borderTopRightRadius: width(9),
    marginTop: height(15),
    paddingBottom: height(3),
    alignItems: 'center',
  },
  shopDetailContainer: {
    position: 'absolute',
    zIndex: 1000,
    top: height(13),
  },
  ProductDetailListContainer: {
    marginTop: height(17),
  },
  noteForRiderView: {
    width: width(87),
    backgroundColor: AppColors.white,
    borderRadius: width(5),
    paddingVertical: height(3),
    marginBottom: height(2),
    paddingHorizontal: width(5),
  },
  noteText: {
    marginTop: height(3),
  },
  backView: {
    backgroundColor: AppColors.blue63,
  },
});
export default styles;
