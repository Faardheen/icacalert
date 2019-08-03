import React from 'react';
import SearchBar from '../components/SearchBar';
import Districts from '../components/Districts';
import InfoPage from '../components/InfoPage';
import ContentPage from '../components/ContentPage';

import { Header } from 'semantic-ui-react';
import styled from 'styled-components';

const DistrictList = styled.ul`
	padding-left: 0px !important;
`;

const DistrictListItem = styled.li`
	list-style-type: none;
	margin: 2rem 0rem;
	border-bottom: 2px solid #efefef;
	border-bottom-style: solid;
`;

const district = ({ id, name }) => (
	<DistrictListItem key={id}>
		<Header as='h3'>{name}</Header>
	</DistrictListItem>
);

export default ({ districts }) => (
	<ContentPage className='sixteen wide row column'>
		<Districts className='three wide column'>
			<SearchBar />
			<DistrictList>{districts.map(district)}</DistrictList>
		</Districts>
		<InfoPage className='thirteen wide column' />
	</ContentPage>
);
