import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import LandingPage from "./Pages/landingPage/LandingPage";
import PageNotFound from "./Pages/PageNotFound";
import SaleWindow from "./Pages/sale/SaleWindow";
import AddAccount from "./Pages/allAccountsPage/AddAccount";
import NewSale from "./Pages/sale/NewSale";
import SaleInvoice from "./Pages/sale/SaleInvoice";
import UpdateSale from "./Pages/sale/UpdateSale";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="sale" element={<SaleWindow />} />
          <Route path="newSale" element={<NewSale />} />
          <Route path="updateSale" element={<UpdateSale />} />
          <Route path="saleInvoice" element={<SaleInvoice />} />
          <Route path="addaccount" element={<AddAccount />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
export default App;
