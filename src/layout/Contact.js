import React from "react";
// import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <>
      <div className="mx-[9rem] lg:mx-auto lg:w-[55rem] 2xl:w-[75rem] 2xl:mx-auto">
        <section className=" body-font mt-5" id="contact">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center gap-4">
              <h1 className=" text-4xl mb-3 pb-4 font-semibold text-white ">
                Frequently Asked Questions
              </h1>

              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-[14px] font-medium ">
                  How does blockright work?
                </div>
                <div className="collapse-content">
                  {/* <div className="border-b border-blue-700  pb-0"></div> */}
                  <p className="text-[13px]">
                    The process is simple and seamless. First, users need to
                    verify their wallet on the platform. Once verified, they can
                    choose the specific NFT they wish to transform into tangible
                    merchandise. Next, users define the type of goodies they
                    want to create, whether it's art prints, apparel,
                    collectibles, or more. They also set the license fees,
                    allowing them to earn royalties from each sale. Finally,
                    users specify the quantity of goodies they want to mint,
                    giving them the flexibility to create limited editions or
                    larger collections. With these steps complete, Blockright
                    transforms the digital art into real-world goodies, ready to
                    be cherished and collected by art enthusiasts worldwide.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-[14px] font-medium">
                  What can I mint as web3 goodies on blockright?
                </div>
                <div className="collapse-content">
                 
                  <p className="text-[13px]">
                    On Blockright, you can mint a wide variety of fashionable
                    goods as Web3 goodies. These include trendy items such as
                    t-shirts, hoodies, tops, and many more. The platform offers
                    a diverse range of merchandise options to unleash your
                    creativity and turn your digital art into tangible
                    expressions of style and fashion. From eye-catching apparel
                    to unique collectibles, Blockright allows you to explore
                    endless possibilities and create goods that resonate with
                    your artistic vision. Join us on this exciting journey, and
                    let your NFT-powered goodies make a bold statement in the
                    world of fashion and art.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-200 ">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-[14px] font-medium">
                  Can I determine the quantity of Web3 goodies to be purchased
                  by buyers
                </div>
                <div className="collapse-content">
                  
                  <p className="text-[13px]">
                    On Blockright, you have complete control over the quantity
                    of Web3 goodies purchased by buyers. When minting your
                    NFT-powered merchandise, you can define the specific
                    quantity you want to make available for purchase. Whether
                    you prefer limited editions to create exclusivity or larger
                    quantities to cater to a broader audience, the choice is
                    entirely yours. Furthermore, Blockright's entire minting and
                    commerce lifecycle is built on the blockchain, ensuring 100%
                    transparency. Every transaction and interaction, from
                    minting to purchasing, is recorded on the blockchain,
                    providing a secure and verifiable ledger of all activities.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-[14px] font-medium">
                  How are royalties and payments handled for creators when their
                  merchandise is purchased?
                </div>
                <div className="collapse-content">
                  
                  <p className="text-[13px]">
                    At Blockright, we believe in building sustainable business
                    model, empowering creators and ensuring a fair and
                    transparent payment system. No upfront or hidden fees to
                    worry about. We only charge a 20% fee on the license fees
                    for every successful sales transaction. This means you keep
                    80% of the license fees as your earnings. Additionally,
                    claiming your royalties is a hassle-free process. With just
                    a click of a button, you can easily claim your well-deserved
                    royalties from the sales of your merchandise.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-[14px] font-medium">
                  What if I have sold/transferred my NFT?
                </div>
                <div className="collapse-content">
                  
                  <p className="text-[13px]">
                    If you have sold or transferred your NFT to a new owner,
                    Blockright ensures that you still receive a fair share of
                    the secondary fees. Specifically, you will receive 50% of
                    the secondary fees generated from minted goods. The
                    remaining 50% of the secondary fees will be transferred to
                    the new or current holder of the NFT. This way, you continue
                    to benefit from your original creation, even after it
                    changes hands. As your NFT gains popularity and value, you
                    can earn passive income from the subsequent transactions
                    involving your digital art. Blockright's system is designed
                    to reward both creators and NFT holders, fostering a
                    mutually beneficial ecosystem where everyone involved can
                    share in the success and value of the art they are
                    associated with.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="https://i.postimg.cc/8PMQHrcV/tese.png"
              />
            </div>
          </div>

          <div className=" bg-blue-900 flex justify-between h-[10rem] rounded-2xl items-center mt-10 ">
            <div className="text-white ml-[7rem]  leading-10">
              <h1 className="font-bold text-5xl">Newsletters</h1>
              <p>Most popular digitals NFTs market place</p>
            </div>
            <div className=" bg-gray-500 h-[5rem] lg:w-[25rem] items-center justify-end flex rounded-lg mr-[7rem]">
              <button className="inline-flex text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg mr-5">
                <a href="/">Browse More</a>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
