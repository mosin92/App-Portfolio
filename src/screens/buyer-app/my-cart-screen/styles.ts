import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: height(4),
  },
  headerContainerStyle: {
    backgroundColor: AppColors.white,
    width: '100%',
  },
  productFlatlistStyles: {
    marginTop: height(1),
    height: height(80),
  },
  DeliveryScheduleView: {
    width: width(92),
    backgroundColor: AppColors.white,
    borderRadius: width(5),
    paddingHorizontal: width(5),
    paddingVertical: height(2.5),
    marginBottom: height(1),
  },
  ChargesView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width(82),
    marginBottom: height(0.5),
  },
  addressView: {
    backgroundColor: AppColors.lightGray,
    paddingHorizontal: width(3),
    paddingBottom: height(1.2),
    paddingTop: height(2),
    width: width(82),
    borderRadius: width(5),
    alignItems: 'center',
    marginTop: height(2),
  },
  addressTextView: {
    width: width(70),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  locationText: {
    width: width(50),
    alignSelf: 'flex-start',
    marginLeft: width(3),
  },
  addressText: {
    marginTop: height(2),
    marginBottom: height(2),
  },
  deliveryTextView: {
    width: width(70),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: height(2),
  },
  CommentBox: {
    width: width(85),
    color: AppColors.darkBlue,
    maxHeight: height(15),
  },
  iconView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    marginRight: width(2),
  },
  btnStyle: {
    marginTop: height(1.5),
  },

});
export default styles;
