import cn from 'classnames'
import styles from './Image.module.css';

export function Image({src, className}) {
	return (
		<img className={cn(styles.img, className)} src={src} alt="" />
	)
}