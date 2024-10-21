import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Category from "./Pages/Category/Category";
import AboutPage from "./Pages/About/AboutPage";
import ContactPage from "./Pages/Contact/Contact";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/category" element={<Category/>}></Route>
      <Route path="/about" element={<AboutPage/>}></Route>
      <Route path="/contact" element={<ContactPage/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
