import React from 'react';
import {render} from 'react-dom';
import './css/index.css';
import App from './components/App';

//use for redirecting/routing to different components based on path
//history is a requirement of Router
//Switch replaced "Miss" and redirects when original route is not found
import NotFound from './components/NotFound';
import SomeOtherComponent from './components/SomeOtherComponent';

import {Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

const Root = () => {
  return (
  	<Router history={history}>
 		<div>
		    <Switch>
		    	<Route exact path='/' component={App} />
				<Route path='/someOtherComponent' component={SomeOtherComponent} />
	      		<Route component={NotFound} />
		    </Switch>
		</div>
	</Router>
  )
}

render(<Root/>, document.querySelector('#main'));

// render(<App />, document.getElementById('main'));
