import { Provider } from "react-redux";
import "./App.css";
import { ResultSearch } from "./Components/ResultSearch";
import { Search } from "./Components/Search";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Search />
        <ResultSearch />
      </Provider>
    </div>
  );
}

export default App;
