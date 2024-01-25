import styles from "@/components/modal/Modal.module.scss";
import Button from "@/components/ui/button/Button";
import {ModalProps} from "@/components/modal/Modal";

interface ConfirmModalProps extends Omit<ModalProps, 'modalType'> {
}

export default function ConfirmModal({title, children, closeModal, callback}: ConfirmModalProps) {
    return <div className={`${styles['modal-container']} ${styles['popup']}`}>
        <div className={`${styles['modal']}`}>
            <header className={`${styles['modal-header']}`}>
                <h2>{title}</h2>
                <Button type='button' size={'xsm'}>닫기</Button>
            </header>
            <main className={`${styles['modal-content']}`}>
                {children}
            </main>
            <footer className={`${styles['modal-footer']}`}>
                <button onClick={closeModal}
                        className={`${styles['modal__ctrl-btn']} ${styles['modal__ctrl-btn--close']}`}
                        type="button">닫기
                </button>
                {/* 3항 연산자로 처리하는게 좀 더 안정적임 */}
                <button onClick={callback}
                        className={`${styles['modal__ctrl-btn']} ${styles['modal__ctrl-btn--confirm']}`}
                        type="button">등록
                </button>
            </footer>
        </div>
    </div>
}