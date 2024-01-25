import styles from "@/components/modal/Modal.module.scss";
import Button from "@/components/ui/button/Button";
import {ModalProps} from "@/components/modal/Modal";
import {useEffect, useState} from "react";

interface SlideUpModalProps extends Omit<ModalProps, 'modalType'> {
}
export default function SlideUpModal({title, children, closeModal,callback}: SlideUpModalProps) {
    const [slide, setSlide] =useState<'up' | 'down'>('up')

    return <div className={`${styles['modal-container']} ${styles['slide-up']}`}>
        <div className={`${styles['modal']}`}>
            <header className={`${styles['modal-header']}`}>
                <h2>{title}</h2>
                <Button type='button' size={'xsm'} onClick={closeModal}>닫기</Button>
            </header>
            <main className={`${styles['modal-content']}`}>
                {children}
            </main>
            <footer className={`${styles['modal-footer']}`}>
                <button onClick={callback}
                        className={`${styles['modal__ctrl-btn']} ${styles['modal__ctrl-btn--confirm']}`}
                        type="button">등록
                </button>
            </footer>
        </div>
    </div>
}