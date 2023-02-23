function loadPost(){
    const url = 'https://jsonplaceholder.typicode.com/posts'
    fetch(url)
    .then(res => res.json())
    .then(data => displayPost(data))
}

// load post initially without event handler
loadPost()

function displayPost(data){
    const postContainer = document.getElementById('post-container')
    for(const post of data){
        const postDiv = document.createElement('div')
        postDiv.classList.add('post')
        postDiv.innerHTML = `
            <h3>User ID: ${post.userId}</h3>
            <h2>Title: ${post.title}</h2>
            <p>Description: ${post.body}</p>
            `
        postContainer.appendChild(postDiv)        
    }
}