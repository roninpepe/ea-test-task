import { FC } from 'react';
import Header from 'components/Header';
import Counter from 'components/Counter';
import Footer from 'components/Footer';
import { ReactComponent as Blot } from 'assets/icons/blot.svg';
import { ReactComponent as Arrow } from 'assets/icons/arrow.svg';
import styles from 'styles/views/Countdown.module.scss';

const Countdown: FC<{ goToEvents: () => void; active: boolean }> = ({
	goToEvents,
	active,
}) => (
	<section
		id="countdown"
		className={[styles._, active ? '_active' : ''].join(' ')}
	>
		<Blot className={[styles.blot, styles.blot_left].join(' ')} />
		<Blot className={[styles.blot, styles.blot_right].join(' ')} />
		<Header />
		<main className={styles.content}>
			<div className={styles.container}>
				<h2 className={styles.header}>Under construction</h2>
				<div className={styles.description}>
					We're making lots of improvements and will be back soon
				</div>
				<div className={styles.container}>
					<Counter date="2023-05-31" />
				</div>
			</div>
			<div className={styles.container}>
				<div>Check our event page when you wait:</div>
				<a href="https://google.com" className={styles.event}>
					<span>Go to the event</span>
					<Arrow className={styles.arrow} />
				</a>
			</div>
		</main>
		<Footer goToEvents={goToEvents} />
	</section>
);

export default Countdown;
