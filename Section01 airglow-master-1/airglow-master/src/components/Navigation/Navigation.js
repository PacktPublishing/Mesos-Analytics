import React from 'react';
import { Menu } from 'material-ui';

class Navigation extends React.Component {

  static propTypes = {
    menuItems: React.PropTypes.array
  };

  static contextTypes = {
    router: React.PropTypes.func,
    muiTheme: React.PropTypes.object
  };

  constructor() {
    super();
  }

  getSelectedIndex() {
    let menuItems = this.props.menuItems;
    let currentItem;

    for (let i= menuItems.length - 1;
    i >= 0;
    i--)
    currentItem = menuItems[i];
    if(currentItem.route && this.context.router.isActive(currentItem.route)){
      return i;
    }
  }

}

onMenuItemClick(e, index, item) {

}
