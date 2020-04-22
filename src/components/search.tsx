import React, {FormEvent, useEffect, useState} from "react"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import {navigate} from "gatsby"

interface IProps {
  initial?: string
  dark?: boolean // default false
}

const Search = (p: IProps) => {
  const [query, setQuery] = useState(p.initial || "")
  // if the initial prop is updated, we should update our local state
  useEffect(() => {
    setQuery(p.initial || "")
  }, [p.initial])

  const queryChange = event => setQuery(event.target.value)
  const querySubmit = (event: FormEvent) => {
    event.preventDefault()
    navigate(`/search?q=${query}`)
  }

  const buttonVariant = p.dark ? "outline-primary" : "primary"
  return (
    <Form inline onSubmit={querySubmit} style={{justifyContent: "center"}}>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" value={query} onChange={queryChange} />
      <Button variant={buttonVariant} type="submit">
        Search
      </Button>
    </Form>
  )
}

export default Search
