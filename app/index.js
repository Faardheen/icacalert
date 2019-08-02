import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { ApolloProvider } from 'react-apollo';
import 'semantic-ui-css/semantic.min.css';
import client from './apollo';
require('./public/index.css');

class App extends React.Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<Routes />
			</ApolloProvider>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
