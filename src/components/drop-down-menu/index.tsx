import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {CustomText} from '~components/text/text';
import AppColors from '~utils/app-colors';
import styles from './styles';
interface Props {
  visible: boolean;
  onClose?: () => void;
  onPressFirstBtn?: () => void;
  onPressSecondBtn?: () => void;
  onPressThirdBtn?: () => void;
  firstBtnText?: string;
  secondBtnText?: string;
  thirdText?: string;
}
const ImageDropDown = ({
  visible = false,
  onClose = () => {},
  onPressFirstBtn = () => {},
  onPressSecondBtn = () => {},
  firstBtnText = '',
  secondBtnText = '',
  thirdText = '',
  onPressThirdBtn = () => {},
}: Props) => {
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      animationIn="fadeInUpBig"
      animationInTiming={1000}>
      <View style={styles.modalContainer}>
        <View style={styles.buttonContainer}>
          {firstBtnText !== '' && (
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.btn}
              onPress={onPressFirstBtn}>
              <CustomText color={AppColors.darkBlue} onPress={onPressFirstBtn}>{firstBtnText}</CustomText>
            </TouchableOpacity>
          )}
          <View style={styles.line} />
          {secondBtnText !== '' && (
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.btnDlt}
              onPress={onPressSecondBtn}>
              <CustomText color={AppColors.darkBlue} onPress={onPressSecondBtn}>
                {secondBtnText}
              </CustomText>
            </TouchableOpacity>
          )}
          {thirdText !== '' && (
            <>
              <View style={styles.line} />
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.btnDlt}
                onPress={onPressThirdBtn}>
                <CustomText color={AppColors.darkBlue} onPress={onPressThirdBtn}>{thirdText}</CustomText>
              </TouchableOpacity>
            </>
          )}
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.cancelBtn}
          onPress={onClose}>
          <CustomText color={AppColors.darkBlue}>Cancel</CustomText>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
export default ImageDropDown;
