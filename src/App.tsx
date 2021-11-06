import { IntlProvider } from "react-intl";
import messages from "./assets/local/messages";
import Landing from "./Pages/Landing/Landing";
import "./App.scss";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  useEffect(() => {
    localStorage.setItem("lang", "en");
  }, []);
  const lang = useSelector(({ lang }: { lang: { lang: string } }) => lang.lang);

  return (
    //@ts-ignore
    <IntlProvider locale={lang} messages={messages[lang]}>
      <div
        className={lang === "ar" ? "rtl" : "ltr"}
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        <Landing />
      </div>
    </IntlProvider>
  );
}

export default App;
