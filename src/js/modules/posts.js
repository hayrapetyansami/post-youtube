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