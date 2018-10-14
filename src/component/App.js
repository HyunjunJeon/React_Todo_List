import React, { Component, Fragment } from "react"
import PageTemplate from "./PageTemplate"
import TodoInput from "./TodoInput"
import TodoList from "./TodoList"

class App extends Component {
  state = {
    input: "",
    todos: [
      { id: 0, text: "리액트를 다루는 기술", done: true },
      { id: 1, text: "css + sass 공부하기", done: false }
    ]
  }

  handleChange = e => {
    const { value } = e.target
    this.setState({
      input: value
    })
  }

  id = 1
  getId = () => {
    return ++this.id
  }

  handleInsert = () => {
    const { todos, input } = this.state
    const newTodo = {
      text: input,
      done: false,
      id: this.getId()
    }
    this.setState({
      todos: [...todos, newTodo],
      input: ""
    })
  }

  handleToggle = id => {
    const { todos } = this.state
    // id 값으로 배열의 Index 찾음
    const index = todos.findIndex(todo => todo.id === id)

    // 찾은 데이터의 done 값을 반대로 함
    const toggled = {
      ...todos[index],
      done: !todos[index].done
    }

    // 렌더링 시킬때 우리가 찾은애만 반대로하고 나머지는 그대로 복사하기
    this.setState({
      todos: [...todos.slice(0, index), toggled, ...todos.slice(index + 1, todos.length)]
    })
  }

  handleRemove = id => {
    const { todos } = this.state
    const index = todos.findIndex(todo => todo.id === id)

    this.setState({
      todos: [...todos.slice(0, index), ...todos.slice(index + 1, todos.length)]
    })
  }

  render() {
    const { input, todos } = this.state
    const { handleChange, handleInsert, handleToggle, handleRemove } = this
    return (
      <Fragment>
        <PageTemplate>
          <TodoInput onChange={handleChange} value={input} onInsert={handleInsert} />
          <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
        </PageTemplate>
      </Fragment>
    )
  }
}

export default App
