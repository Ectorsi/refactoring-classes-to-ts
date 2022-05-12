import ReactModal from 'react-modal';

type ModalProps = {
  children: React.ReactNode,
  isOpen: boolean,
  setIsOpen: () => void,
}

const Modal = ({ children, isOpen, setIsOpen }: ModalProps) => {

  return (
    <ReactModal
      shouldCloseOnOverlayClick={true}
      onRequestClose={setIsOpen}
      isOpen={isOpen}
      ariaHideApp={false}
      className='react-modal-content'
      overlayClassName='react-modal-overlay'
    >
      {children}
    </ReactModal>
  );
}

export default Modal;
