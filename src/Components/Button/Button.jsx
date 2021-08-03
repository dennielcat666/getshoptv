import { useEffect } from 'react'

import cn from 'classnames'
import styles from './Button.module.css';

export function Button({children, className, onClick, type='button', value, disabled, ...rest}) {
	return (
		<button
			{...rest}
			className={cn(styles.button, className, {
				[styles.disabled]: disabled,
			})}
			onClick={onClick}
			type={type}
			value={value}
			disabled={disabled}
		>
			{children}
		</button>
	)
}