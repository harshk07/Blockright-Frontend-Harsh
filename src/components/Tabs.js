import React, { useState } from 'react';

export const Tabs = ({description}) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    return (
        <>
            <div className='bg-white'>
                <div className='bg-white  h-[30rem]  '>
                    <div className='text-slate-800  flex gap-7  font-semibold text-xl ml-36 '>
                        <button className='mt-6 hover:text-blue-500 ease-in-out' onClick={() => handleTabClick(0)}>Description</button>
                        <button className='mt-6 hover:text-blue-500 ease-in-out' onClick={() => handleTabClick(1)}>order process</button>
                        <button className='mt-6 hover:text-blue-500 ease-in-out' onClick={() => handleTabClick(2)}>Visual & Samples</button>
                        <button className='mt-6 hover:text-blue-500 ease-in-out' onClick={() => handleTabClick(3)}>Delivery</button>
                    </div>
                    <div className="border-2 border-b border-blue-600 my-2"></div>
                    <div className='ml-36'>
                        {activeTab === 0 && (
                            <div className='mt-10  inline-block w-[37rem] text-slate-500 font-normal '>
                                <p className="mb-4">
                                    {description}
                                </p>
                                <ul className="list-disc">
                                    <li>Demo : <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat?</span> </li>
                                    <li>Demo : <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laborum amet explicabo hic a optio? Pariatur repudiandae laboriosam voluptatem quod alias perferendis. Consectetur impedit neque sit ipsa!</span></li>
                                    <li>Demo : <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis porro unde ipsam qui, dolor corporis officia nostrum odio perferendis velit provident mollitia dolores labore aliquid consectetur voluptatem quidem sunt. Harum sed animi enim. Nisi error quibusdam unde pariatur placeat doloribus praesentium recusandae voluptatem incidunt aliquid? Iste eos odit beatae, sed recusandae facilis quaerat autem ad quisquam, rem necessitatibus atque.</span></li>
                                 
                                </ul>
                            </div>
                        )}

                        {activeTab === 1 && (
                            <div className='mt-5  inline-block w-[37rem] text-slate-500 font-normal '>
                                <h2>Tab 2 Content</h2>
                                <p>This is the content for Tab 2.</p>
                                <ul className='list-disc'>
                                    <li>A</li>
                                    <li>B</li>
                                    
                                </ul>
                            </div>
                        )}

                        {activeTab === 2 && (
                            <div className='mt-5  inline-block w-[37rem] text-slate-500 font-normal '> 
                                <h2>Tab 3 Content</h2>
                                <p>This is the content for Tab 2.</p>
                                <ol className='list-decimal'>
                                    <li>abc</li>
                                    <li>xyz</li>
                                </ol>
                            </div>
                        )}
                        {activeTab === 3 && (
                            <div className='mt-5  inline-block w-[37rem] text-slate-500 font-normal '>
                                <h2 className='font-bold text-2xl'>Tab 4 Content</h2>
                                <p>This is the content for Tab 4. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid error laborum officia aliquam velit, veritatis voluptatem. Consectetur, eligendi ab. Facilis quod nesciunt inventore sequi? Nesciunt, magnam. Aspernatur, modi dolorum. Quia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis numquam molestias iusto repudiandae eum voluptates cupiditate, esse nisi dolor cum sapiente est vel quo dolorum in? Explicabo corporis deleniti magnam quo voluptas facilis, natus eaque vel magni a id voluptatem sunt enim voluptate consequatur, aspernatur sequi obcaecati perferendis. Velit vero corrupti magnam debitis culpa praesentium et quis odit nam?</p>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </>
    );
};


