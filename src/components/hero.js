import React from "react"
import PropTypes from "prop-types"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"

const Hero = ({children, secondary, white, mini}) => {
  const style = {
    marginBottom: 0,
  }
  if (secondary) {
    style.backgroundColor = "var(--secondary)"
  }
  if (white) {
    style.backgroundColor = "white"
  }
  let clz = "hero"
  if (secondary) {
    clz += " dark"
  }
  if (mini) {
    clz += " mini"
  }
  return (
    <Jumbotron fluid className={clz} style={style}>
      <Container>{children}</Container>
    </Jumbotron>
  )
}

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  secondary: PropTypes.bool,
  white: PropTypes.bool,
  mini: PropTypes.bool,
}

export default Hero
