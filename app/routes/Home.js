import React from 'react';
import styled from 'styled-components';

const AppLayout = styled.div`
	display: grid;
	height: 105vh;
`;

const Sidebar = styled.div`
	background-color: #033875;
	padding-right: 0px !important;
`;

const SidebarList = styled.ul`
	list-style: none;
	padding: 0px;
	margin: 0px;
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
	<AppLayout className='ui grid'>
		<div className='sixteen column row'>
			<Sidebar className='one column'>
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
			<div className='orange three wide column'>pwdkp</div>
			<div className='teal twelve wide column'>pwdkp</div>
		</div>
	</AppLayout>
);
