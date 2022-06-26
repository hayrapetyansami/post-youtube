const posts = require("./modules/posts");
const get = require("./modules/get");

const DB_URL = "http://localhost:3000/posts";

const root = document.querySelector("#root");
const input = document.querySelector("#root input");
const textarea = document.querySelector("#root textarea");
const btn = document.querySelector("#root button");

root.addEventListener("submit", (e) => {
	e.preventDefault();
	const inpVal = input.value.trim();
	const txtVal = textarea.value.trim();

	if (inpVal !== "" && txtVal !== ""){
		const formData = new FormData(root);
		const toJson = JSON.stringify(Object.fromEntries(formData.entries()));

		async function post (url, data) {
			await fetch(url, {
				method: "POST",
				headers: {
					"content-type" : "application/json"
				},
				body: data
			});
		}

		post(DB_URL, toJson)
		.then(() => console.log("done"))
		.catch(() => console.log("Server error"))
	}
});

try {
	get(DB_URL, posts)
} catch {}