import { Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentLang } from "../../../store/Lang/actions";
import { logo } from "../../../utils/imgs";
const Nav = () => {
  const dispatch = useDispatch();

  const lang = useSelector(({ lang }: { lang: { lang: string } }) => lang.lang);
  const handleToggleLang = (): void => {
    if (lang == "en") {
      dispatch(setCurrentLang("ar"));
      localStorage.setItem("lang", "ar");
    } else {
      dispatch(setCurrentLang("en"));
      localStorage.setItem("lang", "en");
    }
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
