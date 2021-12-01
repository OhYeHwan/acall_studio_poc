import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AccountModal, Navbar } from "./components";
import { Main, MyProject } from "./pages";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <AccountModal />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/myproject" element={<MyProject />} />
      </Routes>
    </Router>
  );
}

export default App;
