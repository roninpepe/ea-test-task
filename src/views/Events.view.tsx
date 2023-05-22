import { FC } from 'react';
import { ReactComponent as Arrow } from 'assets/icons/arrow.svg';
import styles from 'styles/views/Events.module.scss';
import Accordion from 'components/Accordion';

const accordionMock = [
	{
		name: 'Hawaiian party',
		date: '31.05.2023',
		site: 'https://google.com',
		image: '9f6f00a46339f0d8a2e376fed4290c60.jpg',
	},
	{
		name: 'Мafia party',
		date: '01.06.2023',
		site: 'https://google.com',
		image: '00fcbad97326a89430424f52d4dc778c.jpg',
	},
	{
		name: 'Party',
		date: '02.06.2023',
		site: 'https://google.com',
		image: '6c135d3112481f769636513a072fff20.jpg',
	},
	{
		name: 'Party on the beach',
		date: '03.06.2023',
		site: 'https://google.com',
		image: '24c8febad8efb43e1ecfd60a34f66e99.jpg',
	},
	{
		name: 'Home Security',
		date: '04.06.2023',
		site: 'https://google.com',
		image: '29f6306c89404b5eb97b67608aa05c76.jpg',
	},
	{
		name: 'Network Design & Implementation',
		date: '05.06.2023',
		site: 'https://google.com',
		image: 'dc913008d96789bdba81f3d9b101915f.jpg',
	},
	{
		name: 'System Design & Engineering',
		date: '06.06.2023',
		site: 'https://google.com',
		image: '9f6f00a46339f0d8a2e376fed4290c60.jpg',
	},
	{
		name: 'Client Care Plans',
		date: '07.06.2023',
		site: 'https://google.com',
		image: 'dc913008d96789bdba81f3d9b101915f.jpg',
	},
];

const Events: FC<{ goToCountdown: () => void; active: boolean }> = ({
	goToCountdown,
	active,
}) => (
	<section
		id="events"
		className={[styles._, active ? '_active' : ''].join(' ')}
	>
		<div className={styles.container}>
			<span className={styles.countdown} onClick={goToCountdown}>
				<span>Back to countdown</span>
				<Arrow className={styles.arrow} />
			</span>
			<h2 className={styles.header}>All events</h2>
		</div>
		<div className={[styles.container, styles.content].join(' ')}>
			<Accordion items={accordionMock} />
		</div>
	</section>
);

export default Events;
