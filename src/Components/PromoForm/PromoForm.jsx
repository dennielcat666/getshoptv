import { useState } from 'react'
import {Button} from '../Button/Button'
import {CheckBox} from '../CheckBox/CheckBox'


export function PromoForm({onSubmit}) {

	const [number, setNumber] = useState('')
	const [check, setCheck] = useState(false)

	const handleClick = (e) => {
		setNumber(`${number}`+`${e.target.value}`)
	}

	const deleteChar = () => {
		const startStr = number
		const newNamber = startStr.slice(0, -1)
		setNumber(newNamber)
	}

	return (
		<div>
			<div>Введите ваш номер мобильного телефона</div>
			<form onSubmit={() => {onSubmit(false)}}>
				<input type="text" value={number} onChange={(e) => {setNumber(e.target.value)}}/>
				<div>и с Вами свяжется наш менеждер для дальнейшей консультации</div>
				<div>
					<Button onClick={handleClick} value='1'>1</Button>
					<Button onClick={handleClick} value='2'>2</Button>
					<Button onClick={handleClick} value='3'>3</Button>
					<Button onClick={handleClick} value='4'>4</Button>
					<Button onClick={handleClick} value='5'>5</Button>
					<Button onClick={handleClick} value='6'>6</Button>
					<Button onClick={handleClick} value='7'>7</Button>
					<Button onClick={handleClick} value='8'>8</Button>
					<Button onClick={handleClick} value='9'>9</Button>
					<Button onClick={deleteChar}>стереть</Button>
					<Button onClick={handleClick} value='0'>0</Button>
				</div>
				<CheckBox />
				<Button type="submit" >Подтвердить номер</Button>
			</form>
		</div>
	)
}