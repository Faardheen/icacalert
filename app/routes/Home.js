import React from 'react';
import SideBar from '../containers/Sidebar';
import MainMenu from '../containers/MainMenu';
import ContentPage from '../containers/ContentPage';
import AppLayout from '../components/AppLayout';

export default () => (
	<AppLayout>
		<div className='ui grid'>
			<SideBar />
			<div className='black fifteen wide column'>
				<div className='ui grid'>
					<MainMenu />
					<ContentPage />
				</div>
			</div>
		</div>
	</AppLayout>
);
