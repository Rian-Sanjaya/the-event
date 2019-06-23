import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

const SideDrawer = (props) => {
  const { open, onClose } = props

  return (
    <Drawer
      anchor='right'
      open={open}
      onClose={() => onClose(false)}
    >
      <List component='nav'>
        <ListItem button onClick={() => console.log('Event starts in')}>
          Event starts in
        </ListItem>
        <ListItem button onClick={() => console.log('Event starts in')}>
          Venue Info
        </ListItem>
        <ListItem button onClick={() => console.log('Event starts in')}>
          Hightlights
        </ListItem>
        <ListItem button onClick={() => console.log('Event starts in')}>
          Pricing
        </ListItem>
        <ListItem button onClick={() => console.log('Event starts in')}>
          Location
        </ListItem>
      </List>
    </Drawer>
  )
}

export default SideDrawer