import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import App from './components/App';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

// setting a dark theme by default
const muiTheme = createMuiTheme({
  palette: {
    type: "dark",
    grey: {
      800: "#000000", // overrides failed
      900: "#121212" // overrides success
    }
  }
});


ReactDOM.render(
  <MuiThemeProvider theme={muiTheme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);

