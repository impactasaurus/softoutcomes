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

const Reversed = () => (<span style={{color: "red"}}>*</span>)

const modeScale = (scales: Point[][]): {scale: Point[], count: number} => {
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
  return {
    scale: LUT[mode],
    count: count[mode]
  }
}

const QuestionView = (p: {question: Question, questions: Question[], idx: number}) => {
  const hasCommonScale = commonLabels(p.questions.map(q => (q.scale || []).map(s => s.label)));
  const mode = modeScale(p.questions.map(q => q.scale)).scale
  let reversed = <span />
  if(hasCommonScale) {
    if (mode[0].value !== p.question.scale[0].value) {
      reversed = <Reversed />
    }
  } else {
    reversed = (
      <>
        <br />
        <br />
        <Scale scale={p.question.scale}/>
        <br />
      </>
    )
  }
  return <p key={p.question.id}>{p.idx}. {p.question.question} {reversed}</p>
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

const Scale = ({scale}: {scale: Point[]}) => {
  return (
    <Table bordered size="sm">
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
  )
}

const CommonScale = (p: {questionnaireID: string, questions: Question[]}): JSX.Element|undefined => {
  const hasCommonScale = commonLabels(p.questions.map(q => (q.scale || []).map(s => s.label)));
  if (!hasCommonScale) {
    return undefined
  }
  const mode = modeScale(p.questions.map(q => q.scale));
  const hasReversedQs = mode.count !== p.questions.length;

  return (
    <>
      <h6>Scale</h6>
      <Scale scale={mode.scale}/>
      {hasReversedQs && <div><Reversed /> indicates that a question uses reversed scorings</div>}
    </>
  )
}

const Questions = (p: Props) => {
  const instructions = Instructions({instructions:p.instructions})
  const scale = CommonScale({questions:p.questions, questionnaireID:p.questionnaireID})
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
          {scale !== undefined ? (
            <>
              {scale}
              <hr />
            </>
          ) : <div />}
          <div>
            <h6>Questions</h6>
            {p.questions.map((q, i) => (
              <QuestionView key={q.question} question={q} questions={p.questions} idx={i+1} />
            ))}
          </div>
        </div>
      }
    />
  )
}

export default Questions
