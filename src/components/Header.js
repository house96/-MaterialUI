import React from "react";
import AppBar from "material-ui/AppBar";
import { blueGrey500 } from "material-ui/styles/colors";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";

const RightMenu = () => (
  <IconMenu
    iconButtonElement={
      <IconButton>
        <MoreVertIcon color={'#fff'}/>
      </IconButton>
    }
    targetOrigin={{ horizontal: "right", vertical: "top" }}
    anchorOrigin={{ horizontal: "right", vertical: "top" }}
  >
    <MenuItem primaryText="Обновить" />
    <MenuItem primaryText="Помощь" />
    <MenuItem primaryText="Выйти" />
  </IconMenu>
);

export const AppHeader = (props) => {
  return (
    <AppBar
      title="Material UI"
      style={{ background: blueGrey500 }}
      iconElementRight={<RightMenu />}
      onLeftIconButtonClick={() => props.onLeftIconClick()}
    />
  );
};
