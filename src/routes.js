import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import SignIn from "./views/SignIn"

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
