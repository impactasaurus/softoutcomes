import React, {useState, useEffect} from "react"
import {useLocation} from "@reach/router"

import Layout from "../components/layout"
import SEO from "../components/seo"
import List from "../components/questionnaire/list"
import Container from "react-bootstrap/Container"
import Spinner from "react-bootstrap/Spinner"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Search from "../components/search"
import Alert from "react-bootstrap/Alert"

interface Questionnaire {
  name: string
  description: string
  id: string
}

const Loading = (
  <div style={{textAlign: "center", marginTop: "5rem", marginBottom: "5rem"}}>
    <Spinner animation="border" variant="secondary" />
  </div>
)

const Error = <Alert variant="danger">Failed to load search results. Please try refreshing the page</Alert>

const PleaseSearch = <Alert variant="info">Please enter a search term</Alert>

const NoResults = ({q}: {q: string}) => (
  <Alert variant="info">{`No questionnaires match '${q}'. Please try something else`}</Alert>
)

const isEmptyQuery = (q: string) => !q || q === ""

const Wrapper = (query: string, inner: JSX.Element) => {
  return (
    <Layout footerMargin={true}>
      <SEO title="Search" />
      <Container>
        <div style={{marginTop: "3rem", marginBottom: "3rem"}}>
          <Search initial={query} />
        </div>
        <Row>
          <Col>{inner}</Col>
        </Row>
      </Container>
    </Layout>
  )
}

const SearchPage = () => {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const query = params.get("q")

  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<error>()
  const [results, setResults] = useState<Questionnaire[]>([])
  useEffect(() => {
    if (isEmptyQuery(query)) {
      return
    }
    setError(undefined)
    setLoading(true)
    fetch("https://api.softoutcomes.org/v1/query", {
      method: "post",
      body: JSON.stringify({
        query: "query($q: String!){search(query:$q,limit:10,page:0){questionnaires{id, name, description}}}",
        variables: {
          q: query,
        },
      }),
    })
      .then(res => res.json())
      .then(res => {
        setResults(res.data.search.questionnaires)
        setLoading(false)
      })
      .catch(err => {
        setError(err)
        setLoading(false)
      })
  }, [query])

  if (isEmptyQuery(query)) {
    return Wrapper(query, PleaseSearch)
  }

  if (loading) {
    return Wrapper(query, Loading)
  }

  if (error) {
    return Wrapper(query, Error)
  }

  if (results.length === 0) {
    return Wrapper(query, <NoResults q={query} />)
  }

  return Wrapper(query, <List questionnaires={results} />)
}

export default SearchPage
