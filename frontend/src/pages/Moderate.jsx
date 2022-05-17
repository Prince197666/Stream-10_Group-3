import React from 'react';
import { useCookies } from 'react-cookie';
import Login from '../components/Login';
import ArticleList from '../components/ArticleList';

function Moderate() {
  const [cookie] = useCookies();

  const isLoggedIn = () => ((cookie != null) && ('role' in cookie) && (cookie.role === 'moderator'));

  return (
    <div>
      {isLoggedIn()
        ? <ArticleList />
        : <Login />}
    </div>
  );
}

export default Moderate;
