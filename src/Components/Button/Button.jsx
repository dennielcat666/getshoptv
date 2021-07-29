import cn from 'classnames'
import styles from './Button.module.css';

export function Button({children, className, onClick, type='button', value, disabled}) {
	return (
		<button
			className={cn(styles.button, {
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