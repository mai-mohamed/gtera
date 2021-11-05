import { IntlProvider } from "react-intl";
import messages from "./assets/local/messages";
import Landing from "./Pages/Landing/Landing";
import "./App.scss";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    localStorage.setItem("lang", "en");
  }, []);
  const lang = localStorage.getItem("lang") || "en";
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
