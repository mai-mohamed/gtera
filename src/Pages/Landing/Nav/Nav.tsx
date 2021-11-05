import { Navbar } from "react-bootstrap";
import { logo } from "../../../utils/imgs";
const Nav = () => {
  const lang = localStorage.getItem("lang");
  const handleToggleLang = (): void => {
    lang == "en"
      ? localStorage.setItem("lang", "ar")
      : localStorage.setItem("lang", "en");
  };
  return (
    <>
      <Navbar>
        <div className="container-fluid py-3">
          <Navbar.Brand>
            <img src={logo} alt="gtera logo" />
          </Navbar.Brand>
          <div className="lang cursor-pointer" onClick={handleToggleLang}>
            {lang == "en" ? <p>العربيه</p> : <p>English</p>}
          </div>
        </div>
      </Navbar>
    </>
  );
};
export default Nav;
