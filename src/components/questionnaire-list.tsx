import { Link } from "gatsby"
import React from "react"
import {slugify} from '../helpers/url'
import ListGroup from 'react-bootstrap/ListGroup';

interface IQuestionnaire {
  id: string;
  name: string;
  description: string;
}

interface IProps {
  questionnaires: IQuestionnaire[];
}

const QuestionnaireList = (p: IProps) => {
  const entries: JSX.Element[] = p.questionnaires.map(q => (
    <ListGroup.Item key={q.id}>
      <Link to={`/questionnaires/${slugify(q.name)}`}><h5>{q.name}</h5></Link>
      <p>{q.description}</p>
    </ListGroup.Item>
  ));
  return (
    <ListGroup>
      {entries}
    </ListGroup>
  );
}

export default QuestionnaireList
