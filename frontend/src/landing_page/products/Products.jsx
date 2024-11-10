import React from "react";
import MobailProduct from "./MobailProduct";
import OtherProduct from "./OtherProduct";
import kiteImg from "../../assets/kite.png";

export default function Products() {
  return (
    <div>
      <MobailProduct
        imgPath={kiteImg}
        header="Kite"
        desc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        linkName="Try Demo"
        link="https://kite-demo.zerodha.com/dashboard"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
        appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"
      />

      <OtherProduct
        imgPath={kiteImg}
        header="Console"
        desc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        linkName="Learn more"
        link="https://zerodha.com/products/console"
      />

      <MobailProduct
        imgPath={kiteImg}
        header="Coin"
        desc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        linkName="Coin"
        link="https://coin.zerodha.com/"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.coin"
        appStore="https://apps.apple.com/in/app/zerodha-coin-mutual-funds/id1392892554"
      />

      <OtherProduct
        imgPath={kiteImg}
        header="Kite Connect API"
        desc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        linkName="Kite Connect"
        link="https://kite.trade/"
      />

      <MobailProduct
        imgPath={kiteImg}
        header="Varsity mobile"
        desc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        linkName="Try Demo"
        link="https://kite-demo.zerodha.com/dashboard"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.varsity"
        appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"
      />
    </div>
  );
}
