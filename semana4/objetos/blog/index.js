const posts = []

function criarPost() {
  const titleInputElement = document.getElementById('titulo-post')
  const authorInputElement = document.getElementById('autor-post')
  const imageInputElement = document.getElementById('imagem-post')
  const contentInputElement = document.getElementById('conteudo-post')

  const title = titleInputElement.value
  const author = authorInputElement.value
  let image = imageInputElement.value
  const content = contentInputElement.value

  if (isVoidString(title)) {
    alert('Seu post deve conter um título')
  } else if (isVoidString(author)) {
    alert('Seu post deve conter um autor')
  } else if (isVoidString(content)) {
    alert('Seu post deve conter um conteúdo')
  } else {
    if (isVoidString(image)) {
      image = 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    }
    
    const post = {title, author, image, content}
  
    posts.push(post)
    publish(post)
    
    titleInputElement.value = ''
    authorInputElement.value = ''
    imageInputElement.value = ''
    contentInputElement.value = ''
  }
}

function isVoidString(text) {
  return text === ''
}

function publish(post) {
  const postsContainer = document.getElementById('container-de-posts')
  
  const postCard = document.createElement('article')
  postCard.className = 'post'

  postCard.innerHTML += `<img src="${post.image}" alt="post image">`
  postCard.innerHTML += `<h2>${post.title}</h2>`
  postCard.innerHTML += `<h3>${post.author}</h3>`
  postCard.innerHTML += `<p>${post.content}</p>`

  postsContainer.insertAdjacentElement("afterbegin", postCard)
}