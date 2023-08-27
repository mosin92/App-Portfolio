import React, { forwardRef } from 'react';
import {
  View,
  ViewStyle,
} from 'react-native';
import styles from './styles';
import { Controller, Control } from 'react-hook-form';
import AppColors from '~utils/app-colors';
import { H4 } from '~components/text/text';
import PhoneInput from 'react-native-phone-number-input';
type Props = {
  onChangeCountry?: any;
  fieldName: string;
  formControl?: Control;
  errorMsg?: any;
  defaultCode?: any;
  mainContainerStyles?: ViewStyle;
  containerStyle?: ViewStyle;
  textInputStyle?: ViewStyle;
  errorStyles?: ViewStyle;
};

const PhoneInputComponent: React.ForwardRefRenderFunction<any, Props> = (
  {
    onChangeCountry,
    fieldName,
    formControl,
    errorMsg,
    defaultCode = "SA",
    mainContainerStyles = {},
    containerStyle = {},
    errorStyles = {},
  },
  ref,
) => {
  return (
    <View
      style={mainContainerStyles}>
      <View style={[styles.container, containerStyle]}>
        <Controller
          control={formControl}
          name={fieldName}
          render={({ field: { onChange, value } }) => (
            <PhoneInput
              layout="first"
              onChangeCountry={onChangeCountry}
              onChangeText={onChange}
              value={value}
              withShadow={false}
              textContainerStyle={styles.textContainerStyle}
              containerStyle={styles.containerStyle}
              textInputStyle={styles.textInputStyle}
              codeTextStyle={styles.codeTextStyle}
              countryPickerButtonStyle={styles.countryPickerButtonStyle}
              countryPickerProps={{
                withEmoji: false,
                renderFlagButton: null,
              }}
              ref={ref}
              textInputProps={{ maxLength: 10 }}
              placeholder="1234 567 890"
              defaultCode={defaultCode}
            />
          )}
        />
      </View>
      {errorMsg !== undefined && errorMsg !== '' && (
        <H4
          color={AppColors.red}
          size={2.5}
          containerStyles={[styles.errorStyles, errorStyles]}>
          {errorMsg}
        </H4>
      )}
    </View>
  );
};

export default forwardRef(PhoneInputComponent);
