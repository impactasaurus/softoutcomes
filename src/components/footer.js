import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Logo from "../components/logo"

const Footer = () => {
  const buildDate = useStaticQuery(graphql`
    query {
      currentBuildDate {
        currentDate
      }
    }
  `)
  const bgColor = "#f1f3f4"
  return (
    <footer className="footer" style={{paddingBottom: "2rem", backgroundColor: bgColor}}>
      <Container>
        <Row>
          <Col>
            <div style={{marginTop: "2rem", marginBottom: "2rem"}}>
              <Logo inverse={true} />
            </div>
            <hr width="100%" />
          </Col>
        </Row>
        <Row
          style={{
            color: "var(--gray)",
            fontSize: "0.7rem",
          }}
        >
          <span
            className="copyright"
            style={{
              textAlign: "center",
              width: "100%",
            }}
          >
            © {new Date().getFullYear()}{" "}
            <a href="https://impactasaurus.org/" style={{color: "inherit"}}>
              Impactasaurus
            </a>
          </span>
          <span
            style={{
              textAlign: "center",
              width: "100%",
            }}
          >
            Built on {new Date(buildDate.currentBuildDate.currentDate).toLocaleDateString()}
          </span>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
