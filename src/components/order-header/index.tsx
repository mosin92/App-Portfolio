import {View, Text, ViewStyle} from 'react-native';
import React from 'react';
import {Header} from '~components';
import AppColors from '~utils/app-colors';

type Props = {
  onLeftIconPress?: () => void;
  onFilterIconPress?: () => void;
  onTextPress?: () => void;
  onSharePress?: () => void;
  onMenuPress?: () => void;
  onRightIconPress?: () => void;
  title: string;
  rightText?: string;
  containerStyle?: ViewStyle;
  backView?: ViewStyle;
  textColor?: string;
  iconColor?: string;
  footerComponent?: JSX.Element;
};

const OrderHeader: React.FC<Props> = ({
  onLeftIconPress,
  onFilterIconPress,
  onTextPress,
  onMenuPress,
  onSharePress,
  title,
  rightText,
  containerStyle = {},
  textColor,
  iconColor = AppColors.darkBlue,
  backView,
  onRightIconPress,
  footerComponent,
}) => {
  return (
    <View>
      <Header
        title={title}
        onLeftIconPress={onLeftIconPress}
        onFilterIconPress={onFilterIconPress}
        onTextPress={onTextPress}
        onMenuPress={onMenuPress}
        onSharePress={onSharePress}
        rightText={rightText}
        containerStyle={containerStyle}
        textColor={textColor}
        iconColor={iconColor}
        backView={backView}
        onRightIconPress={onRightIconPress}
      />
      {footerComponent}
    </View>
  );
};

export default OrderHeader;
