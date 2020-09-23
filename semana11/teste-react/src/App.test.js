import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";


describe('Feed Page Test' , () => {
  beforeEach(() => {
    render(<App />)

    // 1. usuário digita o post
    fireEvent.change(screen.getByPlaceholderText(/Novo post/i), {
      target: { value: 'Um post legal'}
    })
    // 2. usuário clica em Adicionar
    fireEvent.click(screen.getByText(/Adicionar/i))
  })

  test("user should be able to create new post", () => {
    // Assert
    expect(screen.queryByText(/Um post legal/)).toBeTruthy()
    expect(screen.queryByText(/Curtir/)).toBeTruthy()
    expect(screen.queryByText(/Apagar/)).toBeTruthy()
  })
  
  test("user should be able to like a post", () => {
    // Act
    fireEvent.click(screen.getByText(/Curtir/))
  
    // Assert
    expect(screen.queryByText(/Descurtir/)).toBeTruthy()
  })

  test("user should be able to delete a post", () => {
    // Act
    fireEvent.click(screen.getByText(/Apagar/))
  
    // Assert
    expect(screen.queryByText(/Um post legal/)).toBeNull()
  })

  test("input should be cleared when post has been created", () => {
    // Assert 
    expect(screen.queryByPlaceholderText(/Novo post/i)).toHaveValue('')
  })

  test("when the post list is empty, should appear 'Nenhum post' message", () => {
    // Act - apaga post
    fireEvent.click(screen.getByText(/Apagar/))
    
    // Assert
    expect(screen.queryByText(/Nenhum post/i)).toBeTruthy()
  })
  
  test("when the post list is not empty, should not appear 'Nenhum post' message", () => {
    // Assert
    expect(screen.queryByText(/Nenhum post/i)).toBeNull()
  })
  
  test("Post quantity should be visible when there is any post", () => {
    // Act
    // 1. usuário digita o post 2
    fireEvent.change(screen.getByPlaceholderText(/Novo post/i), {
      target: { value: 'Um post legal 2'}
      })
    // 2. usuário clica em Adicionar
    fireEvent.click(screen.getByText(/Adicionar/i))
    // 3. usuário digita o post 3
    fireEvent.change(screen.getByPlaceholderText(/Novo post/i), {
      target: { value: 'Um post legal 3'}
      })
    // 4. usuário clica em Adicionar
    fireEvent.click(screen.getByText(/Adicionar/i))

    // Assert
    expect(screen.queryByText(/Quantidade de posts: 3/i)).toBeTruthy()
  })
  
  test("Post quantity should not be visible when there is no post", () => {
    // Act - apaga post
    fireEvent.click(screen.getByText(/Apagar/))

    // Assert
    expect(screen.queryByText(/Quantidade de posts/i)).toBeNull()
  })

  test("User can not create an empty post, a message should be visible 'Não é permitido criar post vazio'", () => {
    // Act
    // 1. usuário clica em Adicionar sem inserir nada no input
    fireEvent.click(screen.getByText(/Adicionar/i))

    // Assert
    expect(screen.queryByText(/Não é permitido criar post vazio/i)).toBeTruthy()
  })
})
