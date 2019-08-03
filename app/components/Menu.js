import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';
import logo from '../public/logo.png';

export default () => (
	<Menu secondary>
		<Menu.Item>
			<Image src={logo} size='small' />
			<Menu.Item className='routeName' name='Dashboard' />
		</Menu.Item>
		<Menu.Menu position='right'>
			<Menu.Item name='logout' />
		</Menu.Menu>
	</Menu>
);
