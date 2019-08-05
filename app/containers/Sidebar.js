import React from 'react';
import styled from 'styled-components';

const SidebarList = styled.ul`
	list-style: none;
	padding: 0px;
	margin-top: 60px;
	display: inline-block;
	width: 100%;
	font-size: 18px;
`;
const SidebarItem = styled.li`
	text-align: center;
	color: white;
	padding: 20px 0px;
`;

const SidebarLink = styled.a`
	color: white;
	&:hover {
		color: white;
	}
`;

export default () => (
	<SidebarList>
		<SidebarItem>
			<SidebarLink href='/'><i className='home icon' /></SidebarLink>
		</SidebarItem>
		<SidebarItem>
			<SidebarLink href=""><i className='flag icon' /></SidebarLink>
		</SidebarItem>
		<SidebarItem>
			<SidebarLink href=""><i className='eye icon' /></SidebarLink>
		</SidebarItem>
	</SidebarList>
);
