import { Route, Switch } from "react-router";
import {
  ANALYTICS_PAGE_ROUTE,
} from "./route-paths";
import Analytics from "../views/analytics/analytics";

function Routes(props) {
  return (
    <Switch>
      <Route path={ANALYTICS_PAGE_ROUTE}>
        <Analytics />
      </Route>
    </Switch>
  );
}

export default Routes;
