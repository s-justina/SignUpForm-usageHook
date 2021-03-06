import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function SignUpForm({ isVisible, onSignUp }) {
  const emailInput = useRef();
  useEffect(() => {
    if (isVisible) {
      emailInput.current.focus();
    }
  });
  return (
    <form style={{ display: isVisible ? "block" : "none" }}>
      <label>
        E-mail
        <input ref={emailInput} />
      </label>
      <br />
      <button onClick={onSignUp}>Sign Up</button>
    </form>
  );
}

function App() {
  const [isSignUpVisible, setSignUpVisible] = useState(false);
  const timeoutId = useRef();

  useEffect(() => {
    timeoutId.current = setTimeout(() => setSignUpVisible(true), 3000);
    return () => {
      clearTimeout(timeoutId.current);
    };
  }, []);
  return (
    <div className="App">
      <SignUpForm
        isVisible={isSignUpVisible}
        onSignUp={(event) => {
          event.preventDefault();
          setSignUpVisible((prev) => !prev);
          clearTimeout(timeoutId.current);
        }}
      />
      <button onClick={() => setSignUpVisible((prev) => !prev)}>
        Sign up to show form
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
