import React from 'react';
import './RegisterPage.css';

import { useNavigate } from 'react-router-dom';
import { Circle } from '../../components';
import { makeAuthRequest } from '../../utils/makeRequest/makeRequest';
import { REGISTER_URL } from '../../constant/apiEndPoints';

function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = async () => {
    const data = await makeAuthRequest(REGISTER_URL, navigate, {
      data: {
        email,
        password,
      },
    });
    if (data === null) return;
    navigate('/login');
  };
  return (
    <div className="login-container">
      <div className="left-container">
        <h1>Design APIs fast,</h1>
        <h1>Manage Content easily.</h1>
        <Circle TOP="2%" RIGHT="42%" HEIGHT="210px" WEIGHT="210px" />
        <Circle TOP="21%" RIGHT="50%" HEIGHT="150px" WEIGHT="150px" />
        <Circle TOP="70%" RIGHT="85%" HEIGHT="210px" WEIGHT="210px" />
        <Circle TOP="90%" RIGHT="80%" HEIGHT="150px" WEIGHT="150px" />
      </div>
      <div className="right-container">
        <h1>Login to your CMS+ account</h1>
        <div className="login-form">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleEmailChange}
            value={email}
            type="email"
            name="email"
            id="email"
          />
          <label htmlFor="password">Password</label>
          <input
            onChange={handlePasswordChange}
            value={password}
            type="password"
            name="password"
            id="password"
          />
          <button onClick={handleRegister} type="submit">
            Register
          </button>
          <label className="forget-password" htmlFor="forget-password">
            Forget Password?
          </label>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
