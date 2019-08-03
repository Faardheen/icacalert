import React from 'react';
import SearchBar from '../components/SearchBar';
import Districts from '../components/Districts';
import InfoPage from '../components/InfoPage';
import ContentPage from '../components/ContentPage';

export default () => (
	<ContentPage className='sixteen wide row column'>
		<Districts className='three wide column'>
			<SearchBar />
		</Districts>
		<InfoPage className='thirteen wide column' />
	</ContentPage>
);
