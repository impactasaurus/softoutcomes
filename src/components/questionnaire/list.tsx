import {Link} from "gatsby"
import React, {CSSProperties} from "react"
import {slugify} from "../../helpers/url"
import ListGroup from "react-bootstrap/ListGroup"

interface IQuestionnaire {
  id: string
  name: string
  description: string
}

interface IProps {
  questionnaires: IQuestionnaire[]
  style?: CSSProperties
}

const List = (p: IProps) => {
  const entries: JSX.Element[] = p.questionnaires.map(q => (
    <ListGroup.Item key={q.id}>
      <Link to={`/questionnaires/${slugify(q.name)}`}>
        <h5>{q.name}</h5>
      </Link>
      <p style={{marginBottom: 0}}>{q.description}</p>
    </ListGroup.Item>
  ))
  return (
    <ListGroup style={p.style} variant="flush">
      {entries}
    </ListGroup>
  )
}

export default List
