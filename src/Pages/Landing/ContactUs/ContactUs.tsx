import { useState } from "react";
import Input from "../../../Components/Input/Input";
import { sendIcon } from "../../../utils/imgs";
import "./ContactUs.scss";

type IContact = {
  handleCloseModal: () => void;
};

const ContactUs = ({ handleCloseModal }: IContact) => {
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
      //submition action
    } else {
      setContactFormError(true);
    }
  };
  return (
    <div>
      <form>
        <Input
          type="text"
          name="fullName"
          label="Full Name"
          placeholder="Type Full Name"
          handleInputChange={handleInputChange}
        />
        <Input
          type="email"
          name="email"
          label="Your Email"
          placeholder="example@mail.com"
          handleInputChange={handleInputChange}
        />
        <Input
          type="number"
          name="phoneNumber"
          label="Mobile Number (Optional)"
          placeholder="Type Number"
          handleInputChange={handleInputChange}
        />
        <Input
          type="textarea"
          name="message"
          label="Message"
          placeholder="Type Your Message"
          handleInputChange={handleInputChange}
        />
        <div className="d-flex justify-content-end">
          <button className="btn btn-light mx-5" onClick={handleCloseModal}>
            Cancel
          </button>
          <button
            type="submit"
            className="primary-btn"
            onClick={handleSubmitContactus}
          >
            <img src={sendIcon} alt="send icon" />
            <span className="mx-1">Send</span>
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
export default ContactUs;
