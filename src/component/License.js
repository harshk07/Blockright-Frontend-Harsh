import React from "react";
import { BiSearchAlt2 } from "react-icons/bi"
import { L_card } from "./L_card";
export const License = () => {
    return (
        <div className='w-[100%]'>
        <h1>License</h1>
            <div className='mt-5 flex justify-between xl:mx-9 '>

                <div className="mr-7 text-2xl  text-gray-900">
                    <h1 className="font-bold">License</h1>
                </div>
                <div className='ml-7 flex justify-between items-center border-2'>
                    <input type="search"  placeholder='search' className='h-8 w-[500px] focus:outline-none pl-2  block  p-4 dark:bg-white   ' />
                    <div className="">
                        <BiSearchAlt2 size={25} className=' text-gray-400' />
                    </div>
                </div>
            </div>


            <div className="flex flex-wrap mx-8    ">
                <L_card heading="Noteworthy technology" />
                <L_card heading="Noteworthy technology" />
                <L_card heading="Noteworthy technology" />
                <L_card heading="Noteworthy technology" />
                <L_card heading="Noteworthy technology" />
            </div>


        </div>
    );
};
