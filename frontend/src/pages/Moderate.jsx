/* eslint-disable no-nested-ternary */
import React from 'react';
import { useCookies } from 'react-cookie';
import { useParams } from 'react-router-dom';
import Login from '../components/Login';
import ArticleList from '../components/ArticleList';
import SignIn from '../components/SignIn';

function Moderate() {
  const [cookie] = useCookies();
  const role = 'moderators';
  const { id } = useParams();

  const isLoggedIn = () => ((cookie != null) && ('role' in cookie) && (cookie.role === role));

  return (
    <div>
      {isLoggedIn()
        ? <ArticleList from={role} />
        : (
          id
            ? <SignIn from={role} />
            : <Login from={role} />
        )}
    </div>
  );
}

export default Moderate;
