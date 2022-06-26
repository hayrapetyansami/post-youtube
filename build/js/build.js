/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/get.js":
/*!*******************************!*\
  !*** ./src/js/modules/get.js ***!
  \*******************************/
/***/ ((module) => {

module.exports = function (url, posts) {
	fetch (url)
	.then(data => data.json())
	.then(data => {
		data.forEach(post => {
			posts(document.querySelector("#posts"), post.title, post.text);
		});
	})
}

/***/ }),

/***/ "./src/js/modules/posts.js":
/*!*********************************!*\
  !*** ./src/js/modules/posts.js ***!
  \*********************************/
/***/ ((module) => {

module.exports = function posts (parent, potsTitle, potsText) {
	const post = document.createElement("div");
	const h3 = document.createElement("h3");
	const p = document.createElement("p");

	parent.append(post);
	post.append(h3);
	post.append(p);

	post.classList.add("post");
	h3.classList.add("post_title");
	p.classList.add("post_text");

	h3.textContent = potsTitle;
	p.textContent = potsText;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
const posts = __webpack_require__(/*! ./modules/posts */ "./src/js/modules/posts.js");
const get = __webpack_require__(/*! ./modules/get */ "./src/js/modules/get.js");

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
})();

/******/ })()
;
//# sourceMappingURL=build.js.map