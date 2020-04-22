import React from "react"
import Section from "../section"

export interface IQuestion {
  question: string
}

interface IProps {
  instructions?: string
  questions: IQuestion[]
}

const Question = (p: {question: IQuestion}) => {
  return <p>{p.question.question}</p>
}

const Questions = (p: IProps) => {
  return (
    <Section
      header="Questions"
      body={
        <div>
          {p.instructions && <p>{p.instructions}</p>}
          <div>
            {p.questions.map(q => (
              <Question question={q} />
            ))}
          </div>
        </div>
      }
    />
  )
}

export default Questions
