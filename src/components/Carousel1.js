import React from "react";
import { Carousel } from "react-carousel-minimal";

export const Carousel1 = ({ firstElement }) => {
  const data = [
    {
      image: `${
        firstElement || "https://i.ibb.co/BVWR9sd/smartmockups-ljw7xib1.jpg"
      }`,
      caption: `<div>
                  Doodle #21
                </div>`,
    },
    {
      image: "https://i.ibb.co/1GDMLq2/smartmockups-ljw7z0cg.jpg",
      caption: "Crypto Punk #232",
    },
    {
      image: "https://i.ibb.co/TvSwhCV/smartmockups-ljw7zxvm.jpg",
      caption: "Bored Ape #211",
    },
    {
      image: "https://i.ibb.co/ykBBKKb/smartmockups-ljw81isu.jpg",
      caption: "Doodle #323",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <>
      <div className="">
        <div className="items-center text-white">
          <Carousel
            data={data}
            time={2000}
            width="660px"
            height="460px"
            captionStyle={captionStyle}
            radius="0px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideImageFit="contain"
            thumbnails={true}
            thumbnailWidth="60px"
            style={{
              backgroundColor: "transparent",
              textAlign: "center",
              width: "660px",
              height: "460px",
              margin: "0px ",
            }}
          />
        </div>
      </div>
    </>
  );
};
