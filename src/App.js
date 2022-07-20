import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import LandingPage from "./Pages/landingPage/LandingPage";
import Page2 from "./Pages/Dashboard/Page2";
import PageNotFound from "./Pages/PageNotFound";
import SaleWindow from "./Pages/sale/SaleWindow";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="sale" element={<SaleWindow />} />
          <Route path="home2" element={<Page2 />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
export default App;
