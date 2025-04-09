import React from "react";
import { CookiesProvider } from "react-cookie"; 
import "./App.scss";
import { Router } from "./routes/Router";

function App() {
  return (
    <CookiesProvider>
      <div className="App">
        <Router />
      </div>
    </CookiesProvider>
  );
}

export default App;