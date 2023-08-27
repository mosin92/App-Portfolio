import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import en from '~assets/languages/en.json';
import ar from '~assets/languages/ar.json';

// Define a type for the slice state
export interface LanguageTypes {
  selectedLanguage: string;
  selectedLanguageJson: any;
  // isRTL: boolean;
}

// Define the initial state using that type
const initialState: LanguageTypes = {
  selectedLanguage: 'En',
  selectedLanguageJson: en,
  // isRTL: false,
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setAppLanguage: (state, action: PayloadAction<string>) => {
      state.selectedLanguage = action.payload;
      state.selectedLanguageJson = action.payload === 'En' ? en : ar;
      // state.isRTL = action.payload === 'En' ? false : true;
    },
  },
});

export default languageSlice;
