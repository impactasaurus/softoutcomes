import React from "react"
import Card from "react-bootstrap/Card"

interface IProps {
  header: string
  body: JSX.Element
}

const Section = (p: IProps) => {
  return (
    <Card style={{marginBottom: "1rem"}}>
      <Card.Header as="h5">{p.header}</Card.Header>
      <Card.Body>{p.body}</Card.Body>
    </Card>
  )
}

export default Section
