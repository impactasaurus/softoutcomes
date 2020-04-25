import React from "react"
import {graphql} from "gatsby"
import Container from "react-bootstrap/Container"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Paging from "../components/paging"
import List from "../components/questionnaire/list"

interface Question {
  id: string
}

interface Link {
  name: string
}

interface Questionnaire {
  id: string
  name: string
  description: string
  questions: Question[]
  links: Link[]
}

interface Props {
  pageContext: {
    limit: number
    page: number
    numPages: number
  }
  data: {
    softoutcomes: {
      questionnaires: {
        questionnaires: Questionnaire[]
      }
    }
  }
}

const Questionnaires = (props: Props) => {
  const questionnaires = props.data.softoutcomes.questionnaires.questionnaires
  return (
    <Layout footerMargin={true}>
      <SEO title="Questionnaires" />
      <Container>
        <List
          questionnaires={questionnaires.map(q => ({
            id: q.id,
            name: q.name,
            description: q.description,
            numLinks: q.links.length,
            numQuestions: q.questions.length,
          }))}
          style={{
            marginTop: "2rem",
            marginBottom: "0.5rem",
          }}
        />
        <Paging
          id="questionnaire-pages"
          numPages={props.pageContext.numPages}
          urlGenerator={pg => `questionnaires/${pg}`}
          currentPage={props.pageContext.page}
        />
      </Container>
    </Layout>
  )
}

export default Questionnaires

export const pageQuery = graphql`
  query($page: Int!, $limit: Int!) {
    softoutcomes {
      questionnaires(page: $page, limit: $limit) {
        questionnaires {
          id
          name
          description
          questions {
            id
          }
          links {
            name
          }
        }
      }
    }
  }
`
