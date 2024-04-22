import Header from "./Layout/Header/Header";
import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./Layout/Footer/Footer";


function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
