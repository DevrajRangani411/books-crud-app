import React from "react";
import { Provider } from "react-redux";
import store from "./Store/store";
import Home from "./Component/Home";
import Books from "./Component/Books";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* With out Redux-Saga */}
        {/* <Home/> */}

        {/* With Redux-Saga */}
        <Books />
      </div>
    </Provider>
  );
}

export default App;
