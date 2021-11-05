import Waiting from "./Waiting/Waiting";
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";
import "./Landing.scss";

const Landing = () => {
  return (
    <div className="landing__wrapper">
      <div className="pattern">
        <Nav />
        <Waiting />
        <Footer />
      </div>
    </div>
  );
};
export default Landing;
