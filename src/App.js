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
import ManagerepRepresentive from "./Pages/marketing/ManagerepRepresentive";
import MarketingReport from "./Pages/marketing/MarketingReport";
import ManageBankName from "./Pages/bank/ManageBankName";
import ManageBankBranch from "./Pages/bank/ManageBankBranch";
import AccountCategory from "./Pages/bank/AccountCategory";
import AccountType from "./Pages/bank/AccountType";
import ManageBankAccount from "./Pages/bank/ManageBankAccount ";
import AddAccountForm from "./components/bank/AddAccountForm";

import ManageChallan from "./Pages/sale/ManageChallan";
import AddLot from "./Pages/product/AddLot";
import AddReceipt from "./Pages/purchasePages/AddReceipt";
import PendingReceipt from "./Pages/purchasePages/PendingReceipt";
import ManageReceiptChallan from "./Pages/purchasePages/ManageReceiptChallan";
import ManageReceipt from "./Pages/purchasePages/ManageReceipt";
import BalanceCheck from "./Pages/reportPages/BalanceCheck";

import ManagePendingDelivery from "./Pages/sale/Delivery/ManagePendingDelivery";
import CheckBook from "./Pages/bank/CheckBook";
import CheckReportPage from "./Pages/bank/CheckReportPage";

import ReceivedVoucherWindow from "./Pages/paymentVoucherPages/ReceivedVoucherWindow";
import ReceivedVoucherInvoice from "./Pages/paymentVoucherPages/ReceivedVoucherInvoice";
import PaymentVoucherInvoice from "./Pages/paymentVoucherPages/PaymentVoucherInvoice";
import PaymentVoucherWindow from "./Pages/paymentVoucherPages/PaymentVoucherWindow";
import BankDepositwindow from "./Pages/bank/bankdeposit/BankDepositwindow";
import BankWithdrawWindow from "./Pages/bank/bankwithdraw/BankWithdrawWindow";
import DepositWendowInvoice from "./Pages/bank/bankdeposit/DepositWendowInvoice";
import BankWithdrawInvoice from "./Pages/bank/bankwithdraw/BankWithdrawInvoice";

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
          <Route
            path="paymentVoucherInvoice"
            element={<PaymentVoucherInvoice />}
          />
          <Route
            path="receivedVoucherInvoice"
            element={<ReceivedVoucherInvoice />}
          />
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

        <Route path="marketing" element={<Dashboard />}>
          <Route
            path="managerepresentative"
            element={<ManagerepRepresentive />}
          />
          <Route path="marketingreport" element={<MarketingReport />} />
        </Route>

        <Route path="Bank" element={<Dashboard />}>
          <Route path="managebankname" element={<ManageBankName />} />
          <Route path="managebankbranch" element={<ManageBankBranch />} />
          <Route path="bankaccountcategory" element={<AccountCategory />} />
          <Route path="bankaccounttype" element={<AccountType />} />
          <Route path="managebankaccount" element={<ManageBankAccount />} />
          <Route path="addaccount" element={<AddAccountForm />} />
          <Route path="checkbook" element={<CheckBook />} />
          <Route path="checkreport" element={<CheckReportPage />} />
          <Route path="deposit" element={<BankDepositwindow />} />
          <Route path="depositinvoice" element={<DepositWendowInvoice />} />
          <Route path="withdraw" element={<BankWithdrawWindow />} />
          <Route path="withdrawinvoice" element={<BankWithdrawInvoice />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
export default App;
