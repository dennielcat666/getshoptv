import styles from './CheckBox.module.css';
import cn from 'classnames'

export function CheckBox({checked, onChange}) {
	return (
		<label className={styles.checkboxLabel}>
			<input
				className={styles.input}
				type="checkbox"
				checked={checked}
				onChange={() => {onChange(!checked)}}
			/>
			<div
				className={cn(styles.checkbox, {
					[styles.checked]: checked,
				})}></div>
			<div className={styles.checkboxLabelText}>Согласие на обработку персональных данных</div>
		</label>
	)
}