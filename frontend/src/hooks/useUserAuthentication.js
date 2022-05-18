import { useCookies } from 'react-cookie';
import axios from 'axios';

function useAuthentication() {
  const [, setCookie] = useCookies();

  const login = (loginData, from) => {
    // extract name and password from submitted data
    const { name, password } = JSON.parse(loginData);
    // get all user(moderator/analyst) info
    axios
      .get(`http://localhost:8082/api/users/${from}`)
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
        console.log(`${err}`);
      });
  };

  return { login };
}

export default useAuthentication;
