import React from 'react'
import { Pageno } from './Pageno'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
export const NFT = () => {
    const [nftData, setNftData] = useState([])
    useEffect(() => {
        // Define your Axios request options
        const options = {
            method: "GET",
            url: "http://127.0.0.1:8000/admin/getAllNft",
            params: { adminId: "64e9acc80c8b7ac2f37f492f" },
        };

        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                setNftData(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);

    console.log(nftData);
    let a = "border-2 p-3 w-100%"
    let b = "border-2"
    return (
        <div>
            <div className="flex justify-center mt-5">
                <table className='w-100% h-100% text-center text-sm'>
                    <tr className={b} >
                        <th className={a}>sn.</th>
                        <th className={a}>Nft Id</th>
                        <th className={a}>User Id</th>
                        <th className={a}>Wallet Address</th>
                        <th className={a}>Rights Allocated</th>
                        <th className={a}>Last Synced On</th>

                    </tr>
                    {nftData && nftData.map((nft, index) => (
                        <tr className={b}>
                            <td>{index + 1}</td>
                            <td className={a}>{nft._id}</td>
                            <td className={a}>{nft.userID}</td>
                            <td className={a}>{nft.walletAddress}</td>
                            <td className={a}>Cap:{nft.rightAllocated.cap}, Hoodie:{nft.rightAllocated.hoodie}, Tshirt:{nft.rightAllocated.tshirt}, Mug:{nft.rightAllocated.mug}</td>
                            <td className={a}>{nft.lastSyncedOn}</td>
                        </tr>
                    ))}
                </table>

            </div>
            <div className='flex justify-center mt-2 '>
                <div aria-label="Page navigation example">
                    <ul className="inline-flex -space-x-px text-sm">
                        <Pageno number="Previous" />
                        <Pageno number="1" />
                        <Pageno number="2" />
                        <Pageno number="3" />
                        <Pageno number="4" />
                        <Pageno number="5" />
                        <Pageno number="Next" />
                    </ul>
                </div>
            </div>



        </div>
    )
}


