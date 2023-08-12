document.querySelector(".blog-post-form").addEventListener('click', blogPostSelector);
document.querySelector(".comment-delete").addEventListener('click', commentDelete);

function commentDelete (event) {
    event.preventDefault;

    console.log(event)
}

function blogPostSelector (event) {
    event.preventDefault();

    console.log(EventTarget);
}