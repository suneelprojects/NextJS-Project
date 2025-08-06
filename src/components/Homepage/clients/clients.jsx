import React from "react";

import ImgOne from "@/assets/homepage/clients/one.png";
import ImgTwo from "@/assets/homepage/clients/two.png";
import ImgThree from "@/assets/homepage/clients/three.png";
import ImgFour from "@/assets/homepage/clients/four.png";
import ImgFive from "@/assets/homepage/clients/five.png";
import ImgSix from "@/assets/homepage/clients/six.png";
import ImgSeven from "@/assets/homepage/clients/seven.png";
import ImgEight from "@/assets/homepage/clients/eight.jpg";
import Imgnine from "@/assets/homepage/clients/nine.png";
import ImgTen from "@/assets/homepage/clients/ten.jpg";
import ImgEleven from "@/assets/homepage/clients/eleven.jpg";
import ImgTwelve from "@/assets/homepage/clients/twelve.jpg";
import ImgThirteen from "@/assets/homepage/clients/thirteen.webp";
import ImgFourteen from "@/assets/homepage/clients/fourteen.jpg";
import ImgFifteen from "@/assets/homepage/clients/fifteen.jpg";

import BulbText from "@/components/reusedComponents/bulbText";
import MarqueeComp from "@/components/reusedComponents/MarqueeComp";
import PartnerStyle from "@/components/Homepage/clients/clients.module.css";

const Clients = () => {
  const PartnersArray = [
    ImgOne,
    ImgTwo,
    ImgThree,
    ImgFour,
    ImgFive,
    ImgSix,
    ImgSeven,
    ImgEight,
    Imgnine,
    ImgTen,
    ImgEleven,
    ImgTwelve,
    ImgThirteen,
    ImgFourteen,
    ImgFifteen,
  ];
  return (
    <div className="containerFluidForPadding my-5">
      <div className={PartnerStyle.BulbTextStyle}>
        <BulbText
          BulbText="Our Top Clients"
          bulbTitle="Our Hiring Partners"
          GreyText="You'll find something to spark your curiosity and enhance"
        />
      </div>

      <div className={PartnerStyle.ImagesSize}>
        <MarqueeComp MarqueeArray={PartnersArray} />
      </div>
    </div>
  );
};

export default Clients;
