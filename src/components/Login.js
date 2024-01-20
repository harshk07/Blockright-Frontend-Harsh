import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signUpFullName, setSignUpFullName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn,setLoggedIn]=useState(false);
  const navigate =useNavigate();
  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      console.log('Attempting sign-in...');
      const response = await axios.post('http://127.0.0.1:8000/admin/login', {
        mobile: signInEmail,
        password: signInPassword,
      });

      console.log('Response status:', response.status);

      if (response.status === 200) {
        console.log(response.data);
        setErrorMessage(''); // Clear any previous error messages
        // Authentication successful, you can navigate to a dashboard or perform other actions
        // window.location.href = '/dashboard';
        navigate("/AdminDashboard");
      } else if (response.status === 401) {
        console.log('Invalid Password.');
        setErrorMessage('Invalid Password');
      } else if (response.status === 404) {
        console.log('Invalid Mobile Number.');
        setErrorMessage('Invalid Mobile Number');
      } else {
        console.log('Sign-in failed.');
        setErrorMessage('Authentication failed');
      }
    } catch (error) {
      console.error('Error:', error);
      console.log('Error response:', error.response);

      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('An error occurred');
      }
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      console.log('Attempting sign-up...');
      const response = await axios.post('http://127.0.0.1:8000/admin/signin/', {
        fullName: signUpFullName,
        password: signUpPassword,
        mobile: parseInt(signUpEmail),
      });

      console.log('Response status:', response.status);

      if (response.status === 200) {
        console.log(response.data);
        setErrorMessage(''); // Clear any previous error messages
        // Sign-up successful, clear form fields
        setSignUpFullName('');
        setSignUpEmail('');
        setSignUpPassword('');
      } else {
        console.log('Sign-up failed.');
        setErrorMessage('Sign-up failed');
      }
    } catch (error) {
      console.error('Error:', error);
      console.log('Error response:', error.response);
      setErrorMessage('An error occurred');
    }
  };



  return (
    <div className='bg-black' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <form style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)' }} onSubmit={handleSignIn}>
          <h2 style={{ marginBottom: '15px', color: 'white' }}>Admin Sign In</h2>
          <input
            type="contact"
            placeholder="Contact No."
            value={signInEmail}
            onChange={(e) => setSignInEmail(e.target.value)}
            style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px' }}
          />
          <input
            type="password"
            placeholder="Password"
            value={signInPassword}
            onChange={(e) => setSignInPassword(e.target.value)}
            style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px' }}
          />
          <button type="submit" style={{ display: 'block', width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Sign In</button>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>

        <form style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)', marginTop: '20px' }} onSubmit={handleSignUp}>
          <h2 style={{ marginBottom: '15px', color: 'white' }}>Admin Sign Up</h2>
          <input
            type="text" // Use "text" type for full name input
            placeholder="Full Name"
            value={signUpFullName}
            onChange={(e) => setSignUpFullName(e.target.value)} // Update "setSignUpEmail" to "setSignUpFullName"
            style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px' }}
          />
          <input
            type="contact"
            placeholder="Contact No."
            value={signUpEmail}
            onChange={(e) => setSignUpEmail(e.target.value)}
            style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px' }}
          />
          <input
            type="password"
            placeholder="Password"
            value={signUpPassword}
            onChange={(e) => setSignUpPassword(e.target.value)}
            style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px' }}
          />
          <button type="submit" style={{ display: 'block', width: '100%', padding: '10px', backgroundColor: 'green', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Sign Up</button>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
}

export default SignIn;
