import React from "react";

import Login from "./Login";

var isLoggedIn = true;

const currentTime = new Date(2020, 7, 4, 18).getHours(); // setting the time past 12 so h1 will render

function App() {
  return (
    <div className="container">
      {// Ternary Operator
      // isLoggedIn ? <h1>Hello</h1> : <Login />

      // AND Operator
      currentTime > 12 && <h1>Why you working late?</h1>}
    </div>
  );
}

export default App;
