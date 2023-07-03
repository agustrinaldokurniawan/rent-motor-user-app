import { extendTheme } from "native-base";
// Extend the theme to include custom colors, fonts, etc
const newColorTheme = {
  primary: {
    900: '#331300',
    800: '#662600',
    700: '#993900',
    600: '#FF5F00',
    500: '#FF6F00',
    400: '#FF7F33',
    300: '#FF9F66',
    200: '#FFBF99',
    100: '#FFDFCC',
    50: '#FFEFE6'
  }
};
export const theme = extendTheme({ colors: newColorTheme });