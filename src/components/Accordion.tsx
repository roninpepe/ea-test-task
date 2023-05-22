import { FC, useState } from 'react';
import { TAccordion } from 'types/_';
import styles from 'styles/components/Accordion.module.scss';
import AccordionItem from './AccordionItem';

const Accordion: FC<{ items: TAccordion }> = ({ items }) => {
	const [activeItem, setActiveItem] = useState(0);
	const open = (item: number) => {
		setActiveItem(item);
	};

	return (
		<div className={styles._}>
			{items.map(({ name, date, site, image }, index) => (
				<AccordionItem
					active={index === activeItem}
					name={name}
					date={date}
					site={site}
					image={image}
					number={index + 1}
					open={open.bind(undefined, index)}
				></AccordionItem>
			))}
		</div>
	);
};

export default Accordion;
