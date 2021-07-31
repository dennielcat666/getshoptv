import { useState } from 'react'
import {PromoForm} from '../PromoForm/PromoForm'
import {PromoFinal} from '../PromoFinal/PromoFinal'

import styles from './PromoBlock.module.css';

export function PromoBlock() {
	const [showForm, setShowForm] = useState(true)

	return (
		<div className={styles.promoBlock}>
			{showForm ? <PromoForm onSubmit={setShowForm} /> : <PromoFinal />}
		</div>
	)
}