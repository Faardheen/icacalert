import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Register from './Register';
import Login from './Login';
import CreateAlert from './CreateAlert';

export default () => (
	<BrowserRouter>
		<Switch>
			<Route path='/' exact component={Home} />
			<Route path='/register' exact component={Register} />
			<Route path='/login' exact component={Login} />
			<Route path='/create-alert' exact component={CreateAlert} />
			<Route path='/register' exact component={Register} />
		</Switch>
	</BrowserRouter>
);
