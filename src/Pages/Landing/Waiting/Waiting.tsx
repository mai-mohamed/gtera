import { useState } from "react";
import { ProgressBar } from "react-bootstrap";
import { injectIntl } from "react-intl";
import ModalComponent from "../../../Components/Modal/Modal";
import { messageIcon, waiting } from "../../../utils/imgs";
import ContactUs from "../ContactUs/ContactUs";
import "./Waiting.scss";

const Waiting = ({ intl: { messages } }: any) => {
  const [contactModal, setContactModal] = useState(false);

  const handleContactClick = (): void => {
    setContactModal(true);
  };
  const handleClose = (): void => {
    setContactModal(false);
  };
  return (
    <>
      <div className="container d-flex waiting__wrapper justify-content-center">
        <div className=" waiting p-5">
          <div className="waiting-content p-3">
            <h3>{messages.landing.still}</h3>
            <h1>{messages.landing.cooking}</h1>
            <p className="my-3">{messages.landing.stayTuned}</p>
            <button className="primary-btn" onClick={handleContactClick}>
              <img src={messageIcon} alt="message icon" />
              <span className="mx-2">{messages.buttons.contact}</span>
            </button>
          </div>
          <div className="waiting-progress">
            <ProgressBar now={20} />
          </div>
        </div>
        <div className="waiting-img">
          <img src={waiting} alt="waiting img" />
        </div>
      </div>
      <ModalComponent
        show={contactModal}
        heading="Send A Message"
        content={<ContactUs handleCloseModal={handleClose} />}
        handleClose={handleClose}
      />
    </>
  );
};
export default injectIntl(Waiting);
