import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Paging from "../components/paging"



const Questionnaires = (props) => {
  const questionnaires = props.data.softoutcomes.questionnaires.questionnaires;
  return (
    <Layout>
      <SEO title="Questionnaires"/>
      <div>
        <div>Page {props.pageContext.page+1}, limit {props.pageContext.limit}</div>
        {questionnaires.map(q => (
          <div key={q.id}>
            <Link to={`/questionnaires/${q.id}`}>questionnaire - {q.id} - {q.name}</Link>
          </div>
        ))}
      </div>
      <Paging numPages={props.pageContext.numPages} id="questionnaire-pages" urlGenerator={pg => `questionnaires/${pg}`}/>
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
            name: PropTypes.string.isRequired
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
        }
      }
    }
  }
`
