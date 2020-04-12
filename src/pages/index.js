import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/hero'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <h1>Avoid reinventing the wheel</h1>
      <h2>Take inspiration from scientifically validated questionnaires</h2>
      <p>
        Our catalogue collects scientifically validated questionnaires for measuring change inside people
      </p>
    </Hero>
    <Hero white={true}>
      <h2>Soft Outcomes</h2>
      <blockquote className="blockquote">
        <p className="mb-0">"Soft outcomes are outcomes that are less easy to observe or measure, or which involve some form of change inside people, such as a change in attitude or a change in the way they see themselves"</p>
        <footer className="blockquote-footer"><a href="https://www.inspiringimpact.org/what-is-impact-practice/">Inspiring Impact's jargon buster</a></footer>
      </blockquote>
    </Hero>
    <Hero secondary={true}>
      <h2>Validated Questionnaires</h2>
      <p>
        <b>Creating questionnaires is hard</b> - entire academic fields are dedicated to this topic.
        Without experience, it is far too easy to define biased, leading or confusing questions.
        The questionnaires in our catalogue have been sourced from the academic literature and have been validated in scientific studies.
        You can trust these questionnaires!
      </p>
      <p>
        The main benefit of measuring your impact is self improvement.
        If organisations used the same questionnaires, comparisons can be made.
        This means as a sector, we can collectively try more things and <b>understand what works best</b>.
      </p>
    </Hero>
    <Hero white={true}>
      <h2>About</h2>
      <p>
        This catalogue of questionnaires was originally pulled together for use in <a href="https://impactasaurus.org/">Impactasaurus</a>, a tool for monitoring and reporting on soft outcomes.
        We believe that using validated questionnaires will bring great benefit to the charity sector.
        As such, we wanted to make this catalogue of questionnaires freely available outside of Impactasaurus.
      </p>
      <p>
        Given our push for standardisation, we would love more impact tools to make use of this catalogue.
        We offer a free to use GraphQL API which any tool can make use of.
        For more details please <a href="mailto:support@impactasaurus.org">email us</a>.
      </p>
      <p>
        If we are missing a questionnaire, please <a href="mailto:support@impactasaurus.org">let us know</a>.
        To be eligible the questionnaire must be:
      </p>
      <ul>
        <li>freely available for non profit use</li>
        <li>allow us to reproduce the questionnaire on this website</li>
        <li>validated within the literature</li>
      </ul>
    </Hero>
  </Layout>
)

export default IndexPage
