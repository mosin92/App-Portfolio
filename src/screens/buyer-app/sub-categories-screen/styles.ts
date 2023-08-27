import {StyleSheet} from 'react-native';
import {height, width} from '~utils';

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
});
export default styles;
