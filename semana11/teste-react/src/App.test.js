import React from "react";
import { render, fireEvent, queryByPlaceholderText } from "@testing-library/react";
import App from "./App";


describe('Feed Page Test' , () => {
  test("user should be able to create new post", () => {
    // Arrange
    const { queryByText, getByText, getByPlaceholderText } = render(<App />) 
  
    // 1. usuário digita o post
    fireEvent.change(getByPlaceholderText(/Novo post/i), {
      target: { value: 'Um post legal'}
    })
    // 2. usuário clica em Adicionar
    fireEvent.click(getByText(/Adicionar/i))

    // Assert
    expect(queryByText(/Um post legal/)).toBeTruthy()
    expect(queryByText(/Curtir/)).toBeTruthy()
    expect(queryByText(/Apagar/)).toBeTruthy()
  })
  
  test("user should be able to like a post", () => {
    // Arrange
    const { queryByText, getByText, getByPlaceholderText } = render(<App />) 
  
    // 1. usuário digita o post
    fireEvent.change(getByPlaceholderText(/Novo post/i), {
      target: { value: 'Um post legal'}
    })
    // 2. usuário clica em Adicionar
    fireEvent.click(getByText(/Adicionar/i))
    // 3. usuário clica em Curtir
    fireEvent.click(getByText(/Curtir/))
  
    // Assert
    expect(queryByText(/Descurtir/)).toBeTruthy()
  })

  test("user should be able to delete a post", () => {
    // Arrange
    const { queryByText, getByText, getByPlaceholderText } = render(<App />) 
  
    // 1. usuário digita o post
    fireEvent.change(getByPlaceholderText(/Novo post/i), {
      target: { value: 'Um post legal'}
    })
    // 2. usuário clica em Adicionar
    fireEvent.click(getByText(/Adicionar/i))
    // 3. usuário clica em Apagar
    fireEvent.click(getByText(/Apagar/))
  
    // Assert
    expect(queryByText(/Um post legal/)).toBe(null)
  })

  test("input should be cleared when post has been created", () => {
    // Arrange
    const {getByText, getByPlaceholderText, queryByPlaceholderText } = render(<App />) 
  
    // 1. usuário digita o post
    fireEvent.change(getByPlaceholderText(/Novo post/i), {
      target: { value: 'Um post legal'}
    })
    // 2. usuário clica em Adicionar
    fireEvent.click(getByText(/Adicionar/i))
      
    // Assert 
    expect(queryByPlaceholderText(/Novo post/i).value).toEqual('')
  })

  test("when the post list is empty, should appear 'Nenhum post' message", () => {
    // Arrange
    const { queryByText } = render(<App />)

    // Assert
    expect(queryByText(/Nenhum post/i)).toBeTruthy()
  })
  
  test("when the post list is not empty, should not appear 'Nenhum post' message", () => {
    // Arrange
    const { queryByText, getByPlaceholderText, getByText } = render(<App />)

    // 1. usuário digita o post
    fireEvent.change(getByPlaceholderText(/Novo post/i), {
      target: { value: 'Um post legal'}
      })
    // 2. usuário clica em Adicionar
    fireEvent.click(getByText(/Adicionar/i))

    // Assert
    expect(queryByText(/Nenhum post/i)).toEqual(null)
  })
  
  test("Post quantity should be visible when there is any post", () => {
    // Arrange
    const { queryByText, getByPlaceholderText, getByText } = render(<App />)

    // 1. usuário digita o post
    fireEvent.change(getByPlaceholderText(/Novo post/i), {
      target: { value: 'Um post legal'}
      })
    // 2. usuário clica em Adicionar
    fireEvent.click(getByText(/Adicionar/i))
    // 3. usuário digita o post
    fireEvent.change(getByPlaceholderText(/Novo post/i), {
      target: { value: 'Um post legal 2'}
      })
    // 4. usuário clica em Adicionar
    fireEvent.click(getByText(/Adicionar/i))
    // 5. usuário digita o post
    fireEvent.change(getByPlaceholderText(/Novo post/i), {
      target: { value: 'Um post legal 3'}
      })
    // 6. usuário clica em Adicionar
    fireEvent.click(getByText(/Adicionar/i))

    // Assert
    expect(queryByText(/Quantidade de posts: 3/i)).toBeTruthy()
  })
  
  test("Post quantity should not be visible when there is no post", () => {
    // Arrange
    const { queryByText } = render(<App />)

    // Assert
    expect(queryByText(/Quantidade de posts/i)).toEqual(null)
  })

  test("User can not create an empty post, a message should be visible 'Não é permitido criar post vazio'", () => {
    // Arrange
    const { queryByText, getByText } = render(<App />) 
  
    // Act
    // 1. usuário clica em Adicionar sem inserir nada no input
    fireEvent.click(getByText(/Adicionar/i))

    // Assert
    expect(queryByText(/Não é permitido criar post vazio/i)).toBeTruthy()
  })
})
