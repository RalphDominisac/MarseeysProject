import React from 'react';
import SignInPOS from './SignInPOS';

import DateTime from "./DateTime";


import HomeOrderPage from "./HomeOrderPage";
import BBQOrderPage from "./orderPages/BBQOrderPage";
import BeefOrderPage from "./orderPages/BeefOrderPage";
import BilaoOrderPage from "./orderPages/BilaoOrderPage";
import ChickenOrderPage from "./orderPages/ChickenOrderPage";
import DessertsOrderPage from "./orderPages/DessertsOrderPage";
import DrinksOrderPage from "./orderPages/DrinksOrderPage";
import FoodTraysOrderPage from "./orderPages/FoodTraysOrderPage";
import HandaanOrderPage from "./orderPages/HandaanOrderPage";
import NoodlesOrderPage from "./orderPages/NoodlesOrderPage";
import PicapicaOrderPage from "./orderPages/PicapicaOrderPage";
import PlattersOrderPage from "./orderPages/PlattersOrderPage";
import PorkOrderPage from "./orderPages/PorkOrderPage";
import RiceOrderPage from "./orderPages/RiceOrderPage";
import SeafoodOrderPage from "./orderPages/SeafoodOrderPage";
import SizzlingOrderPage from "./orderPages/SizzlingOrderPage";
import SoloMealsOrderPage from "./orderPages/SoloMealsOrderPage";
import SoupOrderPage from "./orderPages/SoupOrderPage";
import VegetablesOrderPage from "./orderPages/VegetablesOrderPage";







import DrawerSample from "./DrawerSample";
import TestSample from "./TestSample";
import PaymentPage from "./PaymentPage";
import OrderSummaryPage from "./OrderSummaryPage";
import CustomerListPage from "./CustomerListPage";
import PendingOrdersPage from "./PendingOrdersPage";
import DraftsPage from "./DraftsPage";
import HistoryPage from "./HistoryPage";
import DiscountsPage from "./DiscountsPage";

import {BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom";


function App(){
    return (
      // <Router>
      //   <Routes>
      //    <Route path="/" element={<SignInPOS/>} />
      //     <Route path="/homeorderspage" element={<HomeOrderPage/>} />
      //     <Route path="/pendingpage" element={<PendingOrdersPage/>} />
      //     <Route path="/draftspage" element={<DraftsPage/>} />
      //     <Route path="/historypage" element={<HistoryPage/>} />
      //     <Route path="/discountspage" element={<DiscountsPage/>} />
      //     <Route path="/signin" element={<SignInPOS/>} />
      //   </Routes>
      // </Router>
      // <div>
      //   {/* TESTING AREA: */}

      //   {/* <SignInPOS /> */}

      //   {/* <SidebarPOS/> */}

      //   {/* <HomeOrderPage /> */}

      //   {/* <DrawerSample/> */}
      //   {/* <TestSample /> */}

      //   {/* <PaymentPage/> */}
      //   {/* <OrderSummaryPage /> */}
      //   {/* <CustomerListPage /> */}

      //   {/* <PendingOrdersPage /> */}
      //   {/* <DraftsPage/> */}
      //   {/* <HistoryPage /> */}
      //   {/* <DiscountsPage /> */}
      // </div>

      // ************************************************************
      // UNCOMMENT THIS TO ACTIVATE ROUTES:    HomeOrderPage is not going to be used anymore(it will be just a testing ground since we now have category order pages each)
      <div>
        <div>
          <Routes>
            <Route path="/" element={<SignInPOS />} />
            <Route path="/homeorderpage" element={<HomeOrderPage />} /> 

            <Route path="/orderPages/bbqorderpage" element={<BBQOrderPage />} /> 
            <Route path="/orderPages/beeforderpage" element={<BeefOrderPage />} /> 
            <Route path="/orderPages/bilaoorderpage" element={<BilaoOrderPage />} /> 
            <Route path="/orderPages/chickenorderpage" element={<ChickenOrderPage />} /> 
            <Route path="/orderPages/dessertsorderpage" element={<DessertsOrderPage />} /> 
            <Route path="/orderPages/drinksorderpage" element={<DrinksOrderPage />} /> 
            <Route path="/orderPages/foodtraysorderpage" element={<FoodTraysOrderPage />} /> 
            <Route path="/orderPages/handaanorderpage" element={<HandaanOrderPage />} /> 
            <Route path="/orderPages/noodlesorderpage" element={<NoodlesOrderPage />} /> 
            <Route path="/orderPages/picapicaorderpage" element={<PicapicaOrderPage />} /> 
            <Route path="/orderPages/plattersorderpage" element={<PlattersOrderPage />} /> 
            <Route path="/orderPages/porkorderpage" element={<PorkOrderPage />} /> 
            <Route path="/orderPages/riceorderpage" element={<RiceOrderPage />} /> 
            <Route path="/orderPages/seafoodorderpage" element={<SeafoodOrderPage />} /> 
            <Route path="/orderPages/sizzlingorderpage" element={<SizzlingOrderPage />} /> 
            <Route path="/orderPages/solomealsorderpage" element={<SoloMealsOrderPage />} /> 
            <Route path="/orderPages/souporderpage" element={<SoupOrderPage />} /> 
            <Route path="/orderPages/vegetablesorderpage" element={<VegetablesOrderPage />} /> 
     

            <Route path="/pendingpage" element={<PendingOrdersPage />} />
            <Route path="/draftspage" element={<DraftsPage />} />
            <Route path="/historypage" element={<HistoryPage />} />
            <Route path="/discountspage" element={<DiscountsPage />} />
            <Route path="/customerlistpage" element={<CustomerListPage />} />
            <Route path="/paymentpage" element={<PaymentPage />} />
          </Routes>
        </div>
      </div>
    );

}

export default App;


// https://stackoverflow.com/questions/17628305/windows-git-warning-lf-will-be-replaced-by-crlf-is-that-warning-tail-backwar