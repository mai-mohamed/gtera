import { Navbar } from "react-bootstrap";
import { logo } from "../../../utils/imgs";
const Nav = () => {
  return (
    <>
      <Navbar>
        <div className="container-fluid">
          <Navbar.Brand>
            <img src={logo} alt="gtera logo" />
          </Navbar.Brand>
        </div>
      </Navbar>
    </>
  );
};
export default Nav;
