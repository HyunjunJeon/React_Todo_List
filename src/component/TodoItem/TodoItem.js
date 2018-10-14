/*
  각 일정들을 렌더링하고 클릭하면 체크되면서 취소선 그음
*/
import React, { Component } from "react"
import styles from "./TodoItem.scss"
import classNames from "classname"

const cx = classNames.bind(styles)

class TodoItem extends Component {
  render() {
    const { done, children, onToggle, onRemove } = this.props

    return (
      <div className={cx("todo-item")} onClick={onToggle}>
        <input className={cx("tick")} type="checkbox" checked={done} readOnly />
        <div className={cx("text", { done })}>{children}</div>
        <div
          className={cx("delete")}
          onClick={e => {
            e.stopPropagation()
            onRemove()
          }}
        >
          [지우기]
        </div>
      </div>
    )
  }
}

export default TodoItem
