import { useState, useEffect } from 'react'
import {Link} from "react-router-dom";
import {PromoForm} from '../../Components/PromoForm/PromoForm'
import {PromoFinal} from '../../Components/PromoFinal/PromoFinal'
import {Button} from '../../Components/Button/Button'
import {Image} from '../../Components/Image/Image'
import {attrButton} from './config'

import styles from './PromoPage.module.css';
import qr from './qr.svg'

export function PromoPage() {

	const [focusButton, setfocusButton] = useState('')
	const [showForm, setShowForm] = useState(true)

	useEffect(() => {
		const initElem = document.querySelector('[data-init-focus]')
		initElem.focus()
		setfocusButton(initElem.getAttribute('data-focus'))
	}, [showForm])

	const changeFocus = (e) => {
		let step
		switch(e.code) {
			case 'ArrowUp':
				step = attrButton[focusButton].up
				break
			case 'ArrowDown':
				step = attrButton[focusButton].down
				break
			case 'ArrowLeft':
				step = attrButton[focusButton].left
				break
			case 'ArrowRight':
				step = attrButton[focusButton].right
				break
			default:
				return
		}
		if (!step) {
			return
		}
		const nextStep = document.querySelector(`[data-focus=${step}]`)
		if(!nextStep) {
			return
		}
		nextStep.focus()
		setfocusButton(nextStep.getAttribute('data-focus'))
	}

	useEffect(() => {
		document.addEventListener('keydown', changeFocus)
		return () => {
			document.removeEventListener('keydown', changeFocus)
		}
	}, [focusButton])

	return (
		<div className={styles.promoPage}>
			<div className={styles.promoBlock}>
				{showForm ? <PromoForm onSubmit={setShowForm} /> : <PromoFinal />}
			</div>
			<div className={styles.promoPageInfo}>
				<Link to={'/'}>
					<Button
						data-init-focus={!showForm}
						data-focus='exit'
						className={styles.promoPageExit}
					/>
				</Link>
				<div className={styles.promoPageCode}>
					<div className={styles.promoPageSubText}>Сканируйте QR-код для получения дополнительной информации</div>
					<Image className={styles.promoPageImg} src={qr}/>
				</div>
			</div>
		</div>	
	)
}