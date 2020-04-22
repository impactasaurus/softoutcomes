import React from "react"
import Section from "../section"

export interface Score {
  name: string
}

interface Props {
  scores?: Score[]
}

const ScoreView = (p: {score: Score}) => {
  return <p>{p.score.name}</p>
}

const Scores = (p: Props) => {
  if (!p.scores || p.scores.length === 0) {
    return <div />
  }
  return (
    <Section
      header="Scores"
      body={
        <div>
          {p.scores.map(s => (
            <ScoreView key={s.name} score={s} />
          ))}
        </div>
      }
    />
  )
}

export default Scores
