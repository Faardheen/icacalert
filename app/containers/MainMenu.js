import React from 'react';
import styled from 'styled-components';
import Menu from '../components/Menu';

const MenuItem = styled.div`
	padding: 0px !important;
	background-color: white;
    padding-left: 40px !important;
`;

const MainMenu = styled.div`
	padding-bottom: 0px !important;
`;

export default () => (
	<MainMenu className='row'>
		<MenuItem className='column'>
			<Menu />
		</MenuItem>
	</MainMenu>
);
