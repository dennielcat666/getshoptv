import { useState } from 'react'
import {PromoForm} from '../PromoForm/PromoForm'
import {PromoFinal} from '../PromoFinal/PromoFinal'


export function PromoBlock() {

	const [showForm, setShowForm] = useState(true)

	return (
		<div>
			{/* <button onClick={() => setShowForm(false)}>btn</button> */}
			{showForm ? <PromoForm onSubmit={setShowForm} /> : <PromoFinal />}
		</div>
	)
}