import { FC, FormEventHandler, useState } from 'react';
import Modal from 'components/Modal';
import { ReactComponent as Arrow } from 'assets/icons/arrow.svg';
import styles from 'styles/components/Subscribe.module.scss';

const Subscribe: FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const handleModalOpen = () => {
		setIsModalOpen(true);
	};
	const handleModalClose = () => {
		setIsModalOpen(false);
	};
	const handleSubsribeSubmit: FormEventHandler = (e) => {
		const form = e.currentTarget as HTMLFormElement;
		e.preventDefault();
		handleModalOpen();
		form.reset();
	};

	return (
		<>
			<form className={styles._} onSubmit={handleSubsribeSubmit}>
				<input
					type="email"
					name="subcribe"
					id="subscribe"
					placeholder="Enter your Email and get notified"
					className={styles.input}
					required
				/>
				<button type="submit" className={styles.submit}>
					<Arrow className={styles.arrow} />
				</button>
			</form>
			<Modal state={isModalOpen} handleClose={handleModalClose}>
				<div className={styles.modal}>
					<h3 className={styles.header}>SUCCESS!</h3>
					<div>You have successfully subscribed to the email newsletter</div>
				</div>
			</Modal>
		</>
	);
};

export default Subscribe;
