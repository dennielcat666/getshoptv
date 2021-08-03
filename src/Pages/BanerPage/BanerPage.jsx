import { useState } from 'react'
import YouTube from 'react-youtube';
import {Baner} from '../../Components/Baner/Baner'

import styles from './BanerPage.module.css';

export function BanerPage() {

	const [showBaner, setShowBaner] = useState(false)

	const opts = {
		height: '780',
		width: '1280',
		playerVars: {
			autoplay: 1,
			cc_load_policy: 0,
			controls: 0,
			disablekb: 1,
			start: 1061,
			end: 1102,
			fs: 0,
			iv_load_policy: 3,
		  	loop: 1,
			playlist: "dbvi_S3fy2M",
			modestbranding: 1,
			rel: 0,
			showinfo: 0,
			mute: 1
		},
	  };

	const onPlay = () => {
		setTimeout(() => {setShowBaner(true)}, 5000)
	}

	const onReady = (e) => {
		// встроенные опции ютуба (autoplay и loop)
		// не всегда корректно отрабатывают, поэтому использую встроенные 
		// методы
		e.target.playVideo()
		setInterval(() => {e.target.seekTo(1061)}, 41000)
	}

	return (
		<div className={styles.banerPage}>
			<div className={styles.videoBackground}>
				<div className={styles.videoForeground}>
					<YouTube
						videoId="dbvi_S3fy2M"
						opts={opts}
						onReady={onReady}
						onPlay={onPlay()}
					/>
				</div>
			</div>
			{showBaner && <Baner/>}
		</div>	
	)
}