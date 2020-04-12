import React from "react"
import PropTypes from "prop-types"
import Pagination from 'react-bootstrap/Pagination';
import {navigate} from "gatsby"

const Paging = ({numPages, urlGenerator, id, currentPage}) => {
  const pages = [];
  const go = (pg) => navigate(urlGenerator(pg))
  for (let ct = 1; ct <= numPages; ct++) {
    pages.push(
      <Pagination.Item key={`${id}-${ct}`} active={(currentPage+1) === ct} onClick={() => go(ct)}>
        {ct}
      </Pagination.Item>
    );
  }
  return (
    <Pagination id={id}>
      {pages}
    </Pagination>
  );
}

Paging.propTypes = {
  numPages: PropTypes.number.isRequired,
  urlGenerator: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired // zero indexed
}

export default Paging
