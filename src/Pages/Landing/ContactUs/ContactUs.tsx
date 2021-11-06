import { useState } from "react";
import { injectIntl } from "react-intl";
import { useDispatch } from "react-redux";
import Input from "../../../Components/Input/Input";
import { submitContactRequest } from "../../../store/Landing/actions";
import { sendIcon } from "../../../utils/imgs";
import "./ContactUs.scss";

type IContact = {
  handleCloseModal: () => void;
  intl: any;
};

const ContactUs = ({ handleCloseModal, intl: { messages } }: IContact) => {
  const dispatch = useDispatch();

  const [contactForm, setContactForm] = useState({
    fullName: "",
    email: "",
    phoneNumer: "",
    message: "",
  });
  const [contactFormError, setContactFormError] = useState(false);
  const handleInputChange = (e: any): void => {
    setContactFormError(false);
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleSubmitContactus = (e: any): void => {
    e.preventDefault();
    if (
      contactForm.fullName !== "" &&
      contactForm.email !== "" &&
      contactForm.message !== ""
    ) {
      dispatch(submitContactRequest(contactForm));
    } else {
      setContactFormError(true);
    }
  };
  return (
    <div>
      <form action="post">
        <Input
          type="text"
          name="fullName"
          label={messages.contactForm.fullNameLabel}
          placeholder={messages.contactForm.fullNamePlaceholder}
          handleInputChange={handleInputChange}
        />
        <Input
          type="email"
          name="email"
          label={messages.contactForm.emailLabel}
          placeholder={messages.contactForm.emailPlaceholder}
          handleInputChange={handleInputChange}
        />
        <Input
          type="number"
          name="phoneNumber"
          label={messages.contactForm.phoneLabel}
          placeholder={messages.contactForm.phonePlaceholder}
          handleInputChange={handleInputChange}
        />
        <Input
          type="textarea"
          name="message"
          label={messages.contactForm.messageLabel}
          placeholder={messages.contactForm.messagePlaceholder}
          handleInputChange={handleInputChange}
        />
        <div className="d-flex justify-content-end">
          <button className="btn btn-light mx-5" onClick={handleCloseModal}>
            {messages.buttons.cancel}
          </button>
          <button
            type="submit"
            className="primary-btn"
            onClick={handleSubmitContactus}
          >
            <img src={sendIcon} alt="send icon" />
            <span className="mx-1">{messages.buttons.send}</span>
          </button>
        </div>
        {contactFormError && (
          <small className="error mx-2 d-block">
            Please Enter the required values
          </small>
        )}
      </form>
    </div>
  );
};
export default injectIntl(ContactUs);
