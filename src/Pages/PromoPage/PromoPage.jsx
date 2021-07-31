import {PromoBlock} from '../../Components/PromoBlock/PromoBlock'
import {Button} from '../../Components/Button/Button'
import {Image} from '../../Components/Image/Image'
import {Link} from "react-router-dom";

import styles from './PromoPage.module.css';
import qr from './qr.svg'

export function PromoPage() {
	return (
		<div className={styles.promoPage}>
			<PromoBlock />
			<div className={styles.promoPageInfo}>
				<Link to={'/'}>
					<Button className={styles.promoPageExit}></Button>
				</Link>
				<div className={styles.promoPageBlock}>
					<div className={styles.promoPageSubText}>Сканируйте QR-код для получения дополнительной информации</div>
					<Image className={styles.promoPageImg} src={qr}/>
				</div>
			</div>
		</div>	
	)
}