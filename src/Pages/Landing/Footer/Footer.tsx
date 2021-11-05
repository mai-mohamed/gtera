import {
  facebookIcon,
  linkedinIcon,
  locationIcon,
  phoneIcon,
  twitterIcon,
} from "../../../utils/imgs";

const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <div className="d-flex align-items-start my-2">
            <img src={phoneIcon} alt="phone icon" />
            <p className=" px-3">
              Egypt: +20 1033 033 411 / Qatar: +974 3000 1629
            </p>
          </div>
          <div className="d-flex align-items-start my-2">
            <img src={locationIcon} alt="location icon" className="pt-1" />
            <div className="px-3">
              <p>Egypt: 20 Greentowers Compound, 20 St., Smouha, Alexandria.</p>
              <p>
                Qatar: Building 34, 319 St., Zone 69, Marina Twin Towers,
                Lusail.
              </p>
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
          <small className="mt-3 d-block">
            © All rights reserved to Gtera Solutions Company.2021
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
