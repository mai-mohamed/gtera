import { injectIntl } from "react-intl";
import {
  facebookIcon,
  linkedinIcon,
  locationIcon,
  phoneIcon,
  twitterIcon,
} from "../../../utils/imgs";

const Footer = ({ intl: { messages } }: any) => {
  return (
    <footer className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <div className="d-flex align-items-start my-2">
            <img src={phoneIcon} alt="phone icon" />
            <p className=" px-3">{messages.landing.contact}</p>
          </div>
          <div className="d-flex align-items-start my-2">
            <img src={locationIcon} alt="location icon" className="pt-1" />
            <div className="px-3">
              <p>{messages.landing.firstLocation}</p>
              <p>{messages.landing.secondLocation}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 text-lg-end text-center">
          <div className="social-media">
            <a href="#" target="_blank" className="mx-1">
              <img src={linkedinIcon} alt="linkedin icon" />
            </a>
            <a href="#" target="_blank" className="mx-1">
              <img src={twitterIcon} alt="twitter icon" />
            </a>
            <a href="#" target="_blank" className="mx-1">
              <img src={facebookIcon} alt="facebook icon" />
            </a>
          </div>
          <small className="mt-3 d-block">{messages.landing.copyRights}</small>
        </div>
      </div>
    </footer>
  );
};

export default injectIntl(Footer);
