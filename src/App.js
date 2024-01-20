import React from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import ConnectWallet from "./pages/ConnectWallet";
import { ErrorPage } from "./pages/ErrorPage";
import { Dashboard } from "./pages/Dashboard";
import { NftPage } from "./pages/NftPage";
import { Rightspage } from "./pages/Rightspage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Shopping } from "./pages/Shopping";
import { MyProfile } from "./pages/MyProfile";
import { Market } from "./pages/Market";
import { AgreementPage } from "./pages/AgreementPage";
import { User } from "./component/User";
import { Login } from "./component/Login";
import { NFT } from "./component/NFT";
import Products from "./component/Products";
import { Shop } from "./component/Shop";
import { License } from "./component/License";
// import { Header } from "./component/Header";
import ConfirmorderPage from "./pages/ConfirmorderPage";

import Loader from "./pages/Loader";
import WalletIDMainState from "./context/walletID/WalletIDMainState";
import AdminLogin from "./components/Login";
import AdminDashboardLayout from "./util/AdminDashboardLayout";
import Orders from "./component/Orders";
import Payment from "./component/Payment";
import RightsAdmin from "./component/RightsAdmin";
import Customerpayment from "./pages/Customerpayment";


function App() {
  return (
    <WalletIDMainState>
      <Router>
        <>
          <div>
            <Routes>
              <Route path="/AdminLogin" element={<AdminLogin />} />

              {/*Admin Dashboard */}
              <Route
                path="/AdminDashboard"
                element={
                  <AdminDashboardLayout>
                    <User />
                  </AdminDashboardLayout>
                }
              />
              <Route
                path="/AdminDashboard/nft"
                element={
                  <AdminDashboardLayout>
                    <NFT />
                  </AdminDashboardLayout>
                }
              />

              <Route
                path="/AdminDashboard/products"
                element={
                  <AdminDashboardLayout>
                    <Products />
                  </AdminDashboardLayout>
                }
              />
              <Route
                path="/AdminDashboard/rights"
                element={
                  <AdminDashboardLayout>
                    <RightsAdmin />
                  </AdminDashboardLayout>
                }
              />
              <Route
                path="/AdminDashboard/orders"
                element={
                  <AdminDashboardLayout>
                    <Orders />
                  </AdminDashboardLayout>
                }
              />

              <Route
                path="/AdminDashboard/shop"
                element={
                  <AdminDashboardLayout>
                    <Shop />
                  </AdminDashboardLayout>
                }
              />
              <Route
                path="/AdminDashboard/license"
                element={
                  <AdminDashboardLayout>
                    <License />
                  </AdminDashboardLayout>
                }
              />
              <Route
                path="/AdminDashboard/payment"
                element={
                  <AdminDashboardLayout>
                    <Payment />
                  </AdminDashboardLayout>
                }
              />

              <Route exact path="/" element={<LandingPage />} />
              <Route path="/Connectwallet" element={<ConnectWallet />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/NftPage" element={<NftPage />} />
              <Route path="/Rightspage" element={<Rightspage />} />
              <Route path="/Shopping" element={<Shopping />} />
              <Route path="/Market/:id" element={<Market />} />
              <Route path="/AgreementPage" element={<AgreementPage />} />
              <Route path="/ConfirmorderPage" element={<ConfirmorderPage />} />
              <Route path="/Loader" element={<Loader />} />
              <Route path="/Customerpayment" element={<Customerpayment />} />
              <Route path="/MyProfile" element={<MyProfile />} />

              <Route exact path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </>
      </Router>
    </WalletIDMainState>
  );
}

export default App;
