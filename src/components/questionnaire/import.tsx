import Section from "../section"
import React from "react"
import {ImpactasaurusImport} from "../import"

interface Props {
  questionnaire: string
}

const Import = (p: Props) => {
  return (
    <Section
      header="Use"
      body={
        <>
          <p>Import this questionnaire into your chosen impact tool:</p>
          <ImpactasaurusImport questionnaire={p.questionnaire} />
        </>
      }
    />
  )
}

export default Import
