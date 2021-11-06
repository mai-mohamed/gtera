import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "../Pages/Landing/Landing";
import ToDo from "../Pages/ToDo/ToDo";
import History from "./History";
const Routes = () => {
  return (
    <div>
      <Router history={History}>
        <Route path="/todo" component={ToDo} exact />
        <Route path="/" component={Landing} exact />
      </Router>
    </div>
  );
};

export default Routes;
