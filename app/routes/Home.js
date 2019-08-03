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
					<ContentPage
						districts={[
							{ id: 1, name: 'Port Louis' },
							{ id: 2, name: 'Pamplemousses' },
							{ id: 3, name: 'Grand Port' },
							{ id: 4, name: 'Savanne' },
							{ id: 5, name: 'Moka' },
							{ id: 6, name: 'Riviere Du Rempart' },
							{ id: 7, name: 'Plaines Wilhems' },
							{ id: 8, name: 'Riviere Noire' },
							{ id: 9, name: 'Flacq' },
						]}
					/>
				</div>
			</div>
		</div>
	</AppLayout>
);
