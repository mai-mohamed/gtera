import { ProgressBar } from "react-bootstrap";
import { injectIntl } from "react-intl";
import { waiting } from "../../../utils/imgs";
import "./Waiting.scss";

const Waiting = ({ intl: { messages } }: any) => {
  return (
    <div className="container d-flex waiting__wrapper m-auto">
      <div className=" waiting p-5">
        <div className="waiting-content">
          <h3>{messages.landing.still}</h3>
          <h1>{messages.landing.cooking}</h1>
          <p className="my-3">{messages.landing.stayTuned}</p>
          <button className="primary-btn">{messages.buttons.contact}</button>
        </div>
        <div className="waiting-progress">
          <ProgressBar now={20} />
        </div>
      </div>
      <div className="waiting-img">
        <img src={waiting} alt="waiting img" />
      </div>
    </div>
  );
};
export default injectIntl(Waiting);
