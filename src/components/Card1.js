import React from 'react'

export const Card1 = (props) => {
  return (
    <>

      {/* w-1/3 */}
      <div className="p-4 md:w-1/1 ">
        <div className="h-full bg-[#191E24] rounded-lg overflow-hidden hover:shadow hover:shadow-blue-900">
          <img className="p-2 rounded-2xl h-[400px] w-full object-cover" src={props.imgSource} alt="blog" />
          <div className="p-6">

            <h1 className="title-font text-xl font-medium text-white mb-1">{props.title}</h1>
            <p className="leading-relaxed mb-3 text-white">{props.description}</p>
            <div className="flex items-center flex-wrap  " >
              <a href="/" className="text-[#3167E7] font-semibold inline-flex items-center md:mb-2 lg:mb-0">Get Merch </a>
              {/* <span className="text-white ml-[9rem] inline-flex items-center text-sm  ">
                <svg className="w-4 h-4 mr-2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
                {props.comment}
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
