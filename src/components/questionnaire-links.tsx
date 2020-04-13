import React from "react"
import Section from "./section"

export interface ILink {
  name: string;
  description?: string;
  url: string;
}

interface IProps {
  links: ILink[];
}

const QuestionnaireLinks = (p: IProps) => {
  const links: JSX.Element[] = p.links.map((l) => (
    <div key={l.name}>
      <a target="_blank" href={l.url}>{l.name}</a>
    </div>
  ));
  return (
    <Section header="Links" body={
      <>
        {links}
      </>
    } />
  );
}

export default QuestionnaireLinks
