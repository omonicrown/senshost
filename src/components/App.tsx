import * as React from "react";
import logo from "./logo.svg";
import { Loader } from "@sebgroup/react-components/dist/Loader";
import { AppRoute } from "../utils/functions";
import { Redirect, Switch, RouteComponentProps } from "react-router";


const NotFound: React.LazyExoticComponent<React.FunctionComponent<RouteComponentProps>>  =  React.lazy(() => import("./notFound/404"));
const Home: any  =  React.lazy(() => import("./home/Home"));

interface AppProps extends RouteComponentProps {}
export default class App extends React.PureComponent<{}, {}> {
  constructor(props: AppProps) {
    super(props);
  }

  render() {
    console.log("Oga ", this.props);
    return (
      <div className="main-app-container">
        <React.Suspense fallback={<Loader toggle={true} />}>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <AppRoute path="/home" component={Home} props={this.props} />
            <AppRoute path="*" component={NotFound} props={this.props} />
          </Switch>
        </React.Suspense>
      </div>
    );
  }
}
