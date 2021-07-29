import cn from 'classnames'

export function Button({children, className, onClick}) {
	return (
		<button className={cn(className)} onClick={onClick}>{children}</button>
	)
}