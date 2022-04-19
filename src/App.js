import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Blogs from "./components/Blogs/Blogs";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import Services from "./components/Home/Services/Services";
import Signup from "./components/Login/Signup/Signup";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Contact from "./components/Contact/Contact";
import NotFound from "./components/Shared/NotFound/NotFound";
import RequireAuth from "./components/Login/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<><Home></Home><Services></Services><Contact></Contact></>}></Route>
        <Route path="/home" element={<><Home></Home><Services></Services><Contact></Contact></>}></Route>
        <Route path="/about-me" element={<AboutMe></AboutMe>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
