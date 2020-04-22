import React from "react"
import Section from "../section"

interface Props {
  attribution?: string
  license: string
}

const Legal = (p: Props) => {
  return (
    <Section
      header="Legal"
      body={
        <>
          <h6>License</h6>
          <p>{p.license}</p>
          {p.attribution && (
            <>
              <h6>Attribution</h6>
              <p>{p.attribution}</p>
            </>
          )}
        </>
      }
    />
  )
}

export default Legal
