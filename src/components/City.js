import React, { useState } from 'react'


export const City = () => {
    const city = [
        'Pune',
        'Delhi',
        '',
        // Add more country names here...
    ];
    const [selectedCity, setSelectedcity] = useState('');

    const handleSelectChange = (event) => {
        setSelectedcity(event.target.value);
    };

    return (
        <>
            <div>
                <select value={selectedCity} onChange={handleSelectChange} className='outline-none'>
                    <option value="">City</option>
                    {city.map((city, index) => (
                        <option key={index} value={city} >
                            {city}
                        </option>
                    ))}
                </select>

            </div>
        </>
    )
}
