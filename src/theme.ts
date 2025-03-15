
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
      primary: {
        main:'rgb(51, 50, 50)',
      },
      secondary: {
        main:'rgb(90, 196, 60)',
      },
    },
    typography: {
        fontFamily: //"Futura PT"
        //"Bodoni"
        //"Gotham"
        //"Times"
        //"Baskerville"
        //"Roboto"
        "Helvetica Neue"
        //"Segoe UI"
    }
  });
  theme = responsiveFontSizes(theme);
  export default theme