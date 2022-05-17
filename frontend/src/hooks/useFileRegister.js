import axios from 'axios';

function useFileRegister() {
  const udpateStatus = (id, stat, userId) => {
    axios
      .put(`http://localhost:8082/api/articles//id/${id}`, { moderator_id: userId, status: stat })
      .then((res) => {
        console.log(res);
        console.log('udpate success');
        {/* 一覧画面に戻る */}
        {/* this.props.history.push("/show-book/" + this.props.match.params.id); */}
      })
      .catch((err) => {
        console.log(err);
        console.log('Error in UpdateArticleInfo!');
      });
  };

  return {
    udpateStatus,
  };
}

export default useFileRegister;
