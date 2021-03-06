import {Link} from "gatsby"
import React, {CSSProperties} from "react"
import {slugify} from "../../helpers/url"
import ListGroup from "react-bootstrap/ListGroup"
import Summary from "./summary"

interface Questionnaire {
  id: string
  name: string
  description: string
  numQuestions: number
  numLinks: number
}

interface Props {
  questionnaires: Questionnaire[]
  style?: CSSProperties
}

const List = (p: Props) => {
  const entries: JSX.Element[] = p.questionnaires.map(q => (
    <ListGroup.Item key={q.id}>
      <Link to={`/questionnaires/${slugify(q.name)}`}>
        <h5>{q.name}</h5>
      </Link>
      <p style={{marginBottom: 0}}>{q.description}</p>
      <Summary numQuestions={q.numQuestions} numLinks={q.numLinks} />
    </ListGroup.Item>
  ))
  return (
    <ListGroup style={p.style} variant="flush">
      {entries}
    </ListGroup>
  )
}

export default List
