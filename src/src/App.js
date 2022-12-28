import Home from "./pages/home/Home";

import List from "./pages/list/List";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

import Contact from "./pages/contact/Contact";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
           
           
            <Route path="invoices">
              <Route index element={<List />} />
              
              
            </Route>
            <Route path="/contact" element={<Contact/>}>

            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
