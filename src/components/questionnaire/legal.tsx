import React from "react"
import Section from "../section"

interface IProps {
  attribution?: string
  license: string
}

const Legal = (p: IProps) => {
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
