import PropTypes from "prop-types"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Questionnaire = (props) => {
  const questionnaire = props.data.softoutcomes.questionnaire;
  return (
    <Layout>
      <SEO title={questionnaire.name}/>
      <div>
        questionaire - {questionnaire.id} - {questionnaire.name}
      </div>
    </Layout>
  );
}

Questionnaire.propTypes = {
  pageContext: PropTypes.exact({
    id: PropTypes.string.isRequired
  }),
  data: PropTypes.exact({
    softoutcomes: PropTypes.exact({
      questionnaire: PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      })
    })
  })
}

export default Questionnaire

export const pageQuery = graphql`
  query($id: String!) {
    softoutcomes {
      questionnaire(id:$id) {
        id
        name
      }
    }
  }
`;
