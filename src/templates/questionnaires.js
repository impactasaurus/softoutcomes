import PropTypes from "prop-types"
import React from "react"
import { graphql } from 'gatsby'
import Container from 'react-bootstrap/Container';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Paging from "../components/paging"
import List from "../components/questionnaire/list"



const Questionnaires = (props) => {
  const questionnaires = props.data.softoutcomes.questionnaires.questionnaires;
  return (
    <Layout footerMargin={true}>
      <SEO title="Questionnaires"/>
      <Container>
        <List
          questionnaires={questionnaires}
          style={{
            marginTop: "2rem",
            marginBottom: "0.5rem"
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
  );
}

Questionnaires.propTypes = {
  pageContext: PropTypes.exact({
    limit: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    numPages: PropTypes.number.isRequired
  }),
  data: PropTypes.exact({
    softoutcomes: PropTypes.exact({
      questionnaires: PropTypes.exact({
        questionnaires: PropTypes.arrayOf(
          PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
          })
        )
      })
    })
  })
}

export default Questionnaires

export const pageQuery = graphql`
  query($page: Int!, $limit: Int!) {
    softoutcomes {
      questionnaires(page:$page, limit:$limit) {
        questionnaires {
          id
          name
          description
        }
      }
    }
  }
`
