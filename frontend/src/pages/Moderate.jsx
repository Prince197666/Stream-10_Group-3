import React from 'react';
import { useCookies } from 'react-cookie';
import Login from '../components/Login';
import ArticleList from '../components/ArticleList';

function Moderate() {
  const [cookie] = useCookies();
  const role = 'moderators';

  const isLoggedIn = () => ((cookie != null) && ('role' in cookie) && (cookie.role === role));

  return (
    <div>
      {isLoggedIn()
        ? <ArticleList from={role} />
        : <Login from={role} />}
    </div>
  );
}

export default Moderate;
