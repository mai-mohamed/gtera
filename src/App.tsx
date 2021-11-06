import { IntlProvider } from "react-intl";
import messages from "./assets/local/messages";
import "./App.scss";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Routes from "./routes/routes";

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
        <Routes />
      </div>
    </IntlProvider>
  );
}

export default App;
