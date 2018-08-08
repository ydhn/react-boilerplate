import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';


export default class App extends React.Component {
  render() {
    const { children = null } = this.props;
    const muiTheme = createMuiTheme({
      fontFamily: 'Noto Sans KR',
      palette: {
        primary1Color: '#1377FC', 
      },
    });

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={{ paddingBottom: '10rem' }} id="wrap">
          {children}
        </div>
      </MuiThemeProvider>
    )
  }
}
