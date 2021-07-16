import { Modal as ModalBootstrap } from "react-bootstrap"

interface ModalProps {
    isOpen?:boolean,
    onHide?:any,
    children:any,
    title:string,
    className?:string
}

const Modal = ({ isOpen, onHide, children, title, className  }: ModalProps) => {
    return (
        <ModalBootstrap
            className={className}
            size="lg"
            aria-labelledby="contained-ModalBootstrap-title-vcenter"
            centered
            show={isOpen}
            onHide={onHide}>
            <ModalBootstrap.Header closeButton>
                <ModalBootstrap.Title>{title}</ModalBootstrap.Title>
            </ModalBootstrap.Header>
            <ModalBootstrap.Body>
                {children}
            </ModalBootstrap.Body>
        </ModalBootstrap>
    )
}

export default Modal;