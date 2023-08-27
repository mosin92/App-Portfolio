import React, {forwardRef, useImperativeHandle, useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import DocumentPicker, {types} from 'react-native-document-picker';
import ImageDropDown from '~components/drop-down-menu';
interface Props {
  onFilesSelected?: any;
  isDocumentPicker?: boolean;
  multiple?: boolean;
  cropping?: boolean;
  maxFiles?: number;
}
const FilePickerModal: React.ForwardRefRenderFunction<any, Props> = (
  {
    onFilesSelected,
    isDocumentPicker = false,
    multiple = false,
    cropping = true,
    maxFiles = 8,
  },
  ref,
) => {
  const [isVisible, setVisible] = useState(false);
  useImperativeHandle(ref, () => ({
    show: function () {
      setVisible(true);
    },
    hide: function () {
      setVisible(false);
    },
    cleanTempImages: () => {
      ImagePicker.clean()
        .then(() => {
          console.log('removed all tmp images from tmp directory');
        })
        .catch(console.log);
    },
  }));
  function openCamera() {
    ImagePicker.openCamera({
      cropping: cropping,
      mediaType: 'photo',
      compressImageQuality: 1,
    }).then(onFilesSelected);
  }
  function openGallery() {
    ImagePicker.openPicker({
      cropping: cropping,
      mediaType: 'photo',
      // height: 400,
      // width: 400,
      multiple: multiple,
      maxFiles: maxFiles,
      compressImageQuality: 1,
    }).then(onFilesSelected);
  }
  async function chooseDocument() {
    try {
      const pickerResult = await DocumentPicker.pickSingle({
        presentationStyle: 'fullScreen',
        copyTo: 'documentDirectory',
        type: types.pdf,
      });
      onFilesSelected(pickerResult);
    } catch (e) {}
  }
  function openPicker(type = 0) {
    console.log('sss');
    setVisible(false);
    setTimeout(
      type === 0 ? openCamera : type === 1 ? openGallery : chooseDocument,
      700,
    );
  }
  return (
    <ImageDropDown
      visible={isVisible}
      firstBtnText="Take Photo"
      secondBtnText="Choose from Library"
      onPressFirstBtn={() => openPicker(0)}
      onPressSecondBtn={() => openPicker(1)}
      onPressThirdBtn={() => openPicker(2)}
      onClose={() => setVisible(false)}
      thirdText={isDocumentPicker ? 'Choose Document' : ''}
    />
  );
};
export default forwardRef(FilePickerModal);
