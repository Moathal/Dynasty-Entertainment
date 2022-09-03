import { getAnime, getComments } from './APIsGET&POST.js';

export default class Methods {
  constructor() {
    this.animes = [];
  }

  async loadData(movieList, animeAPI) {
    const list = await getAnime(animeAPI);
    list.forEach((anime, i) => {
      const li = document.createElement('li');
      li.innerHTML = `<img src="${anime.image}"><h2 id="title-${i}">${anime.title}</h2>
                  <div class="container">
                  <button id="cmntb-${i}"class="learn-more" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <span class="circle" aria-hidden="true">
                      <span id="cmnti-${i}" class="icon arrow"></span>
                    </span>
                    <span id="cmntt-${i}" class="button-text">Comment</span>
                  </button>
                </div>
                  <div id="liked-${i}" class="toggle">
              <input id="likei-${i}" type="checkbox" class="heart-check">
            
              <label id="likel-${i}" for="heart-check" class="heart">
                <svg id="likes-${i}" viewBox="0 0 24 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <path id="likep-${i}" class="initial" d="M11.8189091,20.3167303 C17.6981818,16.5505143 20.6378182,12.5122542 20.6378182,8.20195014 C20.6378182,5.99719437 18.8550242,4 16.3283829,4 C13.777264,4 12.5417153,6.29330284 11.8189091,6.29330284 C11.0961029,6.29330284 10.1317157,4 7.30943526,4 C4.90236126,4 3,5.64715533 3,8.20195014 C3,12.5122346 5.93963637,16.5504946 11.8189091,20.3167303 Z"></path>
                  <path class="stroke" fill="none" d="M11.8189091,20.3167303 C17.6981818,16.5505143 20.6378182,12.5122542 20.6378182,8.20195014 C20.6378182,5.99719437 18.8550242,4 16.3283829,4 C13.4628072,4 10.284995,6.64162063 10.284995,8.70392731 C10.284995,10.0731789 10.8851209,10.9874447 11.8189091,10.9874447 C12.7526973,10.9874447 13.3528232,10.0731789 13.3528232,8.70392731 C13.3528232,6.64162063 10.1317157,4 7.30943526,4 C4.90236126,4 3,5.64715533 3,8.20195014 C3,12.5122346 5.93963637,16.5504946 11.8189091,20.3167303 Z"></path>
                </svg>
              </label>
            </div>
            <p class="card-body__likes like-text"> <span id="span-${i}"></span> 0 likes</p>`;
      movieList.appendChild(li);
      const item = {
        id: i,
        title: anime.title,
        synopsis: anime.synopsis,
        image: anime.image,
        likes: 0,
      };
      this.animes.push(item);
    });
  }

  async loadModalInfo(index, commentsAPI) {
    const anime = this.animes[index];
    document.getElementById('animeDescription').innerText = anime.synopsis;
    document.getElementById('modal-title').innerText = anime.title;
    document.getElementById('modal-image').setAttribute('src', anime.image);
    document.getElementById('exampleModalLabel').innerText = anime.title;
    const comments = document.querySelector('.comments');
    comments.id = `anime-${index}`;
    comments.innerHTML = '';
    const commentsURL = `${commentsAPI}?item_id=${index}`;
    const commentsArray = await getComments(commentsURL);
    if (Array.isArray(commentsArray)) {
      commentsArray.forEach((comment) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<div class="card">
                  <div class="comment-head">
                  <h5 class="username">${comment.username}</h5>
                  <span class="date">${comment.creation_date}</span>
                  </div>
                  <p class="comment-block">${comment.comment}</p>
                </div>`;
        comments.appendChild(card);
      });
    }
  }
}
