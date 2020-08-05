const posts = JSON.parse(sessionStorage.posts)

const postsContainer = document.getElementById('container-de-posts')

for (post of posts) {
  const postCard = document.createElement('article')
  postCard.className = 'post'
  postCard.innerHTML += `<img src="${post.image}" alt="post image">`
  postCard.innerHTML += `<h2>${post.title}</h2>`
  postCard.innerHTML += `<h3>${post.author}</h3>`
  postCard.innerHTML += `<p>${post.content}</p>`
  
  postsContainer.insertAdjacentElement("afterbegin", postCard)
}
