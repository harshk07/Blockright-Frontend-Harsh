import React from 'react'

export const Card2 = (props) => {
    return (
        <>
     

            <div className=" md:w-1/4 mx-4 p-2 text-center ">
                <div className="bg-[#191E24] h-full border-opacity-60 rounded-lg overflow-hidden">

                    <img className="h-40 w-40 mx-auto mt-5 rounded-full" src={props.imgSource} alt="blog" />

                    <div className=" p-6">

                        <h1 className="title-font text-xl font-medium text-white mb-3">{props.title}</h1>
                        <p className="leading-relaxed mb-3 text-white">{props.description}</p>

                    </div>
                </div>
            </div>
        </>
    )
}
