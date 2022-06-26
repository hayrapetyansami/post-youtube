module.exports = function (url, posts) {
	fetch (url)
	.then(data => data.json())
	.then(data => {
		data.forEach(post => {
			posts(document.querySelector("#posts"), post.title, post.text);
		});
	})
}