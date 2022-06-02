import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function useArticleRegister() {
  const navigate = useNavigate();

  const udpateArticle = (id, data, role, notification) => {
    axios
      .put(`/api/articles/id/${id}`, data)
      .then(() => {
        if (role === 'moderators') {
          // send e-mail notification to analysts
          if (notification.length > 0) {
            axios.post('/api/email/analyst', notification)
              .then()
              .catch();
          }

          navigate('/Moderate');
        } else {
          if (data.status === 'register' && notification) {
            // send e-mail notification of acceptance to a user
            const sendData = { to: notification, title: data.title };
            axios.post('/api/email/accept', sendData)
              .then()
              .catch();
          } else if (data.status === 'reject' && notification) {
            const sendData = { to: notification, title: data.title };
            // send e-mail notification of reject to a user
            axios.post('/api/email/reject', sendData)
              .then()
              .catch();
          }
          navigate('/Analyse');
        }
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(`Error in UpdateArticleInfo!: ${err}`);
      });
  };

  return {
    udpateArticle,
  };
}

export default useArticleRegister;
