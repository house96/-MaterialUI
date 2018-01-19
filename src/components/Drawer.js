import React from 'react';
import MenuItem from "material-ui/MenuItem";
import Drawer from "material-ui/Drawer";
export const AppDrawer = (props) => {
  return (
    <Drawer 
      open={props.open}
      docked={false}
      onRequestChange={open => props.onToggle(open)}
    >

    <MenuItem>Главное</MenuItem>
    <MenuItem>Контакты</MenuItem>
  </Drawer>
  )
}