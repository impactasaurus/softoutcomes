import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const queryChange = (event) => setQuery(event.target.value);

  const [results, setResults] = useState([]);
  useEffect(() => {
    if (query === "") {
      return;
    }
    fetch("https://api.softoutcomes.org/v1/query", {
      method: 'post',
      body: JSON.stringify({
        "query": "query($q: String!){search(query:$q,limit:10,page:0){questionnaires{id,name}}}",
        "variables": {
          "q": query
        }
      })
    })
    .then(res => res.json())
    .then(res => {
      setResults(res.data.search.questionnaires);
    });
  }, [query]);

  return (
    <Layout>
      <SEO title="Search" />
      <input type="text" value={query} onChange={queryChange} />
      {results.map((r) => <Link to={`/questionnaires/${r.id}`} key={r.id}>{r.name}</Link>)}
    </Layout>
  );
}

export default SearchPage
