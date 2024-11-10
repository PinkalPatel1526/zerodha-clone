import React, { useState } from "react";
import { watchlist } from "../data/data";
import { Tooltip, Grow } from "@mui/material";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  BarChartOutlined,
  MoreHoriz,
} from "@mui/icons-material";

const WatchList = ({
  setBuyUid,
  setSellUid,
  showBuystock,
  setshowBuystock,
}) => {
  return (
    <div className="stocks-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return (
            <WatchListItem
              setBuyUid={setBuyUid}
              setSellUid={setSellUid}

              showBuystock={showBuystock}
              setshowBuystock={setshowBuystock}
              stock={stock}
              key={index}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({
  setBuyUid,
  setSellUid,

  stock,
  showBuystock,
  setshowBuystock,
}) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  };
  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="stock-list"
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && (
        <WatchListActions
          setBuyUid={setBuyUid}
          setSellUid={setSellUid}

          showBuystock={showBuystock}
          setshowBuystock={setshowBuystock}
          uid={stock.name}
          price={stock.price}
        />
      )}
    </li>
  );
};

const WatchListActions = ({
  setBuyUid,
  setSellUid,
  uid,
  price,
  showBuystock,
  setshowBuystock,
}) => {
  let handleBuy = () => {
    const updated = [...showBuystock];
    updated[1] = false;
    updated[0] = true;
    setshowBuystock(updated);

    setBuyUid([uid, price]);
  };

  let handleSell = () => {
    const updated = [...showBuystock];
    setSellUid(uid);
    updated[0] = false;
    updated[1] = true;
    setshowBuystock(updated);

    setSellUid([uid, price]);
  };

  return (
    <span className="actions">
      <span className="action-button">
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          //   onClick={handleBuyClick}
        >
          <button className="buy btn-size" onClick={handleBuy}>
            Buy
          </button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell btn-size" onClick={handleSell}>
            Sell
          </button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="chart btn-size">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="more btn-size">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
