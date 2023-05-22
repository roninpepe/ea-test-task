import { FC } from 'react';
import ReactModal from 'react-modal';
import { ReactComponent as Cross } from 'assets/icons/cross.svg';
import styles from 'styles/components/Modal.module.scss';

const Modal: FC<{
	state: boolean;
	handleClose: () => void;
	children?: JSX.Element;
}> = ({ state, handleClose, children }) => {
	return (
		<ReactModal
			isOpen={state}
			onRequestClose={handleClose}
			className={styles.content}
			overlayClassName={styles.overlay}
		>
			<Cross className={styles.cross} onClick={handleClose} />
			{children}
			<div className={styles.close} onClick={handleClose}>
				Colse
			</div>
		</ReactModal>
	);
};

export default Modal;
