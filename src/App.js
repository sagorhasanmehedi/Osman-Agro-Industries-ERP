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
import ManagePurchase from "./Pages/purchasePages/Purchases/ManagePurchase";
import NewPurchase from "./Pages/purchasePages/Purchases/NewPurchase";
import PurchaseInvoice from "./Pages/purchasePages/Purchases/PurchaseInvoice";
import SaleReports from "./Pages/sale/Sales/SaleReports";
import PurchaseReports from "./Pages/purchasePages/Purchases/PurchaseReports";
import ProductionWindow from "./Pages/productionPages/ProductionWindow";
import AddProductionOrder from "./Pages/productionPages/AddProductionOrder";
import ProductionType from "./Pages/productionPages/ProductionType";
import StockWindow from "./Pages/StockPages/StockWindow";
import StockTranfer from "./Pages/StockPages/StockTranfer";
import DeliveryWindow from "./Pages/warehousePages/DeliveryWindow";
import PenddingDeliveryWindow from "./Pages/warehousePages/PenddingDeliveryWindow";
import WirehouseWindow from "./Pages/warehousePages/WirehouseWindow";
import ReceiptWindow from "./Pages/warehousePages/ReceiptWindow";
import PendingReceiptWindow from "./Pages/warehousePages/PendingReceiptWindow";
import VehiclesWindow from "./Pages/warehousePages/VehiclesWindow";
import CashCounterWindow from "./Pages/CashCounterPages/CashCounterWindow";
import ManageDelivery from "./Pages/sale/Delivery/ManageDelivery";
import CashBook from "./Pages/Report/CashBook";
import InventoryLedger from "./Pages/Report/InventoryLedger";
import BankBook from "./Pages/Report/BankBook";
import Inbox from "./Pages/message/Inbox";
import Send from "./Pages/message/Send";
import Sending from "./Pages/message/Sending";
import ScheduleSMS from "./Pages/message/ScheduleSMS";
import Outbox from "./Pages/message/Outbox";
import GatewayWindow from "./Pages/message/gateways/GatewayWindow";
import AddGateway from "./Pages/message/gateways/AddGateway";

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
          <Route path="purchasereport" element={<PurchaseReports />} />
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

        <Route path="warehouse" element={<Dashboard />}>
          <Route path="wirehousewindow" element={<WirehouseWindow />} />
          <Route path="delivery" element={<DeliveryWindow />} />
          <Route path="pendingdelivery" element={<PenddingDeliveryWindow />} />
          <Route path="receipt" element={<ReceiptWindow />} />
          <Route path="pendingreceipt" element={<PendingReceiptWindow />} />
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
        </Route>

        <Route path="report" element={<Dashboard />}>
          <Route path="cashbook" element={<CashBook />} />
          <Route path="inventoryledger" element={<InventoryLedger />} />
          <Route path="bankbook" element={<BankBook />} />
        </Route>

        <Route path="message" element={<Dashboard />}>
          <Route path="inbox" element={<Inbox />} />
          <Route path="send" element={<Send />} />
          <Route path="sending" element={<Sending />} />
          <Route path="scheduleSMS" element={<ScheduleSMS />} />
          <Route path="outbox" element={<Outbox />} />
          <Route path="gatewaywindow" element={<GatewayWindow />} />
          <Route path="addgateway" element={<AddGateway />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
export default App;
