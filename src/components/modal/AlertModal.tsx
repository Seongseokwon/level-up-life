import {ModalProps} from "@/components/modal/Modal";
import styles from "@/components/modal/Modal.module.scss";
import Button from "@/components/ui/button/Button";

interface AlertModalProps extends Omit<ModalProps, 'modalType'>{

}
export default function AlertModal({title, children, closeModal, callback}: AlertModalProps) {
    return <div className={`${styles['modal-container']}`}>
        <div className={`${styles['modal']}`}>
            <header className={`${styles['modal-header']}`}>
                <h2>{title}</h2>
                <Button type='button'>닫기</Button>
            </header>
            <main className={`${styles['modal-content']}`}>
                {children}
            </main>
            <footer className={`${styles['modal-footer']}`}>
                <button onClick={closeModal}
                        className={`${styles['modal__ctrl-btn']} ${styles['modal__ctrl-btn--close']}`}
                        type="button">닫기
                </button>
                )
            </footer>
        </div>
    </div>
}