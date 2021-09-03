import React from "react";
import "./Coins.module.css";
 const Coin = ({name, price, symbol, marketcap, volume, image, priceChange}) => {
  return (
    <div className="coin">
      <img
        src={image}
        className="coin-logo"
      />
      <div className="coin-content">
        <h1 className="coin-title">{name}</h1>
        <p className="coin-symbol">{symbol}</p>
      </div>
      <p className="coin-price">{price.toLocaleString()}</p>
      <p className="coin-marketcap">
          Market Cap: ${marketcap.toLocaleString()}
      </p>
      <p className="coin-volume">
      Volume (24Hrs): ${volume.toLocaleString()}
      </p>
    </div>
  );
};
export default Coin;