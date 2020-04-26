import React from "react"
import Section from "../section"
import { commonLabels } from "../../helpers/questionnaire"
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

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
}

const QuestionView = (p: {question: Question}) => {
  return <p key={p.question.question}>{p.question.question}</p>
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

const Scale = (p: {questions: Question[]}): JSX.Element|undefined => {
  const hasCommonScale = commonLabels(p.questions.map(q => (q.scale || []).map(s => s.label)));
  if (!hasCommonScale) {
    return undefined
  }
  const scale = p.questions[0].scale;
  const getMarks = () => {
    const marks = {};
    scale.forEach((p: Point) => {
      marks[p.value] = p.label;
    });
    return marks;
  }
  return (
    <>
      <h6>Scale</h6>
      <p>Common = {hasCommonScale ? 'true':'false'}</p>
      <Slider
        min={scale[0].value}
        max={scale[scale.length-1].value}
        dots={true}
        disabled={true}
        marks={getMarks()}
      />
    </>
  )
}

const Questions = (p: Props) => {
  const instructions = Instructions({instructions:p.instructions})
  const scale = Scale({questions:p.questions})
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
              <QuestionView key={q.question} question={q} />
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
