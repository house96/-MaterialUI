import React, { Component } from 'react'
import {AppHeader} from './components/Header'
import {AppDrawer} from './components/Drawer';
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDrawerOpen: false
    }
  }
  render() {
    return (
      <div>
        <AppHeader 
          onLeftIconClick={ () => this.setState({
            isDrawerOpen: !this.state.isDrawerOpen
          })}
        />
        <AppDrawer
          open={this.state.isDrawerOpen} 
          onToggle={ (isDrawerOpen) => this.setState({isDrawerOpen})}
        />
      </div>
    );
  }
}

