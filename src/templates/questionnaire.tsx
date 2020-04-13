import React from "react"
import { graphql } from 'gatsby'
import Container from 'react-bootstrap/Container';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/hero'
import QuestionnaireLinks, { ILink } from "../components/questionnaire-links"
import QuestionnaireLegal from "../components/questionnaire-legal"

interface IProps {
  pageContext: {
    id: string;
  }
  data: {
    softoutcomes: {
      questionnaire: {
        id: string;
        name: string;
        description: string;
        links: ILink[];
        attribution?: string;
        license: string;
      }
    }
  }
}

const Questionnaire = (props: IProps) => {
  const questionnaire = props.data.softoutcomes.questionnaire;
  return (
    <Layout>
      <SEO title={questionnaire.name}/>
      <Hero mini={true}>
        <h2>{questionnaire.name}</h2>
        <p>{questionnaire.description}</p>
      </Hero>
      <Container style={{
        marginTop: "1rem",
        marginBottom: "1rem"
      }}>
        <QuestionnaireLinks links={questionnaire.links} />
        <QuestionnaireLegal license={questionnaire.license} attribution={questionnaire.attribution} />
      </Container>
    </Layout>
  );
}

export default Questionnaire

export const pageQuery = graphql`
  query($id: String!) {
    softoutcomes {
      questionnaire(id:$id) {
        id
        name
        description
        license
        attribution
        links {
          name
          url
          description
        }
      }
    }
  }
`;
