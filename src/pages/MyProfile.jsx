import React, { useState } from 'react';

export const MyProfile = () => {
    const [formData, setFormData] = useState({
        userName: '',
        userEmail: '',
        userMobile: '',
        city: '',
        country: '',
        address: '',
        pinCode: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform actions like submitting the form data to the server here
        console.log('Form data submitted:', formData);
        // Add further logic here, such as sending the data to the server
    };

    return (
        <div>
            <h2>My Profile</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    User Name:
                    <input
                        type="text"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                        style={{ background: 'white', border: '1px solid #ccc', padding: '5px' }}
                    />
                </label>
                <br />
                <label>
                    User Email:
                    <input
                        type="email"
                        name="userEmail"
                        value={formData.userEmail}
                        onChange={handleChange}
                        style={{ background: 'white', border: '1px solid #ccc', padding: '5px' }}
                    />
                </label>
                <br />
                <label>
                    User Mobile:
                    <input
                        type="text"
                        name="userMobile"
                        value={formData.userMobile}
                        onChange={handleChange}
                        style={{ background: 'white', border: '1px solid #ccc', padding: '5px' }}
                    />
                </label>
                <br />
                <label>
                    City:
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        style={{ background: 'white', border: '1px solid #ccc', padding: '5px' }}
                    />
                </label>
                <br />
                <label>
                    Country:
                    <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        style={{ background: 'white', border: '1px solid #ccc', padding: '5px' }}
                    />
                </label>
                <br />
                <label>
                    Pin Code:
                    <input
                        type="text"
                        name="pinCode"
                        value={formData.pinCode}
                        onChange={handleChange}
                        style={{ background: 'white', border: '1px solid #ccc', padding: '5px' }}
                    />
                </label>
                <br />
                <label>
                    Address:
                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        style={{ background: 'white', border: '1px solid #ccc', padding: '5px' }}
                    />
                </label>
                <br />
                <button type="submit" style={{ marginTop: '10px' }}>Submit</button>
            </form>
        </div>
    );
};
