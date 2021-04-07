import React from "react";
import Main from "./containers/Main";
import Aside from "./containers/Aside";

const App = () => {
  return (
    <div className="main__content">
        <Aside/>
        <Main />
    </div>
  );
};

export default App;
