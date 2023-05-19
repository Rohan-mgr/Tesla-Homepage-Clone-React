import React from "react";
import Model3 from "../../Assets/model3.jpg";
import ModelS from "../../Assets/modelS.jpg";
import ModelY from "../../Assets/modelY.jpg";
import ModelX from "../../Assets/modelX.jpg";
import Accessories from "../../Assets/accessories.jpg";
import SolarPanels from "../../Assets/solarpanels.jpg";
import SolarRoof from "../../Assets/solarRoof.jpg";
import HomeContent from "./HomeContent";
import { handleTitle } from "../../utility";

function HomePage(props) {
  handleTitle("Electric Cars, Solar & Clean Energy");
  return (
    <div
      className="homepage"
      style={{
        scrollSnapType: "y mandatory",
        overflowY: "scroll",
        height: "100vh",
        scrollBehavior: "smooth",
        position: "relative",
      }}
    >
      <HomeContent
        Car="Model 3"
        CarImg={Model3}
        Desc="Order Online for Touchless Delivery"
        IsTwo
        BtnName1="CUSTOM ORDER"
        BtnName2="EXISTING INVENTORY"
        ShowExpandBtn
      />
      <HomeContent
        Car="Model Y"
        CarImg={ModelY}
        Desc="Order Online for Touchless Delivery"
        IsTwo
        BtnName1="CUSTOM ORDER"
        BtnName2="EXISTING INVENTORY"
      />
      <HomeContent
        Car="Model S"
        CarImg={ModelS}
        Desc="Order Online for Touchless Delivery"
        IsTwo
        BtnName1="CUSTOM ORDER"
        BtnName2="EXISTING INVENTORY"
      />
      <HomeContent
        Car="Model X"
        CarImg={ModelX}
        Desc="Order Online for Touchless Delivery"
        IsTwo
        BtnName1="CUSTOM ORDER"
        BtnName2="EXISTING INVENTORY"
      />
      <HomeContent
        Car="Solar Panels"
        CarImg={SolarPanels}
        Desc="Lowest Cost Solar Panels in America"
        IsTwo
        BtnName1="ORDER NOW "
        BtnName2="LEARN MORE"
      />
      <HomeContent
        Car="Solar Roof"
        CarImg={SolarRoof}
        Desc="Produce Clean Energy From Your Roof"
        IsTwo
        BtnName1="ORDER NOW "
        BtnName2="LEARN MORE"
      />
      <HomeContent
        Car="Accessories"
        CarImg={Accessories}
        BtnName1="SHOP NOW"
        ShowFooter
      />
    </div>
  );
}

export default HomePage;
