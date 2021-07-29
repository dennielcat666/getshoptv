import cn from 'classnames'

export function Button({children, className, onClick, type='button', value}) {
	return (
		<button className={cn(className)} onClick={onClick} type={type} value={value}>{children}</button>
	)
}