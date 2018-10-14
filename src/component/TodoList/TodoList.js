/*
  일정들이 담긴 배열을 TodoItem 컴포넌트의 배열로 바꿔서 렌더링해주는 역할
*/
import React, { Component } from "react"
import TodoItem from "../TodoItem"

class TodoList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props
    const todoList = todos.map(todo => (
      <TodoItem
        key={todo.id}
        done={todo.done}
        onToggle={() => onToggle(todo.id)}
        onRemove={() => onRemove(todo.id)}
      >
        {todo.text}
      </TodoItem>
    ))
    return <div>{todoList}</div>
  }
}

export default TodoList
