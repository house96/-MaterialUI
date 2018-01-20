import React from 'react'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import ActionFavorite from 'material-ui/svg-icons/action/favorite'
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border'
import Checkbox from 'material-ui/Checkbox'

export const AppList = (props) => {
  return (
    <List>
      { props.items.map((item, key) => {
        return (
        <div key={key}>
        <ListItem 
          primaryText={item.name}
          secondaryText={item.description}
          leftCheckbox={
            <Checkbox
            checkedIcon={<ActionFavorite />}
            uncheckedIcon={<ActionFavoriteBorder />}
            checked={item.checked}
            onCheck	={(event, isInputChecked) => props.onCheck(isInputChecked, key)}
            />
          }
          />
          <Divider />
        </div>
      )}) }
  </List>
  )
}