import React from "react"
import Section from "../section"

export interface Question {
  question: string
}

interface Props {
  instructions?: string
  questions: Question[]
}

const QuestionView = (p: {question: Question}) => {
  return <p key={p.question.question}>{p.question.question}</p>
}

const Questions = (p: Props) => {
  return (
    <Section
      header="Questions"
      body={
        <div>
          {p.instructions && <p>{p.instructions}</p>}
          <div>
            {p.questions.map(q => (
              <QuestionView key={q.question} question={q} />
            ))}
          </div>
        </div>
      }
    />
  )
}

export default Questions
