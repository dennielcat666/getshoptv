import styles from './PromoFinal.module.css';

export function PromoFinal() {
	return (
		<div className={styles.promoFinal}>
			<div className={styles.promoFinName}>Заявка <br/>принята</div>
			<div className={styles.promoFinSubText}>Держите телефон под рукой. <br/>Скоро с Вами свяжется наш менеджер.</div>
		</div>
	)
}