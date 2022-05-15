import { useCookies } from 'react-cookie';
import axios from 'axios';

function useAuthentication() {
  const [, setCookie] = useCookies();

  const login = (loginData) => {
    // extract name and password from submitted data
    const { name, password } = JSON.parse(loginData);
    // get all moderator info
    axios
      .get('http://localhost:8082/api/moderators')
      .then((res) => {
        // check if username and password match

        for (let i = 0; i < res.data.length; i += 1) {
          const moderator = res.data[i];
          console.log(`name from DB: ${moderator.name}`);
          console.log(`pass from DB: ${moderator.password}`);
          if ((moderator.name === name) && (moderator.password === password)) {
            // set login status to cookie
            setCookie('status', 'moderator');
            break;
          }
        }
      })
      .catch((err) => {
        console.log(`${err}`);
      });
    console.log(`logindata: ${loginData}`);
  };

  return { login };
}

export default useAuthentication;
