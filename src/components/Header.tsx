import { FC } from 'react';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import styles from 'styles/components/Header.module.scss';

const Header: FC = () => (
	<header className={styles._}>
		<a href="./">
			<Logo className={styles.logo} />
		</a>
	</header>
);

export default Header;
