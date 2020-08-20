import React from "react";
import { Provider } from "react-redux";
import store from "./Store/store";
import Books from "./Component/Books";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* With Redux-Saga */}
        <Books />
      </div>
    </Provider>
  );
}

export default App;
