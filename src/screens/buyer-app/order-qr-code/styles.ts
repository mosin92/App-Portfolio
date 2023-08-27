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
  detailCard: {
    marginTop: height(2.5),
    backgroundColor: AppColors.white,
    width: width(90),
    height: height(25),
    borderRadius: width(4),
    paddingVertical: height(3),
  },
  orderinfo: {
    flexDirection: 'row',
    paddingHorizontal: width(5),
  },
  iconboxContainer: {
    backgroundColor: AppColors.blue90,
    justifyContent: 'center',
    alignItems: 'center',
    width: width(14),
    height: height(7),
    borderRadius: width(2),
  },
  boxicon: {
    width: width(6),
    height: width(6),
  },
  orderRef: {
    marginLeft: width(4),
    justifyContent: 'center',
  },
  orderdate: {
    flex: 1,
    alignItems: 'flex-end',
    alignSelf: 'baseline',
  },
  lineStyle: {
    height: height(0.2),
    borderBottomWidth: width(0.3),
    width: width(90),
    borderBottomColor: AppColors.gray1,
    marginTop: height(4),
    marginBottom: height(2),
  },
  orderLocSection: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: width(5),
  },
  iconflex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderLoc: {
    flex: 1,
  },
  orderLocIcon: {
    marginRight: width(2),
  },
  verticalLineStyle: {
    borderLeftWidth: width(0.3),
    height: '100%',
    paddingHorizontal: width(2),
    borderLeftColor: AppColors.gray1,
  },
  orderQrContainer: {
    marginTop: height(3),
    height: height(45),
    backgroundColor: AppColors.white,
    width: width(90),
    alignItems: 'center',
    borderRadius: width(4),
    justifyContent: 'center',
  },
  qrfooter: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height(7),
  },
  qrText: {
    marginTop: height(2),
  },
  addressText: {
    marginTop: height(1),
  },
  QrnoStyle: {
    letterSpacing: 5,
  },
  qrContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  footerText: {
    marginBottom: height(2.5),
  },
});

export default styles;
