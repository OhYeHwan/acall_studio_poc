import React, { useContext } from "react";
import { UserContext } from ".";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Main, MyProject } from "./pages";

function App() {
  const { user } = useContext(UserContext);

  return (
    <Router>
      <GlobalStyle />
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/myproject" element={<MyProject />} />
      </Routes>
    </Router>
  );
}

export default App;
