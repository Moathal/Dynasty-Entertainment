import "./style.css";
import "./style.scss";
import Methods from "./modules/methods.js";
import { postLikes } from "./modules/APIsGET&POST.js";

const methods = new Methods();
const animesAPI =
	"https://anime-db.p.rapidapi.com/anime?page=1&size=30&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc";
const likesAPI =
	"https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qvRewcmh88OIPOPoLZPA/likes/";
const commentsAPI =
	"https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qvRewcmh88OIPOPoLZPA/comments";
const container = document.querySelector(".movie-list");
const submit = document.getElementById("submitComment");
const username = document.getElementById("InputName");
const comment = document.getElementById("commentToPost");
const small = document.getElementById("small");

function render() {
	container.innerHTML = `<div class="loadingDiv" style="height: 100vh; width: 100%; display: flex; justify-content: center; align-items: center">
    </div>`;
	const loadingDiv = document.querySelector(".loadingDiv");
	loadingDiv.innerHTML = `<div style="min-height: 100%; width: 30%; display: flex; justify-content: center; align-items: center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150"><path fill="none" stroke="#F12226" stroke-width="30" stroke-linecap="round" stroke-dasharray="300 385" stroke-dashoffset="0" d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"><animate attributeName="stroke-dashoffset" calcMode="spline" dur="2" values="685;-685" keySplines="0 0 1 1" repeatCount="indefinite"></animate></path></svg></div>`;
	methods.loadData(container, animesAPI, likesAPI);
}

render();

container.addEventListener("click", (e) => {
	const element = e.target.id.substring(0, 4);
	const index = e.target.id.substring(6, e.target.id.length);
	if (element === "like") {
		methods.increaseLikes(index);
		postLikes(index, likesAPI);
	} else if (element === "cmnt") {
		const commentsList = commentsAPI;
		methods.loadModalInfo(index, commentsList);
	}
});

submit.addEventListener("click", (e) => {
	e.preventDefault();
	// const comments = document.querySelector('.comments');
	// const index = comments.id.substring(6, comments.id.length);
	if (username.value.length !== 0 && comment.value.length !== 0) {
		methods.addNewComment(commentsAPI);
	} else {
		small.classList.add("show");
	}
});
