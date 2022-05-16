import React from 'react';
import { useCookies } from 'react-cookie';
import Login from '../components/Login';
import ArticleList from '../components/ArticleList';

function Moderate() {
  const [cookie] = useCookies();

  const isLoggedIn = () => ((cookie != null) && ('status' in cookie) && (cookie.status === 'moderator'));

  return (
    <div>
      {isLoggedIn()
        ? <ArticleList />
        : <Login />}
    </div>
  );
}

export default Moderate;
