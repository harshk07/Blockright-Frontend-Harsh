import React, { useState } from 'react'
import { FiArrowRightCircle } from "react-icons/fi";
export const NFTcard = (props) => {
    const [showDes,setShowDes] = useState(false);
    return (

        <div>
            <div className="pt-2 mt-[2%] max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                <a href="/">
                    <h5 className="px-5 mb-2 text-xl font-bold tracking-tight text-gray-900">{props.heading}</h5>
                </a>
                <div className="px-5 ">
                    <a href="/">
                        <img className=" h-96 w-full object-cover" src={props.img} alt="" />
                    </a>

                    <p className="mb-3 relative font-normal text-gray-700"><b>Price: </b> ${props.pair}<br />
                        <b>Discount: </b> {props.pair1}%<br />

                        <p 
                        // href={props.l_url} 
                        onClick={()=>setShowDes((des)=>!des)} className='absolute bottom-2 right-2' >
                            <FiArrowRightCircle size={30} className="text-blue-500 " />
                        </p>
                    </p>

                    {showDes && <p className='mb-2'><b>Description: </b>{props.description}</p>}
                    
                </div>

            </div>
        </div>
    )
}


