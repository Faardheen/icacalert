import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { ApolloProvider } from 'react-apollo';
import 'semantic-ui-css/semantic.min.css';
import client from './apollo';
require('./public/index.css');
import AppLayout from './components/AppLayout';
import styled from 'styled-components';
import decode from 'jwt-decode';

import Sidebar from './containers/Sidebar';
import Navbar from './containers/Navbar';
import District from './containers/District';

let currentUser = {}

try {
	currentUser = decode(localStorage.getItem('token')).user;
} catch (err) {
	console.log(err)
}

const NavbarLayout = styled.div`
	padding-bottom: 0px !important;
`;

const DistrictLayout = styled.div`
	display: grid;
	height: 100vh;
`;

const Infographics = styled.div`
	background-color: #F4F7FC;
	padding: 30px;
	display: flex !important;
	overflow-y: auto !important;
`;

const ContentPage = styled.div`
	padding-top: 0px !important;
`;

const SidebarLayout = styled.div`
	background-color: #033875;
	padding-right: 0px !important;
`;


class App extends React.Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<AppLayout>
					<div className='ui grid'>
						<SidebarLayout className='column'>
							<Sidebar />
						</SidebarLayout>
						<div className='fifteen wide column'>

							<AppLayout>
								<div className='ui grid'>
									<NavbarLayout className='row'>
										<div className='column'>
											<Navbar currentUser={currentUser} />
										</div>
									</NavbarLayout>

									<ContentPage className='sixteen wide row column'>
										<DistrictLayout className='three wide column'>
											<District />
										</DistrictLayout>
										<Infographics className='thirteen wide column'>
											<Routes />
										</Infographics>
									</ContentPage>
								</div>
							</AppLayout>

						</div>
					</div>
				</AppLayout>
			</ApolloProvider>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
