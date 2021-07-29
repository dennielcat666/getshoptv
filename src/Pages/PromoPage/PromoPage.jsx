import {PromoBlock} from '../../Components/PromoBlock/PromoBlock'
import {Button} from '../../Components/Button/Button'
import {Image} from '../../Components/Image/Image'
import {Link} from "react-router-dom";

import qr from './qr.svg'

export function PromoPage() {
	return (
		<div>
			<PromoBlock />
			<div>
				<Link to={'/'}><Button>крестик</Button></Link>
				<div>
					<div>Сканируйте QR-код для получения дополнительной информации</div>
					<Image src={qr}/>
				</div>
			</div>
			
		</div>	
	)
}