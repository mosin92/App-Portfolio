import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headerContainerStyle: {
    backgroundColor: AppColors.white,
    width: '100%',
  },

  backView: {
    backgroundColor: AppColors.lightGray,
  },
  headerTextContainer: {
    backgroundColor: AppColors.white,
    paddingBottom: height(3),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderFootText: {
    color: AppColors.blue,
    textAlign: 'center',
  },
  orderDetailContainer: {
    marginTop: height(2),
    width: width(87),
    backgroundColor: AppColors.white,
    height: height(67),
    borderRadius: width(5),
    paddingHorizontal: width(6),
    paddingVertical: height(3),
  },
  cardheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ordername: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height(1),
    alignItems: 'center',
    marginBottom: height(1),
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  callToActionBtn: {
    width: width(10),
    height: width(10),
    backgroundColor: AppColors.blue90,
    borderRadius: width(5),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  storename: {
    maxWidth: width(50),
  },
  orderloc: {
    // marginTop
  },
  itemImg: {
    marginTop: height(2),
    borderRadius: width(4),
    width: '100%',
    height: height(20),
  },
  orderstatus: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineStyle: {
    marginTop: height(3),
    borderBottomWidth: height(0.25),
    borderBottomColor: AppColors.blue50,
    width: width(10),
  },
  orderStatusContainer: {
    marginTop: height(3),
    backgroundColor: AppColors.blue63,
    width: width(40),
    height: height(6),
    paddingHorizontal: width(3),
    justifyContent: 'center',
    borderRadius: width(15),
  },
  invoice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: height(1),
  },
  invoiceFooter: {
    marginTop: height(2),
  },
  ordertrack: {
    width: width(90),
    height: height(17),
    backgroundColor: AppColors.white,
    borderRadius: width(6),
    marginBottom: height(2),
    paddingVertical: height(2),
  },
  orderTrackrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width(6),
    borderBottomWidth: 1,
    borderBottomColor: AppColors.gray3,
    paddingBottom: height(1),
    // borderStyle: 'dashed',
  },
  trackStyle: {
    flexDirection: 'row',
    paddingHorizontal: width(6),
    marginTop: height(2),
    alignItems: 'center',
  },
  step: {
    height: width(6),
    width: width(6),
    borderRadius: width(10),
    backgroundColor: AppColors.blue,
  },
  trackline: {
    borderBottomWidth: height(0.6),
    borderBottomColor: AppColors.blue,
    width: width(17),
  },
  tractText: {
    paddingTop: height(1),
    paddingRight: width(6),
    maxWidth: width(30),
  },
  nonactivestep: {
    height: width(6),
    width: width(6),
    borderRadius: width(10),
    backgroundColor: AppColors.blue63,
  },
  nonActiveTrackLine: {
    borderBottomWidth: height(0.6),
    borderBottomColor: AppColors.blue63,
    width: width(17),
  },
  currentStep: {
    height: width(6),
    width: width(6),
    borderRadius: width(10),
    backgroundColor: AppColors.white,
    borderWidth: width(1),
    borderColor: AppColors.blue,
  },
  trackTextContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: width(6),
  },
  clientDetail: {
    height: height(30),
    width: width(90),
    borderRadius: width(6),
    backgroundColor: AppColors.white,
    paddingVertical: height(2),
    marginBottom: height(2),
  },
  clientdetaiHead: {
    paddingHorizontal: width(6),
    borderBottomWidth: width(0.3),
    borderBottomColor: AppColors.gray3,
    justifyContent: 'center',
    paddingVertical: height(2),
    borderStyle: 'dotted',
  },
  clientProfile: {
    flexDirection: 'row',
    paddingHorizontal: width(6),
    marginTop: height(2),
    alignItems: 'center',
  },
  profileimg: {
    width: width(15),
    height: width(15),
    borderRadius: width(7),
    marginRight: width(3),
  },
  invoicebtn: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    height: height(7),
    backgroundColor: AppColors.blue63,
    marginTop: height(2),
    borderRadius: width(3),
    flexDirection: 'row',
    paddingHorizontal: width(3),
  },
  receivedOrderbtn: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    height: height(8),
    backgroundColor: AppColors.blue,
    borderRadius: width(3),
    flexDirection: 'row',
    paddingHorizontal: width(3),
    marginBottom: height(3),
  },
  iconBtn: {
    paddingHorizontal: width(2),
  },
});
export default styles;
