// LogoutComponent.js

import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const LogoutComponent = () => {
  const { logout } = useContext(AuthContext);

  return <button onClick={logout}>Logout</button>;
};

export default LogoutComponent;

