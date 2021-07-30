import {Image} from '../Image/Image'
import {Button} from '../Button/Button'
import {Link} from "react-router-dom";

import qr from './qr.svg'
import styles from './Baner.module.css';

export function Baner() {
	return (
		<div className={styles.baner}>
			<h1 className={styles.banerName}>Исполните мечту вашего малыша! <br/>Подарите ему собаку!</h1>
			<Image className={styles.banerImg} src={qr}/>
			<div className={styles.banerSubText}>Сканируйте QR-код <br/>или нажмите ОК</div>
			<div className={styles.banerLink}>
				<Link to={'/promo'}><Button className={styles.banerButton}>OK</Button></Link>
			</div>
			
		</div>
	)
}