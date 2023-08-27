import * as React from 'react';
import { Animated, TouchableOpacity, View } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import { useSelector } from 'react-redux';
import { selectLanguage } from '~store/slices/language';
import AboutTab from './about-tab';
import ItemsTab from './items-tab';
import OverViewTab from './over-view-tab';
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
interface TagItemProps {
  name?: string;
  image?: string;
}
type Props = {
  storeDescription?: string;
  tags: Array<TagItemProps>;
  storeAutherProfileDetails?: AuthorProfileProps;
};
const TabBarView = ({
  storeDescription,
  tags,
  storeAutherProfileDetails,
}: Props) => {

  const selectedLanguage = useSelector(selectLanguage);
  const OverView = () => (
    <OverViewTab description={storeDescription} tags={tags} />
  );

  const About = () => <AboutTab profileDetails={storeAutherProfileDetails} />;
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'overView', title:
        selectedLanguage?.ServiceDetailsOverview_Screen
          ?.Overview_Tab
    },
    {
      key: 'about', title: selectedLanguage?.ServiceDetailsOverview_Screen
        ?.About_Tab
    },
    {
      key: 'items', title: selectedLanguage?.ServiceDetailsOverview_Screen
        ?.Items_Tab
    },
  ]);

  const _renderTabBar = (props: any) => {
    const inputRange = props.navigationState.routes.map(
      (x: any, i: number) => i,
    );

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route: any, i: any) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex: number) =>
              inputIndex === i ? 1 : 0.5,
            ),
          });

          return (
            <View style={styles.tabItemView}>
              <TouchableOpacity
                style={styles.tabItem}
                onPress={() => setIndex(i)}>
                <Animated.Text style={[styles.barItemText, { opacity }]}>
                  {route.title}
                </Animated.Text>
              </TouchableOpacity>
              {index === i && <View style={styles.bar} />}
            </View>
          );
        })}
      </View>
    );
  };
  const renderScene = SceneMap({
    overView: () => (<OverViewTab description={storeDescription} tags={tags} />),
    about: () => <AboutTab profileDetails={storeAutherProfileDetails} />,
    items: () => (<ItemsTab description={storeDescription} />),
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={_renderTabBar}
    />
  );
};

export default TabBarView;
