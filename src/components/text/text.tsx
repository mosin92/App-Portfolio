import React from 'react';
import {Pressable, StyleSheet, Text, TextProps} from 'react-native';
import {width} from '~utils';
import AppColors from '~utils/app-colors';
import FontFamily from '~utils/font-family';

type TextDecorationLine =
  | 'line-through'
  | 'underline'
  | 'underline line-through'
  | 'line-through'
  | 'none';
interface Props {
  children?: any;
  color?: string;
  onPress?(): void;
  textStyles?: object;
  fontFamily?: string;
  size?: number;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  textProps?: TextProps;
  onPress?(): void;
  textDecorationLine?: TextDecorationLine;
  containerStyles?: object;
  numberOfLines?: number;
  lineHeight?: number;
  animation?: string;
  duration?: number;
  delay?: number;
}
export const CustomText = ({
  children = '',
  size = 4,
  textAlign = 'auto',
  color = AppColors.white,
  textStyles = {},
  fontFamily = FontFamily.SofiaSansRegular,
  textProps,
  onPress = () => {},
  containerStyles = {},
  numberOfLines,
}: Props) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: width(size),
      color: color,
      textAlign: textAlign,
      fontFamily: fontFamily,
    },
  });
  return (
    <Pressable
      disabled={typeof onPress == 'undefined'}
      onPress={onPress}
      style={containerStyles}>
      <Text
        numberOfLines={numberOfLines}
        style={[styles.text, textStyles]}
        {...textProps}>
        {children}
      </Text>
    </Pressable>
  );
};

export const H1 = ({
  children = '',
  size = 12,
  textAlign,
  color = AppColors.darkBlue,
  textStyles,
  fontFamily = FontFamily.SofiaSansExtraBold,
  textProps,
  onPress = undefined,
  numberOfLines,
  containerStyles,
  lineHeight,
}: Props) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: width(size),
      color: color,
      textAlign: textAlign,
      fontFamily: fontFamily,
      lineHeight: lineHeight,
    },
  });
  return (
    <Pressable
      disabled={typeof onPress == 'undefined'}
      onPress={onPress}
      style={containerStyles}>
      <Text
        numberOfLines={numberOfLines}
        style={[styles.text, textStyles]}
        {...textProps}>
        {children}
      </Text>
    </Pressable>
  );
};
export const H2 = ({
  children = '',
  size = 4.5,
  textAlign,
  color = AppColors.darkBlue,
  textStyles,
  fontFamily = FontFamily.SofiaSansRegular,
  textProps,
  onPress = undefined,
  numberOfLines,
  containerStyles,
}: Props) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: width(size),
      color: color,
      textAlign: textAlign,
      fontFamily: fontFamily,
    },
  });
  return (
    <Pressable
      disabled={typeof onPress == 'undefined'}
      onPress={onPress}
      style={containerStyles}>
      <Text
        numberOfLines={numberOfLines}
        style={[styles.text, textStyles]}
        {...textProps}>
        {children}
      </Text>
    </Pressable>
  );
};
export const H3 = ({
  children = '',
  size = 4.5,
  textAlign,
  color = AppColors.darkBlue,
  textStyles,
  fontFamily = FontFamily.SofiaSansBold,
  textProps,
  onPress = undefined,
  numberOfLines,
  containerStyles,
  lineHeight,
}: Props) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: width(size),
      color: color,
      textAlign: textAlign,
      fontFamily: fontFamily,
      lineHeight: lineHeight,
    },
  });
  return (
    <Pressable
      disabled={typeof onPress == 'undefined'}
      onPress={onPress}
      style={containerStyles}>
      <Text
        numberOfLines={numberOfLines}
        style={[styles.text, textStyles]}
        {...textProps}>
        {children}
      </Text>
    </Pressable>
  );
};

export const H4 = ({
  children = '',
  size = 3.6,
  textAlign,
  color = AppColors.darkBlue,
  textStyles,
  fontFamily = FontFamily.SofiaSansRegular,
  textProps,
  onPress = undefined,
  numberOfLines,
  containerStyles,
  lineHeight,
}: Props) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: width(size),
      color: color,
      textAlign: textAlign,
      fontFamily: fontFamily,
      lineHeight: lineHeight,
    },
  });
  return (
    <Pressable
      disabled={typeof onPress == 'undefined'}
      onPress={onPress}
      style={containerStyles}>
      <Text
        numberOfLines={numberOfLines}
        style={[styles.text, textStyles]}
        {...textProps}>
        {children}
      </Text>
    </Pressable>
  );
};

export const UnderLineText = ({
  children = '',
  size = 3.6,
  textAlign,
  color = AppColors.darkBlue,
  textStyles,
  fontFamily = FontFamily.SofiaSansRegular,
  textProps,
  onPress = undefined,
  numberOfLines,
  containerStyles,
  lineHeight,
  textDecorationLine = 'underline',
}: Props) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: width(size),
      color: color,
      textAlign: textAlign,
      fontFamily: fontFamily,
      lineHeight: lineHeight,
      textDecorationLine: textDecorationLine,
    },
  });
  return (
    <Pressable
      disabled={typeof onPress == 'undefined'}
      onPress={onPress}
      style={containerStyles}>
      <Text
        numberOfLines={numberOfLines}
        style={[styles.text, textStyles]}
        {...textProps}>
        {children}
      </Text>
    </Pressable>
  );
};
