import React, {forwardRef} from 'react';
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import styles from './styles';
import {Controller, Control} from 'react-hook-form';
import AppColors from '~utils/app-colors';
import {H4} from '~components/text/text';
type Props = TextInputProps & {
  placeholderTextColor?: string;
  selectionColor?: string;
  LeftIcon?: Element;
  RightIcon?: Element;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
  onPress?: () => void;
  fieldName: string;
  formControl?: Control;
  errorMsg?: any;
  mainContainerStyles?: ViewStyle;
  containerStyle?: ViewStyle;
  textInputStyle?: ViewStyle;
  errorStyles?: ViewStyle;
};

const Input: React.ForwardRefRenderFunction<any, Props> = (
  {
    LeftIcon,
    RightIcon,
    onLeftIconPress,
    onRightIconPress,
    onPress,
    fieldName,
    formControl,
    errorMsg,
    mainContainerStyles = {},
    containerStyle = {},
    textInputStyle = {},
    errorStyles = {},
    placeholderTextColor = AppColors.brown,
    selectionColor = AppColors.darkBlue + '70',
    ...rest
  },
  ref,
) => {
  return (
    <TouchableOpacity
      style={mainContainerStyles}
      activeOpacity={0.9}
      onPress={onPress}>
      <View style={[styles.container, containerStyle]}>
        {LeftIcon && (
          <TouchableOpacity
            activeOpacity={1}
            onPress={onLeftIconPress}
            style={styles.iconStyleLeft}>
            {LeftIcon}
          </TouchableOpacity>
        )}
        <Controller
          control={formControl}
          name={fieldName}
          render={({field: {onChange, value}}) => (
            <TextInput
              onChangeText={onChange}
              value={value}
              placeholderTextColor={placeholderTextColor}
              selectionColor={selectionColor}
              style={[styles.input, textInputStyle]}
              ref={ref}
              {...rest}
            />
          )}
        />
        {RightIcon && (
          <TouchableOpacity
            activeOpacity={1}
            onPress={onRightIconPress}
            style={styles.iconStyleRight}>
            {RightIcon}
          </TouchableOpacity>
        )}
      </View>
      {errorMsg !== undefined && errorMsg !== '' && (
        <H4
          color={AppColors.red}
          size={2.5}
          containerStyles={[styles.errorStyles, errorStyles]}>
          {errorMsg}
        </H4>
      )}
    </TouchableOpacity>
  );
};

export default forwardRef(Input);
