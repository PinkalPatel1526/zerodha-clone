import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./deshboard/Topbar";
import WatchList from "./deshboard/WatchList.jsx";

import Dashbord from "./deshboard/Dashbord";
import Orders from "./deshboard/Orders";
import Holding from "./deshboard/Holding";
import Positions from "./deshboard/Position";
import Funds from "./deshboard/Funds";

import BuyStock from "./deshboard/BuyStock.jsx";
import SellStock from "./deshboard/SellStock.jsx";
import { useState } from "react";

function App() {
  let [showBuystock, setshowBuystock] = useState([false, false]);
  let [buyUid, setBuyUid] = useState(["", 0]);
  let [sellUid, setSellUid] = useState([]);

  return (
    <>
      <BrowserRouter>
        <div className="main-container">
          <div className="">
            <Topbar />
          </div>
          <div className="home-container" style={{ padding: "0" }}>
            <WatchList
              setBuyUid={setBuyUid}
              setSellUid={setSellUid}
              showBuystock={showBuystock}
              setshowBuystock={setshowBuystock}
            />
            {showBuystock[0] && (
              <BuyStock
                buyUid={buyUid}
                showBuystock={showBuystock}
                setshowBuystock={setshowBuystock}
              />
            )}
            {showBuystock[1] && (
              <SellStock
                sellUid={sellUid}
                showBuystock={showBuystock}
                setshowBuystock={setshowBuystock}
              />
            )}

            <div className="pages">
              <Routes>
                <Route path="/" element={<Dashbord />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/holding" element={<Holding />} />
                <Route path="/positions" element={<Positions />} />
                <Route path="/funds" element={<Funds />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
