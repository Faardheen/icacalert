import React from 'react';
import SearchBar from '../components/SearchBar';

import styled from 'styled-components';

const DistrictList = styled.ul`
	padding-left: 0px !important;
`;

const DistrictListItem = styled.li`
	list-style-type: none;
	margin: 2rem 0rem;
	border-bottom: 2px solid #FAFAFA;
	border-bottom-style: solid;
`;

export default () => (
  <div>
    <SearchBar />
    <DistrictList>
      <DistrictListItem>
        <h3 className='district-header'>Port Louis</h3>
      </DistrictListItem>
      <DistrictListItem>
        <h3 className='district-header'>Pamplemousses</h3>
      </DistrictListItem>
      <DistrictListItem>
        <h3 className='district-header'>Grand Port</h3>
      </DistrictListItem>
      <DistrictListItem>
        <h3 className='district-header'>Savanne</h3>
      </DistrictListItem>
      <DistrictListItem>
        <h3 className='district-header'>Moka</h3>
      </DistrictListItem>
      <DistrictListItem>
        <h3 className='district-header'>Riviere Du Rampart</h3>
      </DistrictListItem>
      <DistrictListItem>
        <h3 className='district-header'>Plaines Wilhems</h3>
      </DistrictListItem>
      <DistrictListItem>
        <h3 className='district-header'>Riviere Noire</h3>
      </DistrictListItem>
    </DistrictList>
  </div>
);
