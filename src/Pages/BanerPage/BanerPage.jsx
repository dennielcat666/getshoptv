import {Baner} from '../../Components/Baner/Baner'

import styles from './BanerPage.module.css';

export function BanerPage() {
	return (
		<div className={styles.banerPage}>
			{/* <video src="#"></video> */}
			<Baner/>
		</div>	
	)
}