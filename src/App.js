import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Contact from "./routes/contact/contact.component";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="contact" element={<Contact></Contact>}></Route>
    </Routes>
  );
}

export default App;
