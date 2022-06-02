import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { useState } from 'react';

function useAuthentication() {
  const navigate = useNavigate();
  const [, setCookie] = useCookies();
  const [analysts, setAnalysts] = useState([]);

  const login = (loginData, from) => {
    // extract name and password from submitted data
    const { name, password } = JSON.parse(loginData);
    // get all user(moderator/analyst) info
    axios
      .get(`/api/users/${from}`)
      .then((res) => {
        // check if username and password match
        for (let i = 0; i < res.data.length; i += 1) {
          const user = res.data[i];
          if ((user.name === name) && (user.password === password)) {
            // set login status to cookie
            setCookie('role', from);
            setCookie('user_id', user._id);
            break;
          }
        }
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(`${err}`);
      });
  };

  // register a user
  const signIn = (data, from) => {
    axios
      .post(`/api/users/${from}`, data)
      .then(() => {
        if (from === 'moderators') {
          navigate('/Moderate');
        } else {
          navigate('/Analyse');
        }
      })
      .catch(() => {
        // eslint-disable-next-line no-console
        console.log('Error in create user');
      });
  };

  const getAllAnalysts = () => {
    axios
      .get('/api/users/analysts/')
      .then((res) => {
        setAnalysts(res.data);
      })
      .catch();
  };

  return {
    analysts, login, signIn, getAllAnalysts,
  };
}

export default useAuthentication;
