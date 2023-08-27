import React from 'react';
import {
  Image,
  Linking,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  ScrollView,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Octicons from 'react-native-vector-icons/Octicons';
import { useSelector } from 'react-redux';
import {
  FBSocialLogo,
  InstagramSocialLogo,
  SnapchatSocialLogo,
  TwitterSocialLogo,
  YoutubeSocialLogo,
} from '~assets/images';
import { H2, H3, H4 } from '~components/text/text';
import { selectLanguage } from '~store/slices/language';
import { CommonStyles, height, width } from '~utils';
import AppColors from '~utils/app-colors';
import FontFamily from '~utils/font-family';
import styles from './styles';

interface AuthorProfileProps {
  name?: string;
  image?: string;
  date?: string;
  type?: string;
  address?: string;
  phone?: string;
  email?: string;
  link?: string;
  instaImages?: string[]
}
interface RowProps {
  title?: string;
  value?: string;
  onPress?: () => void;
  rowStyles?: ViewStyle;
}
interface InstaItemProps {
  item?: string;
  index?: string | number;
}
interface Props {
  profileDetails?: AuthorProfileProps;
}
const AboutTab = ({ profileDetails }: Props) => {
  const selectedLanguage = useSelector(selectLanguage);

  const ProfileComponent = ({ name, date, image, type }: AuthorProfileProps) => {
    return (
      <View style={styles.mainRow}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.imageView}
        />
        <View style={styles.titleView}>
          <H3 size={4}>{name}</H3>
          <H4 size={3.3}>
            {selectedLanguage?.ServiceDetailsOverview_Screen?.Since_Label}{' '}
            <Text style={{ color: AppColors.blue }}>{date}</Text>
          </H4>
        </View>
        <View style={styles.btnsView}>
          <Octicons name="person" size={width(3)} color={AppColors.blue} />
          <H4 color={AppColors.blue} size={3.3}>
            {type}
          </H4>
        </View>
      </View>
    );
  };
  const RowComponent = ({ title, value, onPress, rowStyles }: RowProps) => {
    return (
      <View style={[styles.mainRow, styles.rowView, rowStyles]}>
        <H4 color={AppColors.brown}>{title}</H4>
        <H4
          containerStyles={styles.valueStyles}
          textAlign="right"
          fontFamily={FontFamily.SofiaSansMedium}
          onPress={onPress}>
          {value}
        </H4>
      </View>
    );
  };
  const renderInstaGallery = ({ item }: InstaItemProps) => {
    return (
      <View style={styles.instaImageView}>
        <Image source={{ uri: item }} resizeMode='cover' style={styles.instaImage} />
      </View>
    )
  }
  return (
    <ScrollView
      nestedScrollEnabled={true}
      contentContainerStyle={styles.contentContainerStyle}
      showsVerticalScrollIndicator={false}>
      <View style={styles.whiteBackgroundView}>
        <H4
          size={3.8}
          fontFamily={FontFamily.SofiaSansBold}
          containerStyles={styles.descriptionTitle}>
          {
            selectedLanguage?.ServiceDetailsOverview_Screen
              ?.AboutAuthor_Heading
          }
        </H4>
        <ProfileComponent
          date={profileDetails?.date}
          image={profileDetails?.image}
          name={profileDetails?.name}
          type={profileDetails?.type}
        />
        <RowComponent
          title={
            selectedLanguage?.ServiceDetailsOverview_Screen?.Address_Label
          }
          value={profileDetails?.address}
        />
        <RowComponent
          title={selectedLanguage?.ServiceDetailsOverview_Screen?.Phone_Label}
          value={profileDetails?.phone}
        />
        <RowComponent
          title={selectedLanguage?.ServiceDetailsOverview_Screen?.Email_Label}
          value={profileDetails?.email}
        />
        <RowComponent
          title={selectedLanguage?.ServiceDetailsOverview_Screen?.Link_Label}
          value={profileDetails?.link}
          onPress={() => Linking.openURL('http://www.google.com')}
        />
        <H4
          size={3.8}
          fontFamily={FontFamily.SofiaSansBold}
          containerStyles={[styles.descriptionTitle, { marginTop: height(2) }]}>
          {
            selectedLanguage?.ServiceDetailsOverview_Screen
              ?.SocialMedia_Heading
          }
        </H4>
        <View style={styles.socialView}>
          <TouchableOpacity activeOpacity={0.9}>
            <Image
              source={FBSocialLogo}
              resizeMode="cover"
              style={styles.logo}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9}>
            <Image
              source={TwitterSocialLogo}
              resizeMode="cover"
              style={styles.logo}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9}>
            <Image
              source={SnapchatSocialLogo}
              resizeMode="cover"
              style={styles.logo}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9}>
            <Image
              source={YoutubeSocialLogo}
              resizeMode="cover"
              style={styles.logo}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9}>
            <Image
              source={InstagramSocialLogo}
              resizeMode="cover"
              style={styles.logo}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.whiteBackgroundView}>
        <H4
          size={3.8}
          fontFamily={FontFamily.SofiaSansBold}
          containerStyles={styles.descriptionTitle}>
          {selectedLanguage?.ServiceDetailsOverview_Screen?.OpenHours_Heading}
        </H4>
        <RowComponent
          title={
            selectedLanguage?.ServiceDetailsOverview_Screen?.Monday_Label
          }
          value={'07:00 AM - 09:00 PM'}
          rowStyles={styles.marginTop}
        />
        <RowComponent
          title={
            selectedLanguage?.ServiceDetailsOverview_Screen?.Tuesday_Label
          }
          value={'07:00 AM - 09:00 PM'}
        />
        <RowComponent
          title={
            selectedLanguage?.ServiceDetailsOverview_Screen?.Wednesday_Label
          }
          value={'07:00 AM - 09:00 PM'}
        />
        <RowComponent
          title={
            selectedLanguage?.ServiceDetailsOverview_Screen?.Thursday_Label
          }
          value={'07:00 AM - 09:00 PM'}
        />
        <RowComponent
          title={
            selectedLanguage?.ServiceDetailsOverview_Screen?.Friday_Label
          }
          value={'07:00 AM - 09:00 PM'}
        />
        <RowComponent
          title={
            selectedLanguage?.ServiceDetailsOverview_Screen?.Saturday_Label
          }
          value={'07:00 AM - 09:00 PM'}
        />
        <RowComponent
          title={
            selectedLanguage?.ServiceDetailsOverview_Screen?.Sunday_Label
          }
          value={'07:00 AM - 09:00 PM'}
        />
      </View>

      <View style={styles.whiteBackgroundView}>
        <H4
          size={3.8}
          fontFamily={FontFamily.SofiaSansBold}
          containerStyles={styles.descriptionTitle}>
          {selectedLanguage?.ServiceDetailsOverview_Screen?.PriceRange_Heading}
        </H4>
        <View style={styles.priceRangeView}>
          <View style={CommonStyles.width45}>
            <H2
              size={4}
              fontFamily={FontFamily.SofiaSansBold}
            >SAR</H2>
            <H4
              size={3.3}
              color={AppColors.brown}
              fontFamily={FontFamily.SofiaSansRegular}
              lineHeight={height(2.5)}>
              {selectedLanguage?.ServiceDetailsOverview_Screen?.Moderate_Label}</H4>
          </View>
          <View style={styles.verticalLine}></View>
          <View style={CommonStyles.width45}>
            <H2
              size={4}
              fontFamily={FontFamily.SofiaSansBold}
              textAlign='right'>60SAR-100SAR</H2>
            <H4
              size={3.3}
              color={AppColors.brown}
              fontFamily={FontFamily.SofiaSansRegular}
              lineHeight={height(2.5)}
              textAlign='right'>{selectedLanguage?.ServiceDetailsOverview_Screen?.Rate_Label}</H4>
          </View>
        </View>
      </View>
      <View style={styles.whiteBackgroundView}>
        <H4
          size={3.8}
          fontFamily={FontFamily.SofiaSansBold}
          containerStyles={styles.descriptionTitle}>
          {selectedLanguage?.ServiceDetailsOverview_Screen?.InstagramGallery_Heading}
        </H4>
        <View>
          <FlatList data={profileDetails?.instaImages}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, i) => i.toString()}
            renderItem={renderInstaGallery}
            ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default AboutTab;
