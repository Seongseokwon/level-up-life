import {createPortal} from "react-dom";
import {ReactNode} from "react";
import AlertModal from "@/components/modal/AlertModal";
import ConfirmModal from "@/components/modal/ConfirmModal";
import SlideUpModal from "@/components/modal/SlideUpModal";


interface ModalStyleProps {
}

export interface ModalProps extends ModalStyleProps {
    children: ReactNode,
    title: string,
    modalType: 'alert' | 'confirm' | 'slideUp',
    closeModal: () => void,
    callback?: () => void
}

export default function Modal({children, title, modalType, closeModal, callback}: ModalProps) {
    const modalTypeMap = {
        'alert' : <AlertModal title={title}  closeModal={closeModal} callback={callback}>{children}</AlertModal>,
        'confirm' : <ConfirmModal title={title} closeModal={closeModal} callback={callback}>{children}</ConfirmModal>,
        'slideUp' : <SlideUpModal title={title} closeModal={closeModal} callback={callback}>{children}</SlideUpModal>
    }
    return createPortal(
        <>
            {modalTypeMap[modalType]}
        </>,
        document.getElementById('modal')!
    )

}