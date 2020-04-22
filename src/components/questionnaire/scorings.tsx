import React from "react"
import Section from "../section"

export interface IScore {
  name: string
}

interface IProps {
  scores?: IScore[]
}

const Score = (p: {score: IScore}) => {
  return <p>{p.score.name}</p>
}

const Scores = (p: IProps) => {
  if (!p.scores || p.scores.length === 0) {
    return <div />
  }
  return (
    <Section
      header="Scores"
      body={
        <div>
          {p.scores.map(s => (
            <Score score={s} />
          ))}
        </div>
      }
    />
  )
}

export default Scores
