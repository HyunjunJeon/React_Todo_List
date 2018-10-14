/*
일정을 추가할 때 사용하는 Input 컴포넌트
버튼이 있음
*/
import React from "react"
import styles from "./TodoInput.scss"
import classNames from "classname"

const cx = classNames.bind(styles)

/*
 3개의 props를 받음
 value 는 input 값으로 설정됌
 onChange 는 내용이 수정될 때 사용
 onInsert 는 '추가' 버튼을 눌렀을 때 사용
*/

const TodoInput = ({ value, onChange, onInsert }) => {
  // Enter 키가 눌리면 onInsert 실행
  const handleKeyPress = e => {
    if (e.key === "Enter") {
      onInsert()
    }
  }

  return (
    <div className={cx("todo-input")}>
      <input onChange={onChange} value={value} onKeyPress={handleKeyPress} />
      <div className={cx("add-button")} onClick={onInsert}>
        추가
      </div>
    </div>
  )
}

export default TodoInput
