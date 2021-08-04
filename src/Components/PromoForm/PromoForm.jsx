import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
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

	const handleClick = (e) => {
		if (number.length >= 10) {
			return
		}
		
		setNumber(`${number}${e.target.value}`)
	}

	const renderCheckBox = () => {
		if (isError) {
			return <div className={cn(styles.error, styles.errorText)}>Неверно введён номер</div>
		}
		if (isLoading) {
			return <div className={styles.loader}>Проверка номера...</div>
		}
		return <CheckBox
					checked={checked}
					onChange={setCheck}
					dataFocus='checkbox'
				/>
	}

	const deleteChar = () => {
		const newNumber = number.slice(0, -1)
		setNumber(newNumber)
	}

	useEffect(() => {
		if (number.length === 10 && checked) {
			setDisabled(false)
			return
		}
		if (number.length < 10) {
			setIsError(false)
		}
		setDisabled(true)
	}, [number, checked])

	const checkValid = (e) => {
		e.preventDefault()
		setIsLoading(true)
		getValidate(number)
			.then(res => {
				if (res.valid === true) {
					return onSubmit(false)
				}
				setIsError(true)
				setIsLoading(false)
			})
			.catch(error => {
				console.error('Ошибка: ', error)
				setIsLoading(false)
			})
	}

	return (
		<div>
			<div className={styles.promoName}>Введите ваш номер мобильного телефона</div>
			<form
				className={styles.promoForm}
				onSubmit={(e) => {checkValid(e)}}
			>
				<InputMask
					data-focus='input_phone'
					className={cn(styles.number, styles.promoInputNumber, {
						[styles.error]: isError,
					})}
					value={number}
					mask="+7(999)-999-99-99"
					alwaysShowMask={true}
					onChange={(e) => {setNumber(e.target.value.replace(/[^0-9]/g,"").slice(1))}}
				/>
				<div className={styles.promoSubText}>и с Вами свяжется наш менеждер для дальнейшей консультации</div>
				<div className={styles.promoPanel}>
					<div className={styles.promoPanelLine}>
						<Button
							className={styles.promoPanelNumber}
							onClick={handleClick}
							data-focus='phone_1'
							value='1'
						>
							1
						</Button>
						<Button
							className={styles.promoPanelNumber}
							onClick={handleClick}
							data-focus='phone_2'
							value='2'
						>
							2
						</Button>
						<Button
							className={styles.promoPanelNumber}
							onClick={handleClick}
							data-focus='phone_3'
							value='3'
						>
							3
						</Button>
					</div>
					<div className={styles.promoPanelLine}>
						<Button
							className={styles.promoPanelNumber}
							onClick={handleClick}
							data-focus='phone_4'
							value='4'
						>
							4
						</Button>
						<Button
							className={styles.promoPanelNumber}
							onClick={handleClick}
							data-focus='phone_5'
							data-init-focus
							value='5'
						>
							5
						</Button>
						<Button
							className={styles.promoPanelNumber}
							onClick={handleClick}
							data-focus='phone_6'
							value='6'
						>
							6
						</Button>
					</div>
					<div className={styles.promoPanelLine}>
						<Button
							className={styles.promoPanelNumber}
							onClick={handleClick}
							data-focus='phone_7'
							value='7'
						>
							7
						</Button>
						<Button
							className={styles.promoPanelNumber}
							onClick={handleClick}
							data-focus='phone_8'
							value='8'
						>
							8
						</Button>
						<Button
							className={styles.promoPanelNumber}
							onClick={handleClick}
							data-focus='phone_9'
							value='9'
						>
							9
						</Button>
					</div>
					<div className={styles.promoPanelLine}>
						<Button
							className={styles.promoPanelDel}
							onClick={deleteChar}
							data-focus='phone_delete'
						>
							стереть
						</Button>
						<Button
							className={styles.promoPanelNumber}
							onClick={handleClick}
							data-focus='phone_0'
							value='0'
						>
							0
						</Button>
					</div>
				</div>
				<div className={styles.promoChackbox}>
					{renderCheckBox()}
				</div>
				<Button
					data-focus='phone_submit'
					className={styles.promoPanelButton}
					type="submit"
					disabled={disabled}
				>
					Подтвердить номер
				</Button>
			</form>
		</div>
	)
}

PromoForm.propTypes = {
	onSubmit: PropTypes.func,
}