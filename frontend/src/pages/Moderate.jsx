import React from 'react';
import { useCookies } from 'react-cookie';
import Login from '../components/Login';

function Moderate() {
  const [cookie] = useCookies();

  const isLoggedIn = () => ((cookie != null) && ('status' in cookie) && (cookie.status === 'moderator'));

  return (
    <div>
      {isLoggedIn()
        ? <p>Logged in</p>
        : <Login />}
    </div>
  );
}

export default Moderate;
