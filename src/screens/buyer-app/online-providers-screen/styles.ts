import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/app-colors';
import FontFamily from '~utils/font-family';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  categoryFlatlistStyles: {
    width: '100%',
  },
  categoryContentContainerStyle: {
    alignSelf: 'center',
    width: '92%',
    paddingBottom: height(3),
    paddingTop: height(1),
  },
  categoryBackgroundStyles: {
    width: width(44),
    height: height(23),
    marginBottom: height(1.8),
  },
  categoryBackgroundImageStyles: {
    borderRadius: width(3),
  },
  categoryBackgroundViewStyles: {
    borderRadius: width(3),
    justifyContent: 'flex-end',
    paddingBottom: height(3),
  },
  columnWrapperStyle: {
    width: '100%',
    justifyContent: 'space-between',
  },
  containerStyles: {
    width: width(44),
    height: height(22),
    marginBottom: height(1.8),
  },
  logoStyles: {
    width: width(19),
    height: width(19),
    borderRadius: width(7.4),
  },
  providerNameTextStyles:{
    fontSize:width(4),
    marginTop:height(.8)
  },
  productCategoryTextStyles:{
    fontSize:width(3.3),
    color:AppColors.darkBlue,
    fontFamily:FontFamily.SofiaSansRegular
  },
  productCategoryViewStyles:{
  }
});
export default styles;
