import { useRef, useEffect } from 'react'
import {BanerPage} from './Pages/BanerPage/BanerPage'
import {PromoPage} from './Pages/PromoPage/PromoPage'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {scalePage} from './helper'

import styles from './App.module.css';

export function App() {
	const ref = useRef(null)

	useEffect(() => {
		scalePage(ref)
	}, [])

	return (
		<div className={styles.scale} ref={ref}>
			<Router>
				<Switch>
					<Route path="/promo" component={PromoPage}/>
					<Route path="/" component={BanerPage} exact/>
				</Switch>
			</Router>	
		</div>
		
	)
}

