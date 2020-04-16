import React, { useState, useEffect } from "react"
import { useLocation } from "@reach/router"

import Layout from "../components/layout"
import SEO from "../components/seo"
import List from "../components/questionnaire/list"
import Container from "react-bootstrap/Container"
import Spinner from "react-bootstrap/Spinner"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Search from "../components/search"

interface IQuestionnaire {
  name: string;
  description: string;
  id: string;
}

const Loading = (
  <div style={{textAlign: "center", marginTop: "5rem", marginBottom: "5rem"}}>
    <Spinner animation="border" variant="secondary" />
  </div>
);

const Wrapper = (query: string, inner: JSX.Element) => {
  return (
    <Layout footerMargin={true}>
      <SEO title="Search" />
      <Container>
        <div style={{marginTop: "3rem", marginBottom: "3rem"}}>
          <Search initial={query} />
        </div>
        <Row>
          <Col>
            {inner}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

const SearchPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("q");

  const [loading, setLoading] = useState<boolean>(true);
  const [results, setResults] = useState<IQuestionnaire[]>([]);
  useEffect(() => {
    if (query === "") {
      return;
    }
    setLoading(true);
    fetch("https://api.softoutcomes.org/v1/query", {
      method: 'post',
      body: JSON.stringify({
        "query": "query($q: String!){search(query:$q,limit:10,page:0){questionnaires{id, name, description}}}",
        "variables": {
          "q": query
        }
      })
    })
    .then(res => res.json())
    .then(res => {
      setResults(res.data.search.questionnaires);
      setLoading(false);
    });
  }, [query]);

  if (loading) {
    return Wrapper(query, Loading);
  }

  return Wrapper(query, <List questionnaires={results} />);
}

export default SearchPage
