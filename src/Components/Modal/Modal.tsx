import { Modal } from "react-bootstrap";
import { IModal } from "./Modal.type";
import "./Modal.scss";

const ModalComponent = ({
  show,
  handleClose,
  heading,
  content,
  size,
}: IModal) => {
  return (
    <div className="modal__wrapper">
      <Modal show={show} onHide={handleClose} size={size || "lg"}>
        <Modal.Header closeButton>
          <Modal.Title className="fsize-13 weight-600">{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalComponent;
