"use client";

import Image from 'next/image';
import React from 'react'
import Marquee from "react-fast-marquee";


const MarqueeComp = ({ MarqueeArray, play = true }) => {
  return (
    <div>
      <Marquee direction="left" speed={100} pauseOnHover={true} play={play}>
        {
          MarqueeArray.map((image, i) => (
            <div className="image_wrapper mx-5" key={i}>
              <Image src={image} alt="imgOfCompany" />
            </div>

          ))
        }

      </Marquee>
    </div>
  )
}

export default MarqueeComp;
