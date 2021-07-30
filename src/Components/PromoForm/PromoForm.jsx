import { useState, useEffect } from 'react'
import InputMask from "react-input-mask";
import {Button} from '../Button/Button'
import {CheckBox} from '../CheckBox/CheckBox'
import {getValidate} from '../../api'
import styles from './PromoForm.module.css';
import cn from 'classnames'

export function PromoForm({onSubmit}) {

	const [number, setNumber] = useState('')
	const [checked, setCheck] = useState(false)
	const [disabled, setDisabled] = useState(true)
	const [isError, setIsError] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const validNum = false /* не забыть выключить */

	const handleClick = (e) => {
		if (number.length >= 10) {
			return
		}
		
		setNumber(`${number}`+`${e.target.value}`)
	}

	const renderCheckBox = () => {
		if (isError) {
			return <div>Неверно введён номер</div>
		}
		// if (isLoading) {
		// 	return <div>Проверка номера...</div>
		// }
		return <CheckBox checked={checked} onChange={setCheck} />
	}

	const deleteChar = () => {
		const newNumber = number.slice(0, -1)
		setNumber(newNumber)
	}

	useEffect(() => {
		console.log('useEffect');
		console.log('useEffect number', number)
		console.log('useEffect number.length', number.length)
		if (number.length === 10 && checked) {
			setDisabled(false)
			return
		}
		if (number.length < 10) {
			setIsError(false)
		}
		setDisabled(true)
	}, [number, checked])


	/* не забыть выключить */
	const checkValid = (e) => {
		e.preventDefault()
		if (validNum === true) {
			return onSubmit(false)
		}
		setIsError(true)
	}

	// const checkValid = (e) => {
	// 	e.preventDefault()
	// 	setIsLoading(true)
	// 	getValidate(number)
	// 		.then(res => {
	// 			console.log('res', res);
	// 			if (res.valid === true) {
	// 				return onSubmit(false)
	// 			}
	// 			setIsError(true)
	// 			setIsLoading(false)
	// 		})
	// 		.catch(error => {
	// 			console.error('Ошибка: ', error)
	// 			setIsLoading(false)
	// 		})
	// }

	return (
		<div>
			<div>Введите ваш номер мобильного телефона</div>
			<form onSubmit={(e) => {checkValid(e)}}>
				<InputMask
					className={cn(styles.number, {
						[styles.error]: isError,
					})}
					value={number}
					mask="+7(999)-999-99-99"
					alwaysShowMask={true}
					onChange={(e) => {setNumber(e.target.value.replace(/[^0-9]/g,"").slice(1))}}
				/>
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
				<div>
					{renderCheckBox()}
					{/* {isError ? <div>Неверно введён номер</div> : <CheckBox checked={checked} onChange={setCheck} />} */}
				</div>
				<Button
					type="submit"
					disabled={disabled}>
					Подтвердить номер
				</Button>
			</form>
		</div>
	)
}