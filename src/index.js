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
          "&::after": {
            content: '""',    // these double quotes are required
            position: 'fixed', /* stretch a fixed position to the whole screen */
            top: 0,
            height: '100vh', /* fix for mobile browser address bar appearing disappearing */
            left: 0,
            right: 0,
            zIndex: -1, /* needed to keep in the background */
            background: `url(${croppedStarImage}) center center`,
            webkitBackgroundSize: 'cover',
            OBackgroundSize: 'cover',
            MozBackgroundSize: 'cover',
            backgroundSize: 'cover',
            WebkitBackgroundSize: 'cover'
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

