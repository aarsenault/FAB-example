import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CssBaseline from "@material-ui/core/CssBaseline";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <Router>
      <CssBaseline />
      <GlobalStyles />
      <div className="App">
        <div className="content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="*" exact component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
