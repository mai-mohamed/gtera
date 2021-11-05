import { Modal } from "react-bootstrap";
import { IModal } from "./Imodal";
const ModalComponent = ({
  show,
  handleClose,
  heading,
  content,
  size,
}: IModal) => {
  return (
    <div className="modal__wrapper">
      <Modal
        show={show}
        onHide={handleClose}
        size={size || "lg"}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalComponent;
