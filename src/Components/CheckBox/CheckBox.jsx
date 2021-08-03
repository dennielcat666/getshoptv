import PropTypes from 'prop-types';
import styles from './CheckBox.module.css';
import cn from 'classnames'

export function CheckBox({checked, onChange, dataFocus}) {
	return (
		<label 
			onKeyDown={(e) => {
				if (e.code === 'Enter') {
					onChange(!checked)
				}
			}}
			tabIndex={0}
			data-focus={dataFocus}
			className={styles.checkboxLabel}
		>
			<input
				className={styles.input}
				type="checkbox"
				checked={checked}
				onChange={() => {onChange(!checked)}}
			/>
			<div
				className={cn(styles.checkbox, {
					[styles.checked]: checked,
				})}>
			</div>
			<div className={styles.checkboxLabelText}>Согласие на обработку персональных данных</div>
		</label>
	)
}

CheckBox.propTypes = {
	checked: PropTypes.bool,
	onChange: PropTypes.func,
	dataFocus: PropTypes.string,
}