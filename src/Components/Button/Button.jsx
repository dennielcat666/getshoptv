import PropTypes from 'prop-types';
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

Button.propTypes = {
	children: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
	type: PropTypes.string,
	value: PropTypes.string,
	disabled: PropTypes.bool,
}