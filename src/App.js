import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import LandingPage from "./Pages/landingPage/LandingPage";
import PageNotFound from "./Pages/PageNotFound";
import SaleWindow from "./Pages/sale/Sales/SaleWindow";
import AddAccount from "./Pages/accountsPages/AddAccount";
import NewSale from "./Pages/sale/Sales/NewSale";
import SaleInvoice from "./Pages/sale/Sales/SaleInvoice";
import UpdateSale from "./Pages/sale/UpdateSale";
import AddDelivery from "./Pages/sale/Delivery/AddDelivery";
import AddChallan from "./Pages/sale/Challan/AddChallan";
import AddBrand from "./Pages/product/AddBrand";
import AddCategory from "./Pages/product/AddCategory";
import AddUnite from "./Pages/product/AddUnite";
import Product from "./Pages/product/Product";
import ManageProduct from "./Pages/product/ManageProduct";
import AddAccountCategory from "./Pages/accountsPages/AddAccountCategory";
import AddAccountType from "./Pages/accountsPages/AddAccountType";
import AddAccountArea from "./Pages/accountsPages/AddAccountArea";
import AllAccounts from "./Pages/accountsPages/AllAccounts";
import Location from "./Pages/accountsPages/Location";
import ManagePurchase from "./Pages/purchasePages/Purchases/ManagePurchase";
import NewPurchase from "./Pages/purchasePages/Purchases/NewPurchase";
import PurchaseInvoice from "./Pages/purchasePages/Purchases/PurchaseInvoice";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="sale" element={<SaleWindow />} />
          <Route path="newSale" element={<NewSale />} />
          <Route path="addDelivery" element={<AddDelivery />} />
          <Route path="addChallan" element={<AddChallan />} />
          <Route path="updateSale" element={<UpdateSale />} />
          <Route path="saleInvoice" element={<SaleInvoice />} />
        </Route>

        <Route path="product" element={<Dashboard />}>
          <Route path="addproduct" element={<Product />} />
          <Route path="manageproduct" element={<ManageProduct />} />
          <Route path="brand" element={<AddBrand />} />
          <Route path="category" element={<AddCategory />} />
          <Route path="unite" element={<AddUnite />} />
        </Route>

        <Route path="purchase" element={<Dashboard />}>
          <Route path="managepurchase" element={<ManagePurchase />} />
          <Route path="newpurchase" element={<NewPurchase />} />
          <Route path="purchaseInvoice" element={<PurchaseInvoice />} />
        </Route>

        <Route path="accounts" element={<Dashboard />}>
          <Route path="addaccount" element={<AddAccount />} />
          <Route path="allaccounts" element={<AllAccounts />} />
          <Route path="category" element={<AddAccountCategory />} />
          <Route path="accounttype" element={<AddAccountType />} />
          <Route path="area" element={<AddAccountArea />} />
          <Route path="location" element={<Location />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
export default App;
