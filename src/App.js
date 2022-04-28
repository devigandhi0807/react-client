
import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Dashboard from "./app/components/home/Dashboard";
import ContactSheetsPage from "./app/components/ContactSheet/ContactSheetsPage";
import AddContact from "./app/components/ContactSheet/AddContact";
import "react-toastify/dist/ReactToastify.css";
import Login from "./app/components/auth/Login";
import Register from "./app/components/auth/Register";
function App() {
  return (
  <Switch>
     <Route exact path="/register" element={<Register/>}/>
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/" element={<Dashboard/>}/>
    <Route exact path="/contactsheets" element={<ContactSheetsPage/>} />
    <Route exact path="/contactsheets/add" element={<AddContact/>} />
  </Switch>

  );
}

export default App;

