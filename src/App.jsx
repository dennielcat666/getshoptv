import {BanerPage} from './Pages/BanerPage/BanerPage'
import {PromoPage} from './Pages/PromoPage/PromoPage'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.css';


export function App() {
//   return <BanerPage />;
	return (
		<Router>
			<Switch>
				<Route path="/promo" component={PromoPage}/>
				<Route path="/" component={BanerPage} exact/>
			</Switch>
		</Router>
	)
}

