import * as React from "react"
import PropTypes from "prop-types"

const Logo = ({inverse}) => {
  let src = "/images/p-logo-filled.svg"
  if (inverse) {
    src = "/images/logo-filled.svg"
  }
  return (
    <span
      className="so-logo"
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <img src={src} alt="Soft Outcome Logo" style={{height: "2rem", marginRight: "0.5rem"}} />
      <span>Soft Outcomes</span>
    </span>
  )
}

Logo.propTypes = {
  inverse: PropTypes.bool,
}

export default Logo
