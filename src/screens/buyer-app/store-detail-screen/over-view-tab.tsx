import React from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import { TagComponent } from '~components';
import { H4 } from '~components/text/text';
import { selectLanguage } from '~store/slices/language';
import { height } from '~utils';
import AppColors from '~utils/app-colors';
import FontFamily from '~utils/font-family';
import styles from './styles';

interface TagItemProps {
  name?: string;
  image?: string;
}
interface TagsProps {
  item: TagItemProps;
  index: string | number;
}
interface Props {
  description?: string;
  tags: Array<TagItemProps>;
}
const OverViewTab = ({ description, tags = [] }: Props) => {
  const selectedLanguage = useSelector(selectLanguage);
  const renderTags = ({ item }: TagsProps) => {
    return <TagComponent name={item.name} image={item.image} />;
  };
  return (
    <ScrollView
      nestedScrollEnabled
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
    >
      <View style={styles.whiteBackgroundView}>
        <H4
          size={3.8}
          fontFamily={FontFamily.SofiaSansBold}
          containerStyles={styles.descriptionTitle}>
          {selectedLanguage?.ServiceDetailsOverview_Screen?.Description_Heading}
        </H4>
        <H4
          lineHeight={height(2.5)}
          fontFamily={FontFamily.SofiaSansLight}
          color={AppColors.brown}>
          {description}
        </H4>
      </View>
      <View style={[styles.whiteBackgroundView, { paddingBottom: height(1) }]}>
        <H4
          size={3.8}
          fontFamily={FontFamily.SofiaSansBold}
          containerStyles={styles.descriptionTitle}>
          {selectedLanguage?.ServiceDetailsOverview_Screen?.Tags_Heading}
        </H4>
        <FlatList
          data={tags}
          keyExtractor={(item, index) => index?.toString()}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapperStyle}
          renderItem={renderTags}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
};

export default OverViewTab;
