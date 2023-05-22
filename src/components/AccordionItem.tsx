import { FC } from 'react';
import { IAccordionItem } from 'types/_';
import styles from 'styles/components/Accordion.module.scss';

interface IAccordionItemProps extends Required<IAccordionItem> {
	key?: number | string;
	active: boolean;
	open: () => void;
}

const AccordionItem: FC<IAccordionItemProps> = ({
	number,
	name,
	date,
	site,
	image,
	active,
	open,
}) => (
	<div className={[styles.item, active ? styles.active : ''].join(' ')}>
		<div
			className={styles.spine}
			onClick={open}
			style={{ backgroundImage: `url(assets/images/${image})` }}
		>
			<div className={styles.number}>{`${number}`.padStart(2, '0')}</div>
			<div className={styles.title}>{name}</div>
		</div>
		<div
			className={[styles.cover, active ? styles.active : ''].join(' ')}
			style={{
				backgroundImage: `url(assets/images/${image})`,
			}}
		>
			<div className={styles.details}>
				<div className={styles.name}>{name}</div>
				<div className={styles.date}>{date}</div>
				<a href={site} className={styles.site}>
					More information
				</a>
			</div>
		</div>
	</div>
);

export default AccordionItem;
