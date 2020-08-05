const posts = JSON.parse(sessionStorage.posts)

const postsContainer = document.getElementById('container-de-posts')
const postCard = document.createElement('article')
postCard.className = 'post'

for (let i = posts.length - 1; i >= 0; i--) {
  postCard.innerHTML += `<img src="${posts[i].image}" alt="post image">`
  postCard.innerHTML += `<h2>${posts[i].title}</h2>`
  postCard.innerHTML += `<h3>${posts[i].author}</h3>`
  postCard.innerHTML += `<p>${posts[i].content}</p>`
  
  postsContainer.insertAdjacentElement("afterbegin", postCard)
}
