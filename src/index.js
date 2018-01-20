import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {getMuiTheme, lightBaseTheme} from 'material-ui/styles/index'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

ReactDOM.render (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
)
