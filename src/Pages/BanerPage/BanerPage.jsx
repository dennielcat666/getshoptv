import { useState, useEffect } from 'react'
import YouTube from 'react-youtube';
import {Baner} from '../../Components/Baner/Baner'

import styles from './BanerPage.module.css';

export function BanerPage() {

	const [showBaner, setShowBaner] = useState(false)

	const opts = {
		height: '720',
		width: '1280',
		playerVars: {
		  autoplay: 1,
		  cc_load_policy: 0,
		  controls: 0,
		  disablekb: 0,
		  start: 1049,
		  end: 1102,
		  fs: 0,
		  iv_load_policy: 3,
		  loop: 1,
		  modestbranding: 1,
		  rel: 0,
		  showinfo: 0,
		  autohide: 1
		},
	  };

	// useEffect(() => {
	// 	setTimeout(() => {setShowBaner(true)}, 5000)
	// })

	const onPlay = () => {
		setTimeout(() => {setShowBaner(true)}, 5000)
	}

	return (
		<div className={styles.banerPage}>
			<YouTube videoId="dbvi_S3fy2M" opts={opts} onPlay={onPlay()}/>
			{showBaner && <Baner/>}
		</div>	
	)
}