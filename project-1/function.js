document.getElementById('cmnt-btn').addEventListener('click',function(){
    const commentBox = document.getElementById('cmnt');
    const commentText = commentBox.value;
    const commentContainer = document.getElementById('comment-container');
    const p = document.createElement('p');
    commentContainer.appendChild(p);
    p.innerText = commentText;
    commentBox.value ='';
})