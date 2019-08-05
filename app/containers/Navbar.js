import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';
import logo from '../public/logo.png';

export default class NavigationBar extends React.Component {
  render() {
    const { id, email } = this.props.currentUser;

    const userLink = (
      <div>
        <a className='nav-link' href='/create-alert'>create alert</a>
        <a className='nav-link' href='/profile'>{email}</a>
      </div>
    )
    const guestLink = (
      <a className='nav-link' href='/login'>Login</a>
    )

    return (
      <Menu secondary>
        <Menu.Item>
          <Image src={logo} size='small' />
          <Menu.Item className='routeName' name='Dashboard' />
        </Menu.Item>
        <Menu.Menu className='right-menu-item' position='right'>
          <Menu.Item>
            {id ? userLink : guestLink}
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
