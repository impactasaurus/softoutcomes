import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/hero'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <h1>Don't reinvent the wheel</h1>
      <h2>Be inspired by scientifically validated questionnaires</h2>
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
        Stuff
      </p>
    </Hero>
  </Layout>
)

export default IndexPage
