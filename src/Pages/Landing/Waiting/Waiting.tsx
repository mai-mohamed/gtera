import { Button } from "react-bootstrap";
import "./Waiting.scss";

const Waiting = () => {
  return (
    <div className="container row ">
      <div className="col-lg-6 waiting p-5">
        <div className="waiting-content">
          <h3>We are still</h3>
          <h1>Cooking Our Website...</h1>
          <p className="my-3">
            We are working on our website and going to launch it soon, Stay
            Tuned.
          </p>
          <Button>contact</Button>
        </div>
      </div>
    </div>
  );
};
export default Waiting;
