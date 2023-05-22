import { FC } from 'react';
import Subscribe from 'components/Subscribe';
import { ReactComponent as Arrow } from 'assets/icons/arrow.svg';
import styles from 'styles/components/Footer.module.scss';

const Footer: FC<{ goToEvents: () => void }> = ({ goToEvents }) => (
	<footer className={styles._}>
		<span className={styles.filler} />
		<Subscribe />
		<span className={styles.other} onClick={goToEvents}>
			<span>Other Events</span>
			<Arrow className={styles.arrow} />
		</span>
	</footer>
);

export default Footer;
