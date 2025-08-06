import React from "react";

import BulbText from "@/components/reusedComponents/bulbText";
import MarqueeComp from "@/components/reusedComponents/MarqueeComp";

import commentOne from "@/assets/homepage/comments/comments (1).png";
import commentTwo from "@/assets/homepage/comments/comments (2).png";
import commentThree from "@/assets/homepage/comments/comments (3).png";
import commentFour from "@/assets/homepage/comments/comments (4).png";
import commentFive from "@/assets/homepage/comments/comments (5).png";
import commentSix from "@/assets/homepage/comments/comments (6).png";
import commentSeven from "@/assets/homepage/comments/comments (7).png";
import commentEight from "@/assets/homepage/comments/comments (8).png";
import commentNine from "@/assets/homepage/comments/comments (9).png";

import commentsStyle from "@/components/Homepage/comments/comments.module.css";

const Comments = () => {
  const CommentsArray = [
    commentOne,
    commentTwo,
    commentThree,
    commentFour,
    commentFive,
    commentSix,
    commentSeven,
    commentEight,
    commentNine,
  ];

  return (
    <div className="containerFluidForPadding my-5">
      <div className={commentsStyle.BulbTextStyle}>
        <BulbText
          BulbText="Our Top Comments"
          bulbTitle="Our Alumini Comments"
          GreyText="You'll find something to spark your curiosity and enhance"
        />
      </div>
      <div>
        <MarqueeComp MarqueeArray={CommentsArray} />
      </div>
    </div>
  );
};

export default Comments;
