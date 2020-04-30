import React from "react"
import Section from "../section"
import { commonLabels } from "../../helpers/questionnaire"
import Table from "react-bootstrap/Table"

export interface Point {
  value: number
  label: string
}

export interface Question {
  id: string
  question: string
  scale?: Point[]
}

interface Props {
  instructions?: string
  questions: Question[]
  questionnaireID: string
}

const modeScale = (scales: Point[][]): Point[] => {
  const count: { [id:string]: number} = {};
  const LUT: { [id: string] : Point[] }  = {};
  scales.forEach((s) => {
    const hash = JSON.stringify(s);
    if (count[hash] === undefined) {
      count[hash] = 0;
      LUT[hash] = s
    }
    count[hash]++
  })
  const mode = Object.keys(count).reduce((most, k) => {
    if(most === undefined || count[most] < count[k]) {
      return k
    }
    if (count[most] === count[k]) {
      // if equal count, prefer the scale with incrementing values
      if(LUT[k][0].value < LUT[most][0].value) {
        return k
      }
    }
    return most
  }, undefined);
  return LUT[mode]
}

const QuestionView = (p: {question: Question, questions: Question[]}) => {
  let reversed = <span />
  const hasCommonScale = commonLabels(p.questions.map(q => (q.scale || []).map(s => s.label)));
  if(hasCommonScale) {
    const mode = modeScale(p.questions.map(q => q.scale))
    if (mode[0].value !== p.question.scale[0].value) {
      reversed = <span>(R)</span>
    }
  }
  return <p key={p.question.id}>{p.question.question} {reversed}</p>
}

const Instructions = (p: {instructions?: string}): JSX.Element|undefined => {
  if (!p.instructions) {
    return undefined
  }
  return (
    <>
      <h6>Instructions</h6>
      <p>{p.instructions}</p>
    </>
  )
}

const Scale = (p: {questionnaireID: string, questions: Question[]}): JSX.Element|undefined => {
  const hasCommonScale = commonLabels(p.questions.map(q => (q.scale || []).map(s => s.label)));
  if (!hasCommonScale) {
    return undefined
  }
  const scale = modeScale(p.questions.map(q => q.scale));
  return (
    <>
      <h6>Scale</h6>
      <Table bordered hover size="sm">
        <thead>
          <tr>
            {scale.map((m, i) => <th style={{fontWeight: "normal"}} key={i}>{m.label}</th>)}
          </tr>
        </thead>
        <tbody>
          <tr>
            {scale.map((m, i) => <td key={i}>{m.value}</td>)}
          </tr>
        </tbody>
      </Table>
    </>
  )
}

const Questions = (p: Props) => {
  const instructions = Instructions({instructions:p.instructions})
  const scale = Scale({questions:p.questions, questionnaireID:p.questionnaireID})
  return (
    <Section
      header="Questionnaire"
      body={
        <div>
          {instructions !== undefined ? (
            <>
              {instructions}
              <hr />
            </>
          ) : <div />}
          <div>
            <h6>Questions</h6>
            {p.questions.map(q => (
              <QuestionView key={q.question} question={q} questions={p.questions} />
            ))}
          </div>
          {scale !== undefined ? (
            <>
              <hr />
              {scale}
            </>
          ) : <div />}
        </div>
      }
    />
  )
}

export default Questions
