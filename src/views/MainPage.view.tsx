import { FC, useState } from 'react';
import ReactPageScroller from 'react-page-scroller';
import Countdown from 'views/Countdown.view';
import Events from 'views/Events.view';

const MainPage: FC = () => {
	const [page, setPage] = useState(0);
	const goTo = (p: number) => {
		setPage(p);
	};
	const goToEvents = () => {
		goTo(1);
	};
	const goToCountdown = () => {
		goTo(0);
	};
	return (
		<ReactPageScroller
			containerWidth="100%"
			blockScrollDown={true}
			blockScrollUp={true}
			renderAllPagesOnFirstRender={false}
			customPageNumber={page}
		>
			<Countdown goToEvents={goToEvents} active={!page} />
			<Events goToCountdown={goToCountdown} active={!!page} />
		</ReactPageScroller>
	);
};

export default MainPage;
