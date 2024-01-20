import React from 'react'

export const Header = () => {
let color = 'hover:text-blue-700 text-lg'
    return (
        <div className='sticky top-0 left-0 right-0 '>
            <nav >
                <div className="bg-neutral-100 flex justify-between items-center h-[70px] shadow-xl shadow-black-900 ">
                    <div className="ml-3">
                        <h1 className='text-black text-2xl'><b>Blockright</b></h1>
                    </div>
                    <div className=" w-[35%]">
                        <ul className='text-black  flex justify-around '>
                            <li style={{margin:"0px 10px"}}><a className= {color} href="/AdminDashboard">User</a></li>
                            <li style={{margin:"0px 10px"}}><a className= {color} href="/AdminDashboard/nft">NFT</a></li>
                            <li style={{margin:"0px 10px"}}><a className= {color} href="/AdminDashboard/products">Products</a></li>
                            <li style={{margin:"0px 10px"}}><a className= {color} href="/AdminDashboard/rights" aria-current="page">Rights</a></li>
                            <li style={{margin:"0px 10px"}}><a className= {color} href="/AdminDashboard/orders" aria-current="page">Orders</a></li>
                            <li style={{margin:"0px 10px"}}><a className= {color} href="/AdminDashboard/shop" aria-current="page">Shop</a></li>
                            <li style={{margin:"0px 10px"}}><a className= {color} href="/AdminDashboard/license" aria-current="page">License</a></li>
                            <li style={{margin:"0px 10px"}}><a className= {color} href="/AdminDashboard/payment" aria-current="page">Payment</a></li>
                        </ul>
                    </div>
                    <div className="bg-black rounded-full h-11 w-11 mr-3">
                        <img className='rounded-full' src="https://i.postimg.cc/WpmS3bd6/sachi.png" alt="User" />
                    </div>
                </div>
            </nav>
        </div>
    )
}


