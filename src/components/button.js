import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { red700, deepOrange500 } from 'material-ui/styles/colors'
import FontIcon from 'material-ui/FontIcon'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add';


const style = {
  marginRight: 20
}
export const AppButtons = (props) => {
  return (
    <div style = {{marginBottom: 40}}>
      <RaisedButton 
        label="Добавить елемент" 
        primary={true} 
        style={style} 
      />
      <RaisedButton 
        label="Удалить елемент" 
        backgroundColor={red700} 
        labelColor="#fff"
        style={style} 
        disabled={props.itemsChecked.length === 0}
        onTouchTap={() => props.onDelete()}

      />
      <RaisedButton
        href="https://google.com"
        target="_blank"
        label="перейти не google"
        icon={
          <FontIcon className="material-icons">
            fingerprint
          </FontIcon>} 
    />
    <FloatingActionButton 
      style={{
        position: 'fixed',
        right: 50,
        bottom: 50
      }}
      backgroundColor={deepOrange500}
      onClick={() => console.log('click')}
    >
    <ContentAdd />
  </FloatingActionButton>
    </div>
  )
}