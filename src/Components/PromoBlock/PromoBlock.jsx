import { useState } from 'react'
import {PromoForm} from '../PromoForm/PromoForm'
import {PromoFinal} from '../PromoFinal/PromoFinal'


export function PromoBlock() {

	const [showForm, setShowForm] = useState(true)

	return (
		<div>
			{showForm ? <PromoForm onSubmit={setShowForm} /> : <PromoFinal />}
		</div>
	)
}