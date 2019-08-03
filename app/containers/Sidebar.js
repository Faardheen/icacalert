import React from 'react';
import styled from 'styled-components';

const Sidebar = styled.div`
	background-color: #033875;
	padding-right: 0px !important;
`;

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
	padding: 20px;
`;

export default () => (
	<Sidebar className='column'>
		<SidebarList>
			<SidebarItem>
				<i className='home icon' />
			</SidebarItem>
			<SidebarItem>
				<i className='flag icon' />
			</SidebarItem>
			<SidebarItem>
				<i className='eye icon' />
			</SidebarItem>
		</SidebarList>
	</Sidebar>
);
