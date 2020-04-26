import React from "react"
import {graphql} from "gatsby"
import Container from "react-bootstrap/Container"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Links, {Link} from "../components/questionnaire/links"
import Legal from "../components/questionnaire/legal"
import Questions, {Question} from "../components/questionnaire/questions"
import Scores, {Score} from "../components/questionnaire/scorings"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Import from "../components/questionnaire/import"
import Summary from "../components/questionnaire/summary"

interface Props {
  pageContext: {
    id: string
  }
  data: {
    softoutcomes: {
      questionnaire: {
        id: string
        name: string
        description: string
        links: Link[]
        attribution?: string
        license: string
        instructions?: string
        questions: Question[]
        scorings?: Score[]
      }
    }
  }
}

const Questionnaire = (props: Props) => {
  const questionnaire = props.data.softoutcomes.questionnaire
  return (
    <Layout footerMargin={true}>
      <SEO title={questionnaire.name} />
      <Hero mini={true}>
        <h2>{questionnaire.name}</h2>
        <p>
          {questionnaire.description}
          <br />
          <Summary numQuestions={questionnaire.questions.length} numLinks={questionnaire.links.length} />
        </p>
      </Hero>
      <Container
        fluid
        style={{
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        <Row>
          <Col xl={3} lg={{span: 4, order: 0}} md={{span: 12, order: 2}}>
            <Links links={questionnaire.links} />
            <Legal license={questionnaire.license} attribution={questionnaire.attribution} />
            <Import questionnaire={questionnaire.id} />
          </Col>
          <Col>
            <Questions questions={questionnaire.questions} instructions={questionnaire.instructions} />
            <Scores scores={questionnaire.scorings} />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Questionnaire

export const pageQuery = graphql`
  query($id: String!) {
    softoutcomes {
      questionnaire(id: $id) {
        id
        name
        description
        license
        attribution
        instructions
        links {
          name
          url
          description
        }
        questions {
          id
          question
          ... on SO_LikertQuestion {
            scale {
              value
              label
            }
          }
        }
        scorings {
          name
        }
      }
    }
  }
`
