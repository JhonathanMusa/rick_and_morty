import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./redux/store";
import { CharacterDetails } from "./pages/CharacterDetails";
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Switch>
            <Provider store={store}>
              <Route path="/details/:id" component={CharacterDetails} />
              <Route path="/" exact component={Landing} />
            </Provider>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
