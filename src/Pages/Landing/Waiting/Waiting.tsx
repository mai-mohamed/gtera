import { ProgressBar } from "react-bootstrap";
import { waiting } from "../../../utils/imgs";
import "./Waiting.scss";

const Waiting = () => {
  return (
    <div className="container d-flex waiting__wrapper m-auto">
      <div className=" waiting p-5">
        <div className="waiting-content">
          <h3>We are still</h3>
          <h1>Cooking Our Website...</h1>
          <p className="my-3">
            We are working on our website and going to launch it soon, Stay
            Tuned.
          </p>
          <button className="primary-btn">contact</button>
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
export default Waiting;
