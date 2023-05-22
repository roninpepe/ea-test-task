import { FC, StrictMode } from 'react';
import MainPage from 'views/MainPage.view';
import styles from 'styles/components/App.module.scss';

const App: FC = () => (
	<StrictMode>
		<div className={styles._}>
			<MainPage />
		</div>
	</StrictMode>
);

export default App;
