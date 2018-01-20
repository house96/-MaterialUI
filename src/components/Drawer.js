import React from 'react'
import MenuItem from "material-ui/MenuItem"
import Drawer from "material-ui/Drawer"
import ActionHome from 'material-ui/svg-icons/action/home'
import ContactIcon from 'material-ui/svg-icons/communication/contacts';
import { pink500, purple600 } from 'material-ui/styles/colors'
import FontIcon from 'material-ui/FontIcon'


export const AppDrawer = (props) => {
  return (
    <Drawer 
      open={props.open}
      docked={false}
      onRequestChange={open => props.onToggle(open)}
    >

    <MenuItem 
      leftIcon={
        <ActionHome
          color={pink500}
          hoverColor={purple600}
        />
      }
    >
      Главное
    </MenuItem>
    <MenuItem
      leftIcon={
        <ContactIcon 
          color={pink500}
          hoverColor={purple600}
        />
      }
      >Контакты
      </MenuItem>
      <MenuItem
      rightIcon={
        <FontIcon 
          className="material-icons" 
        >
          help
        </FontIcon>
      }
      >О нас
      </MenuItem>
      <MenuItem
      rightIcon={
        <FontIcon 
          className="material-icons" 
        >
        drafts
        </FontIcon>
        
      }
      >Написать нам
      </MenuItem>
      <MenuItem
    >
      
    </MenuItem>
  </Drawer>
  )
}