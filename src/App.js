import React, { Component } from 'react'
import {AppHeader} from './components/Header'
import {AppDrawer} from './components/Drawer'
import {AppButtons} from './components/button'
import {AppList} from './components/list'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDrawerOpen: false,
      itemList: [
        {name: 'Элемент 1', descriptions: 'Сложно описано 1', checked: false},
        {name: 'Элемент 2', descriptions: 'Сложно описано 2', checked: false},
        {name: 'Элемент 3', descriptions: 'Сложно описано 3', checked: false},
        {name: 'Элемент 4', descriptions: 'Сложно описано 4', checked: false},
      ]
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
        <div className="container">
        <AppButtons 
        itemsChecked={this.state.itemList.map(i => i.checked).filter(i => i)}
        onDelete={() => {
          let itemList = this.state.itemList.filter(i => i.checked)
          this.setState({itemList})
        }}
        />

        <AppList
          items={this.state.itemList}
          onCheck={(checked, idx) => {
            let {itemList} = this.state
            itemList[idx].checked = checked
            this.setState({itemList})
          }}
        />
        </div>
      </div>
    );
  }
}

