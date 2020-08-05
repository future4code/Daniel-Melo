const posts = []

function criarPost() {
  const titleInputElement = document.getElementById('titulo-post')
  const authorInputElement = document.getElementById('autor-post')
  const contentInputElement = document.getElementById('conteudo-post')

  const title = titleInputElement.value
  const author = authorInputElement.value
  const content = contentInputElement.value

  const post = {title, author, content}

  posts.push(post)
  publish(post)

  titleInputElement.value = ''
  authorInputElement.value = ''
  contentInputElement.value = ''
}

function publish(post) {
  const postsContainer = document.getElementById('container-de-posts')
  
  const postCard = document.createElement('article')
  postCard.className = 'post'

  postCard.innerHTML += `<h2>${post.title}</h2>`
  postCard.innerHTML += `<h3>${post.author}</h3>`
  postCard.innerHTML += `<p>${post.content}</p>`

  postsContainer.insertAdjacentElement("afterbegin", postCard)
}