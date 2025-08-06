import React from "react";
import Image from "next/image";
import bulb from "@/assets/homepage/reUsed_Pics/bulb.png";

const BulbText = (props) => {
  return (
    <div style={{ whiteSpace: "pre-wrap"}}>
       <div className="bulbContainer  ">
      <span className="bulbSpan">
        <Image
          src={props.whiteBulb ? props.whiteBulb : bulb}
          alt="bulb img"
          width={22} // Explicit width
          height={22} // Explicit height
          className="bulbImg" // Add class for styling
        />
      </span>
      <p className="blueText d-inline ">{props.BulbText}</p>
      </div>
      <br />
      <p className="gateWaytitle">{props.bulbTitle}</p>
      <p className="greyText d-block my-3">{props.GreyText}</p>
    </div>
  );
};

export default BulbText;
