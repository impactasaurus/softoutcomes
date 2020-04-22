import React, {CSSProperties} from "react"
import Pagination from "react-bootstrap/Pagination"
import {navigate} from "gatsby"

interface IProps {
  numPages: number
  urlGenerator: (pg: number) => string
  id: string
  currentPage: number // zero indexed
  style?: CSSProperties
}

const Paging = (p: IProps) => {
  const pages = []
  const go = pg => navigate(p.urlGenerator(pg))
  for (let ct = 1; ct <= p.numPages; ct++) {
    pages.push(
      <Pagination.Item key={`${p.id}-${ct}`} active={p.currentPage + 1 === ct} onClick={() => go(ct)}>
        {ct}
      </Pagination.Item>
    )
  }
  return (
    <div>
      <Pagination id={p.id} style={p.style}>
        {pages}
      </Pagination>
    </div>
  )
}

export default Paging
