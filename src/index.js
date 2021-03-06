import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import App from './components/App';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import croppedStarImage from './assets/images/bg_cropped1.9_resized_milkyway.jpg'

// setting a dark theme by default
const muiTheme = createMuiTheme({
  palette: {
    type: "dark",
    grey: {
      800: "#000000", // overrides failed
      900: "#121212" // overrides success
    }
  },
  // overriding <body> to add background image
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          '&::after': {
            content: '""',
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: -1,
            height: '100vh',
            background: `url(${croppedStarImage}) center center`, // maybe just center center
            WebkitBackgroundSize: 'cover',
            OBackgroundSize: 'cover',
            MozBackgroundSize: 'cover',
            backgroundSize: 'cover',
          }
        }
      }
    }
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={muiTheme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);

