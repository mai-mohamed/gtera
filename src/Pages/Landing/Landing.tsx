import Waiting from "./Waiting/Waiting";
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";
import "./Landing.scss";

const Landing = () => {
  return (
    <div className="landing__wrapper">
      <Nav />
      <Waiting />
      <Footer />
    </div>
  );
};
export default Landing;
