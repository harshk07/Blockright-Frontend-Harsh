import React from "react";
import { Card2 } from "../components/Card2";

const About = () => {
  return (
    <>
      <div className="mx-[9rem] lg:mx-auto lg:w-[55rem] 2xl:w-[75rem] 2xl:mx-auto">
        <section className=" body-font  mt-10" id="About">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="https://i.postimg.cc/8cxkxQQX/item1.png"
              />
            </div>

            <div className=" ml-10 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center gap-4">
              <h1 className="title-font sm:text-4xl text-4xl mb-4 font-extrabold text-white ">
                NFT in real world
              </h1>
              <p className="mb-8 leading-relaxed text-white font-semibold">
                Unleash your NFTs in real world with authentic web3 merchs. Our
                innovation empowers NFT holders to transform their digital
                masterpieces into tangible expressions of art, fashion, and
                innovation. <br />
                <br /> With our seamless platform, creators can effortlessly
                mint original Web3 goodies, while art enthusiasts can explore an
                eclectic world of NFT-powered wonders through our decetralized
                marketplace. Discover, purchase, and embrace Web3 merchandise
                that transcends the digital realm.{" "}
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-[#3167E7] border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg">
                  <a href="/">View Details</a>
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="text-white flex justify-center font-bold text-4xl mt-9  mb-0">
          <h1>We Provide Our Best Service</h1>
        </div>

        <div className="flex  justify-center mt-10">
          <Card2
            imgSource="https://pintu-academy.pintukripto.com/wp-content/uploads/2022/11/self-custody.png"
            title="Self-Custody"
            description="With us, the custody of your prized NFT stays securely in your hands as you allocate digital rights and mint. Peace of mind. "
          />
          <Card2
            imgSource="https://previews.123rf.com/images/iaremenko/iaremenko1801/iaremenko180100025/94422685-digital-chain-blockchain-technology-concept-3d-illustration.jpg"
            title="On-chain"
            description="Trust in the power of blockchain technology and the transparency it brings to minting and sales process. 100% transperent
"
          />
          <Card2
            imgSource="https://www.insidehighered.com/sites/default/files/media/international-1751293_960_720.png"
            title="International"
            description="New York to remote corner of the world, we're here to make sure your minted goodies find their way across the globe."
          />
        </div>
      </div>
    </>
  );
};

export default About;
