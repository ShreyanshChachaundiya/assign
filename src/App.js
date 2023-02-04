import "./App.css";
import Dashboard from "./components/Dashboard";
import Campaign from "./pages/Campaign";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Campaign_first from "./pages/Campaign_first";
import Datex from "./components/Date";

function App() {
  return (
    <div className="App">
      <Router>
        <Dashboard />
        <div className="vertical">
          <Header />
          <main>
            <Switch>
              <Route path="/campaign" exact>
                <Campaign />
              </Route>
              <Route path="/campFir" exact>
                <Campaign_first />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
