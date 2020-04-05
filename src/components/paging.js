import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"

const Paging = ({numPages, urlGenerator, id}) => {
  const pages = [];
  for (let ct = 1; ct <= numPages; ct++) {
    pages.push(<Link key={`${id}-${ct}`} to={urlGenerator(ct)}>{ct}</Link>);
  }
  return (
    <div id={id}>
      {pages}
    </div>
  );
}

Paging.propTypes = {
  numPages: PropTypes.number.isRequired,
  urlGenerator: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
}

export default Paging
