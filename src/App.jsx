import { Outlet, Navigate } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" />;
  }

  return (
    <div className="overflow-hidden">
      <ScrollToTop />
      <Header />
      <Outlet />  
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
