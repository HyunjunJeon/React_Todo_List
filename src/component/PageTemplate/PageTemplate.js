/*
유저 인터페이스의 전체적인 틀을 설정
흰색 배경에 그림자를 띄우고, 내부에 일정관리라는 타이틀을 보여주며, 타이틀 아래쪽으로 내부에 삽입될 내용들
*/

import React from "react"
import styles from "./PageTemplate"
import classNames from "classname"

const cx = classNames.bind(styles)

const PageTemplate = ({ children }) => {
  return (
    <div className={cx("page-template")}>
      <h1>일정관리</h1>
      <div className={cx("content")}>{children}</div>
    </div>
  )
}

export default PageTemplate
