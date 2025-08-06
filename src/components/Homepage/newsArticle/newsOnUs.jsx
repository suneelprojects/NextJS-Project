import React from "react";

import BulbText from "@/components/reusedComponents/bulbText";
import MarqueeComp from "@/components/reusedComponents/MarqueeComp";


import newsArticleOne from "@/assets/homepage/newsOnUs/timesOfIndia.png";
import newsArticleTwo from "@/assets/homepage/newsOnUs/bussinessStd.png";
import newsArticleThree from "@/assets/homepage/newsOnUs/analytics.png";
import newsArticleFour from "@/assets/homepage/newsOnUs/theknowledgereview_logo.jpg";
import newsArticleFive from "@/assets/homepage/newsOnUs/ANI-logo.png";
import newsArticleSix from "@/assets/homepage/newsOnUs/yahooNews.png";
import newsArticleSeven from "@/assets/homepage/newsOnUs/BusinessW.png";
import newsArticleEight from "@/assets/homepage/newsOnUs/Zee5_Official_logo.png";
import newsArticleNine from "@/assets/homepage/newsOnUs/neurons-Logo.png";

import newsStyle from "./news.module.css";


const NewsOnUs = () => {
  const newsArticles = [
    newsArticleOne,
    newsArticleTwo,
    newsArticleThree,
    newsArticleFour,
    newsArticleFive,
    newsArticleSix,
    newsArticleSeven,
    newsArticleEight,
    newsArticleNine,
  ];



  return (
    <div className="containerFluidForPadding my-5">
      <div className={newsStyle.BulbTextStyle}>
        <BulbText
          BulbText="Top News Channels"
          bulbTitle="We Got Featured In"
          GreyText="You'll find something to spark your curiosity and enhance"
        />
      </div>

      <div className={newsStyle.ImagesSize}>
        <MarqueeComp MarqueeArray={newsArticles} />
      </div>

      
    </div>
  );
};

export default NewsOnUs;
