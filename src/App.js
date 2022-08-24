import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import LandingPage from "./Pages/landingPage/LandingPage";
import PageNotFound from "./Pages/PageNotFound";
import SaleWindow from "./Pages/sale/Sales/SaleWindow";
import AddAccount from "./Pages/accountsPages/AddAccount";
import NewSale from "./Pages/sale/Sales/NewSale";
import SaleInvoice from "./Pages/sale/Sales/SaleInvoice";
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
import ManagePurchase from "./Pages/purchasePages/ManagePurchase";
import NewPurchase from "./Pages/purchasePages/NewPurchase";
import PurchaseInvoice from "./Pages/purchasePages/PurchaseInvoice";
import SaleReports from "./Pages/sale/Sales/SaleReports";
import PurchaseReports from "./Pages/purchasePages/PurchaseReports";
import ProductionWindow from "./Pages/productionPages/ProductionWindow";
import AddProductionOrder from "./Pages/productionPages/AddProductionOrder";
import ProductionType from "./Pages/productionPages/ProductionType";
import StockWindow from "./Pages/StockPages/StockWindow";
import StockTranfer from "./Pages/StockPages/StockTranfer";
import WirehouseWindow from "./Pages/warehousePages/WirehouseWindow";
import VehiclesWindow from "./Pages/warehousePages/VehiclesWindow";
import CashCounterWindow from "./Pages/CashCounterPages/CashCounterWindow";
import ManagePendingDelivery from "./Pages/sale/Delivery/ManagePendingDelivery";
import ManageDelivery from "./Pages/sale/Delivery/ManageDelivery";
import ManageChallan from "./Pages/sale/ManageChallan";
import AddLot from "./Pages/product/AddLot";
import AddReceipt from "./Pages/purchasePages/AddReceipt";
import PendingReceipt from "./Pages/purchasePages/PendingReceipt";
import ManageReceiptChallan from "./Pages/purchasePages/ManageReceiptChallan";
import ManageReceipt from "./Pages/purchasePages/ManageReceipt";
import BalanceCheck from "./Pages/reportPages/BalanceCheck";
import ReceivedVoucherWindow from "./Pages/voucherPages/ReceivedVoucherWindow";
import ReceivedVoucherInvoice from "./Pages/voucherPages/ReceivedVoucherInvoice";
import PaymentVoucherInvoice from "./Pages/voucherPages/PaymentVoucherInvoice";
import PaymentVoucherWindow from "./Pages/voucherPages/PaymentVoucherWindow";
import VoucherApproval from "./Pages/voucherPages/VoucherApproval";
import Division from "./Pages/hrmPages/Division";
import Designation from "./Pages/hrmPages/Designation";
import AddEmployee from "./Pages/hrmPages/AddEmployee";
import ManageEmployee from "./Pages/hrmPages/ManageEmployee";
import MenualAttendence from "./Pages/attendencePages/MenualAttendence";
import ManageAttendence from "./Pages/attendencePages/ManageAttendence";

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
          <Route path="saleInvoice" element={<SaleInvoice />} />
          <Route path="salereport" element={<SaleReports />} />
          <Route path="manageDelivery" element={<ManageDelivery />} />
          <Route
            path="managePendingDelivery"
            element={<ManagePendingDelivery />}
          />
          <Route path="manageChallan" element={<ManageChallan />} />
        </Route>

        <Route path="product" element={<Dashboard />}>
          <Route path="addproduct" element={<Product />} />
          <Route path="manageproduct" element={<ManageProduct />} />
          <Route path="brand" element={<AddBrand />} />
          <Route path="category" element={<AddCategory />} />
          <Route path="unite" element={<AddUnite />} />
          <Route path="lot" element={<AddLot />} />
        </Route>

        <Route path="purchase" element={<Dashboard />}>
          <Route path="managepurchase" element={<ManagePurchase />} />
          <Route path="newpurchase" element={<NewPurchase />} />
          <Route path="purchaseInvoice" element={<PurchaseInvoice />} />
          <Route path="purchasereport" element={<PurchaseReports />} />
          <Route path="addreceipt" element={<AddReceipt />} />
          <Route path="penddingreceipt" element={<PendingReceipt />} />
          <Route path="receiptchallan" element={<ManageReceiptChallan />} />
          <Route path="managereceipt" element={<ManageReceipt />} />
        </Route>
        <Route path="production" element={<Dashboard />}>
          <Route path="production" element={<ProductionWindow />} />
          <Route path="addproduction" element={<AddProductionOrder />} />
          <Route path="productiontype" element={<ProductionType />} />
        </Route>
        <Route path="stock" element={<Dashboard />}>
          <Route path="stockreport" element={<StockWindow />} />
          <Route path="stocktransfer" element={<StockTranfer />} />
        </Route>
        <Route path="repots" element={<Dashboard />}>
          <Route path="balancecheck" element={<BalanceCheck />} />
        </Route>

        <Route path="warehouse" element={<Dashboard />}>
          <Route path="wirehousewindow" element={<WirehouseWindow />} />
          <Route path="vehicles" element={<VehiclesWindow />} />
        </Route>

        <Route path="accounts" element={<Dashboard />}>
          <Route path="addaccount" element={<AddAccount />} />
          <Route path="allaccounts" element={<AllAccounts />} />
          <Route path="category" element={<AddAccountCategory />} />
          <Route path="accounttype" element={<AddAccountType />} />
          <Route path="area" element={<AddAccountArea />} />
          <Route path="location" element={<Location />} />
        </Route>

        <Route path="counter" element={<Dashboard />}>
          <Route path="cashcounter" element={<CashCounterWindow />} />
          <Route path="receivedVoucher" element={<ReceivedVoucherWindow />} />
          <Route path="paymentVoucher" element={<PaymentVoucherWindow />} />
          <Route path="voucherapproval" element={<VoucherApproval />} />
          <Route
            path="paymentVoucherInvoice"
            element={<PaymentVoucherInvoice />}
          />
          <Route
            path="receivedVoucherInvoice"
            element={<ReceivedVoucherInvoice />}
          />
        </Route>
        <Route path="hrm" element={<Dashboard />}>
          <Route path="manageemployee" element={<ManageEmployee />} />
          <Route path="addemployee" element={<AddEmployee />} />
          <Route path="division" element={<Division />} />
          <Route path="designation" element={<Designation />} />
        </Route>
        <Route path="attendence" element={<Dashboard />}>
          <Route path="menualattendence" element={<MenualAttendence />} />
          <Route path="manageattendence" element={<ManageAttendence />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
export default App;
