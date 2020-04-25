import React, {useRef} from "react"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"

interface Props {
  numQuestions: number
  numLinks: number
}

const SummaryItem = ({val, icon, text}: {val: number; icon: JSX.Element; text: string}) => {
  const SummaryTooltip = <Tooltip>{text}</Tooltip>
  return (
    <OverlayTrigger placement="top" delay={{show: 250, hide: 400}} overlay={SummaryTooltip}>
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          marginRight: "0.4rem",
        }}
      >
        {icon}
        <span style={{marginLeft: "0.2rem"}}>{val}</span>
      </span>
    </OverlayTrigger>
  )
}

const QuestionIcon = (
  <svg
    className="bi bi-question-circle"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fillRule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clipRule="evenodd" />
    <path d="M5.25 6.033h1.32c0-.781.458-1.384 1.36-1.384.685 0 1.313.343 1.313 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.007.463h1.307v-.355c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.326 0-2.786.647-2.754 2.533zm1.562 5.516c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
  </svg>
)

const LinkIcon = (
  <svg
    className="bi bi-link-45deg"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4.715 6.542L3.343 7.914a3 3 0 104.243 4.243l1.828-1.829A3 3 0 008.586 5.5L8 6.086a1.001 1.001 0 00-.154.199 2 2 0 01.861 3.337L6.88 11.45a2 2 0 11-2.83-2.83l.793-.792a4.018 4.018 0 01-.128-1.287z" />
    <path d="M5.712 6.96l.167-.167a1.99 1.99 0 01.896-.518 1.99 1.99 0 01.518-.896l.167-.167A3.004 3.004 0 006 5.499c-.22.46-.316.963-.288 1.46z" />
    <path d="M6.586 4.672A3 3 0 007.414 9.5l.775-.776a2 2 0 01-.896-3.346L9.12 3.55a2 2 0 012.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 00-4.243-4.243L6.586 4.672z" />
    <path d="M10 9.5a2.99 2.99 0 00.288-1.46l-.167.167a1.99 1.99 0 01-.896.518 1.99 1.99 0 01-.518.896l-.167.167A3.004 3.004 0 0010 9.501z" />
  </svg>
)

const Summary = (p: Props) => {
  return (
    <span>
      <SummaryItem val={p.numQuestions} icon={QuestionIcon} text="Number of Questions" />
      <SummaryItem val={p.numLinks} icon={LinkIcon} text="Number of Links" />
    </span>
  )
}

export default Summary
