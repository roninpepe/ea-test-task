/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react';
import Countdown from 'react-countdown';
import { ReactComponent as Label } from 'assets/icons/label.svg';
import styles from 'styles/components/Counter.module.scss';

const Completionist = () => <h3>Sorry, the event has already passed.</h3>;

// Renderer callback with condition
const renderer = ({
	days,
	hours,
	minutes,
	seconds,
	completed,
}: {
	days: any;
	hours: any;
	minutes: any;
	seconds: any;
	completed: any;
}): JSX.Element =>
	completed ? (
		<Completionist />
	) : (
		<h3 className={styles.counter}>
			<span className={styles.value}>
				{days}
				<span className={[styles.mark, styles.days].join(' ')}>
					<Label className={styles.label} />
				</span>
			</span>
			:
			<span className={styles.value}>
				{hours}
				<span className={[styles.mark, styles.hours].join(' ')}>
					<Label className={styles.label} />
				</span>
			</span>
			:
			<span className={styles.value}>
				{minutes}
				<span className={[styles.mark, styles.minutes].join(' ')}>
					<Label className={styles.label} />
				</span>
			</span>
			:
			<span className={styles.value}>
				{seconds}
				<span className={[styles.mark, styles.seconds].join(' ')}>
					<Label className={styles.label} />
				</span>
			</span>
		</h3>
	);

const Counter: FC<{ date: string }> = ({ date }) => (
	<Countdown date={date} renderer={renderer} />
);

export default Counter;
