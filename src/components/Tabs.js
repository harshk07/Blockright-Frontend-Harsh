import React, { useState } from "react";

export const Tabs = ({ description }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <div className="bg-white shadow-md rounded-lg mx-8 my-4">
        <div className="p-4 h-[30rem]">
          <div className="flex justify-center pb-3 gap-5 border-b-2 border-blue-500">
            {[
              "Description",
              "Order Process",
              "Visual & Samples",
              "Delivery",
            ].map((tab, index) => (
              <button
                key={tab}
                className={`py-2 px-4 text-sm font-medium text-center text-gray-700 rounded-t-lg border-b-2
                        ${
                          activeTab === index
                            ? "border-blue-500 text-blue-600"
                            : "border-transparent hover:text-blue-500 hover:border-blue-300"
                        }`}
                onClick={() => handleTabClick(index)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="p-6">
            {activeTab === 0 && (
              <div className="text-gray-600">
                <p className="mb-4">{description}</p>
                <ul className="list-disc">
                  <li>
                    Demo :{" "}
                    <span>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Placeat?
                    </span>{" "}
                  </li>
                  <li>
                    Demo :{" "}
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Incidunt laborum amet explicabo hic a optio? Pariatur
                      repudiandae laboriosam voluptatem quod alias perferendis.
                      Consectetur impedit neque sit ipsa!
                    </span>
                  </li>
                  <li>
                    Demo :{" "}
                    <span>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Debitis porro unde ipsam qui, dolor corporis officia
                      nostrum odio perferendis velit provident mollitia dolores
                      labore aliquid consectetur voluptatem quidem sunt. Harum
                      sed animi enim. Nisi error quibusdam unde pariatur placeat
                      doloribus praesentium recusandae voluptatem incidunt
                      aliquid? Iste eos odit beatae, sed recusandae facilis
                      quaerat autem ad quisquam, rem necessitatibus atque.
                    </span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 1 && (
              <div className="mt-5 w-full">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">
                  Order Process Timeline
                </h2>
                <div className="flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <span className="px-4 py-2 bg-blue-500 text-white rounded-full text-lg">
                      1
                    </span>
                    <span className="text-sm mt-2 font-medium text-slate-800">
                      Select Items
                    </span>
                  </div>
                  <div className="h-px -mt-5 bg-gray-300 flex-grow"></div>
                  <div className="flex flex-col items-center">
                    <span className="px-4 py-2 bg-blue-500 text-white rounded-full text-lg">
                      2
                    </span>
                    <span className="text-sm mt-2 font-medium text-slate-800">
                      Confirm Order
                    </span>
                  </div>
                  <div className="h-px -mt-5 bg-gray-300 flex-grow"></div>
                  <div className="flex flex-col items-center">
                    <span className="px-4 py-2 bg-blue-500 text-white rounded-full text-lg">
                      3
                    </span>
                    <span className="text-sm mt-2 font-medium text-slate-800">
                      Payment
                    </span>
                  </div>
                  <div className="h-px -mt-5 bg-gray-300 flex-grow"></div>
                  <div className="flex flex-col items-center">
                    <span className="px-4 py-2 bg-gray-500 text-white rounded-full text-lg">
                      4
                    </span>
                    <span className="text-sm mt-2 font-medium text-slate-800">
                      Order Complete
                    </span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className="mt-5  inline-block w-[37rem] text-slate-500 font-normal ">
                <h2>Tab 3 Content</h2>
                <p>This is the content for Tab 2.</p>
                <ol className="list-decimal">
                  <li>abc</li>
                  <li>xyz</li>
                </ol>
              </div>
            )}
            {activeTab === 3 && (
              <div className="mt-5  inline-block w-[37rem] text-slate-500 font-normal ">
                <h2 className="font-bold text-2xl">Tab 4 Content</h2>
                <p>
                  This is the content for Tab 4. Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Aliquid error laborum officia
                  aliquam velit, veritatis voluptatem. Consectetur, eligendi ab.
                  Facilis quod nesciunt inventore sequi? Nesciunt, magnam.
                  Aspernatur, modi dolorum. Quia! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Veritatis numquam molestias
                  iusto repudiandae eum voluptates cupiditate, esse nisi dolor
                  cum sapiente est vel quo dolorum in? Explicabo corporis
                  deleniti magnam quo voluptas facilis, natus eaque vel magni a
                  id voluptatem sunt enim voluptate consequatur, aspernatur
                  sequi obcaecati perferendis. Velit vero corrupti magnam
                  debitis culpa praesentium et quis odit nam?
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
