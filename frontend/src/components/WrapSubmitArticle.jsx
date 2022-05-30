import React from 'react';
import { useNavigate } from 'react-router-dom';
import SubmitArticle from './SubmitArticle';

function WrapSubmitArticle() {
  const navigate = useNavigate();

  return (
    <SubmitArticle navigate={navigate} />
  );
}

export default WrapSubmitArticle;
