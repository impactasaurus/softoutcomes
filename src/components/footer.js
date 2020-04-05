import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const buildDate = useStaticQuery(graphql`
    query {
      currentBuildDate {
        currentDate
      }
    }
  `);
  return (
    <footer>
      © {new Date().getFullYear()}, built on {buildDate.currentBuildDate.currentDate}
    </footer>
  );
}

export default Footer;
