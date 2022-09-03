import './style.css';
import './style.scss';
import Methods from './modules/methods.js';

const methods = new Methods();
const animesAPI = 'https://anime-db.p.rapidapi.com/anime?page=1&size=30&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc';
const likesAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qvRewcmh88OIPOPoLZPA/likes/';
const commentsAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qvRewcmh88OIPOPoLZPA/comments';
const container = document.querySelector('.movie-list');
const submit = document.getElementById('submitComment');
const username = document.getElementById('InputName');
const comment = document.getElementById('commentToPost');
const small = document.getElementsByTagName('small');

methods.loadData(container, animesAPI, likesAPI, commentsAPI);

container.addEventListener('click', (e) => {
  const element = e.target.id.substring(0, 4);
  const index = e.target.id.substring(6, e.target.id.length);
  if (element === 'cmnt') {
    const commentsList = `${commentsAPI}?item_id=${index}`;
    methods.loadModalInfo(index, commentsList);
  }
});

username.addEventListener('change', () => {
  if (username.value.length !== 0 && comment.value.length !== 0) {
    submit.removeAttribute('disabled', 'disabled');
    small.classList.remove('show');
  } else {
    submit.setAttribute('disabled', 'disabled');
    small.classList.add('show');
  }
});