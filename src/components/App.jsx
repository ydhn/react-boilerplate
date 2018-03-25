import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


export default class App extends React.Component {
  render() {
    const { children = null } = this.props;
    const muiTheme = getMuiTheme({
      fontFamily: "Noto Sans KR",
      palette: {
        primary1Color: "#1377FC", 
      },
    });

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={{ paddingBottom: "10rem" }} id="wrap">
          {children}
        </div>
      </MuiThemeProvider>
    )
  }
}
