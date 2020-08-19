import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function SignUpForm({ isVisible }) {
  return (
    <form style={{ display: isVisible ? "block" : "none" }}>
      <label>
        E-mail
        <input />
      </label>
      <br />
      <button>Sign Up</button>
    </form>
  );
}

function App() {
  const [isSignUpVisible, setSignUpVisible] = useState(false);
  return (
    <div className="App">
      <SignUpForm isVisible={isSignUpVisible} />
      <button onClick={() => setSignUpVisible((prev) => !prev)}>
        Sign up to show form
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
