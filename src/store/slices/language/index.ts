import {RootState} from '~store';
import languageSlice from './slice';

// Reducer
export const languageSliceReducer = languageSlice.reducer;

// Actions
export const {setAppLanguage} = languageSlice.actions;
// Selectors

export const selectLanguage = (state: RootState) =>
  state.language.selectedLanguageJson;
export const selectedLanguageName = (state: RootState) =>
  state.language.selectedLanguage;
// export const isRTLState = (state: RootState) => state.language.isRTL;
