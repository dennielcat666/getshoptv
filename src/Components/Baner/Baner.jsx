import {Image} from '../Image/Image'
import {Button} from '../Button/Button'
import qr from './qr.svg'

export function Baner() {
	return (
		<div>
			<div>Исполните мечту вашего малыша! Подарите ему собаку!</div>
			<Image src={qr}/>
			<div>Сканируйте QR-код или нажмите ОК</div>
			<Button>OK</Button>
		</div>
	)
}