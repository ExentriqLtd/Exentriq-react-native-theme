import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { ExentriqColors } from './ExentriqColors';

export const ExentriqTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      customColor: '#BADA55',
      color: ExentriqColors.turquoise.eqGreenTurquoise50,
      primary: ExentriqColors.turquoise.eqGreenTurquoise500,
      textOnPrimary: ExentriqColors.generic.white,
      accent: '#1bbc9b',
      background: '#ffffff',
      error: '#B00020',
      onBackground: '#000000',
      onSurface: '#000000',
    },
    fonts: {
      ...DefaultTheme.fonts,
    },
    userDefinedThemeProperty: '',
    animation: {
      ...DefaultTheme.animation,
      customProperty: 1,
    },
  };

  export const ExentriqDarkTheme: ReactNativePaper.Theme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      customColor: '#BADA55',
    },
    fonts: {
      ...DarkTheme.fonts,
    },
    userDefinedThemeProperty: '',
    animation: {
      ...DarkTheme.animation,
      customProperty: 1,
    },
  };