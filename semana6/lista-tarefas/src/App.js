import React, { Component } from 'react';
import './App.css';

import TaskCreatorForm from './components/TaskCreatorForm'
import FilterForm from './components/FilterForm'
import TaskList from './components/TaskList'
import SortButtons from './components/SortButtons'

class App extends Component {
  state = {
    task: '',
    taskList: [],
    filter: '',
    editing: {status: false, id: ''}
  }

  componentDidMount = () => {
    const taskList = JSON.parse(localStorage.getItem('taskList'))
    if (taskList) {
      this.setState({taskList})
    } else {
      localStorage.setItem('taskList', JSON.stringify([]))
    }
  }

  componentDidUpdate = () => {
    localStorage.setItem('taskList', JSON.stringify(this.state.taskList))
  }
  
  handleTaskChange = (e) => {
    this.setState({task: e.target.value})
  }

  handleTaskCreation = (e) => {
    e.preventDefault()
    
    const task = {
      id: Date.now(),
      description: this.state.task,
      completed: false
    }

    const taskList = [task, ...this.state.taskList]
    
    this.setState({taskList, task: ''})
  }

  handleTaskEdit = (e, id) => {
    e.preventDefault()

    const taskList = this.state.taskList

    taskList.forEach(task => {
      task.description = task.id === id ? this.state.task : task.description
    })

    this.setState({taskList, task: '', editing: {status: false, id: ''}})
  }

  handleTaskRemotion = (id) => {
    const taskList = this.state.taskList.filter(task => task.id !== id)

    this.setState({taskList})
  } 

  sortList = (order) => {
    let taskList
    switch (order) {
      case "crescente":
        taskList = this.state.taskList.sort((a, b) => a.description > b.description ? 1 : -1)
        break
      case "descrescente":
        taskList = this.state.taskList.sort((a, b) => a.description > b.description ? -1 : 1)
        break
      default:
        taskList = this.state.taskList.sort((a, b) => b.id - a.id)
    } 
    
      this.setState({taskList})
  }

  clearAll = () => {
    this.setState({taskList: []})
  }

  handleFilterChange = (e) => {
    this.setState({filter: e.target.value})
  }

  toggleTaskStatus = (id) => {
    const taskList = this.state.taskList

    taskList.forEach(task => {
      task.completed = task.id === id ? !task.completed : task.completed
    })

    this.setState({taskList})
  }

  handleClickEdit = (id) => {
    const task = this.state.taskList.find(task => task.id === id)

    this.setState({task: task.description, editing: {status: true, id}})
  }

  render () {
    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        
        <TaskCreatorForm 
          editing={this.state.editing}
          taskList={this.state.taskList}
          task={this.state.task}
          onTaskChange={this.handleTaskChange}
          onCreateTask={this.handleTaskCreation}
          onEditTask={this.handleTaskEdit}
        />
        
        <FilterForm
          filter={this.state.filter}
          onFilterChange={this.handleFilterChange}
        />
        
        <SortButtons onSort={this.sortList}/>

        <TaskList 
          taskList={this.state.taskList}
          filter={this.state.filter}
          onClickTask={this.toggleTaskStatus}
          onEditTask={this.handleClickEdit}
          onDeleteTask={this.handleTaskRemotion}
        />

        <button onClick={this.clearAll}>Limpar tudo</button>
      </div>
    );
  }
}

export default App;
