import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import WalletIDMainContext from '../context/walletID/WalletIDMainContext';

const PendingRights = () => {
    const [pendingRightsData, setPendingRightsData] = useState([]);

    const {
        fetchedWalletId,
        setFetchedWalletId
    } = useContext(WalletIDMainContext);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'http://127.0.0.1:8000/drm/getSpecificRight/',
            params: { wallet_id: '65a67bd20033cb5001382f38' }
        };

        axios
            .request(options)
            .then(function (response) {
                setPendingRightsData(response.data.response);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <div>
                <h3>Your requested rights are :-</h3>
            </div>
            <div>
                {pendingRightsData.map((item, index) => {
                    const nftId = item.nftId; // Extracting nftId
                    const rightsType = Object.keys(item)[1]; // Extracting the rights type (e.g., hoodieRights, mugRights)
                    const rightsData = item[rightsType]; // Extracting the corresponding rights data

                    return (
                        <div key={index}>
                            <h4>NFT ID: {nftId}</h4>
                            <h4>Merch Type: {rightsType}</h4>
                            <p>Merchant Quantity: {rightsData.merchantQuantity}</p>
                            <p>Merch Title: {rightsData.merchTitle}</p>
                            <p>License Fees: {rightsData.licenseFees}</p>
                            {/* Add more properties as needed */}
                        </div>
                    );
                })}
            </div>
            <div>
                <h4>Contact us at contact@blockright.com if rights are not allocated for more than 7 days</h4>
            </div>
        </div>
    );
};

export default PendingRights;
