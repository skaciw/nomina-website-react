import Header from "./components/Header";
import "../src/css/App.css"
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  
import React, { useEffect,useState } from "react";
import Loading from "./components/Loading";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

function App() {

  const [loading, setLoading] = useState(true);

  
  useEffect(()=>{
    setTimeout(() => setLoading(false), 2000)
  },[]);
  
  return (
    <>{loading === false?(
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
        <Route path="/contactus" element={<ContactUs/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    ) 
    : (
      <Loading/>
    )}</>
  );
}
 
export default App;