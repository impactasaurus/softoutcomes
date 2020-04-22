import React from "react"
import Section from "../section"

export interface Link {
  name: string
  description?: string
  url: string
}

interface Props {
  links: Link[]
}

const Links = (p: Props) => {
  const links: JSX.Element[] = p.links.map(l => (
    <div key={l.name}>
      <a target="_blank" rel="noopener noreferrer" href={l.url}>
        {l.name}
      </a>
    </div>
  ))
  return <Section header="Links" body={<>{links}</>} />
}

export default Links
