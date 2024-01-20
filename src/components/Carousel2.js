import React from 'react'
import { Carousel } from 'react-carousel-minimal';
// import { Link } from 'react-router-dom';


export const Carousel2 = () => {
  const data = [
    {
      image: "https://i.ibb.co/BVWR9sd/smartmockups-ljw7xib1.jpg",
      caption: `<div>
                  Doodle #21
                </div>`
    },
    {
      image: "https://i.ibb.co/1GDMLq2/smartmockups-ljw7z0cg.jpg",
      caption: "Crypto Punk #232"
    },
    {
      image: "https://i.ibb.co/TvSwhCV/smartmockups-ljw7zxvm.jpg",
      caption: "Bored Ape #211"
    },
    {
      image: "https://i.ibb.co/ykBBKKb/smartmockups-ljw81isu.jpg",
      caption: "Doodle #323"
    },
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <>
      <div className="">
        <div className='items-center text-white'>

          <div style={{
            padding: "0 20px",
            
          }}>
            <Carousel 
              data={data}
              time={3000}
              width="1200px"
              height="530px"
              captionStyle={captionStyle}
              radius="0px"
              slideNumber={false}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              thumbnails={false}
              thumbnailWidth="90px"
              style={{
                overflow:"hidden",
                border:"2px solid black",
                textAlign: "center",
                maxWidth: "auto",
                maxHeight: "auto",
                margin: "10px auto",
                scrollBehavior: "smooth"
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

