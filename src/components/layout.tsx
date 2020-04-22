import React from "react"

import Header from "./header"
import Footer from "./footer"

interface Props {
  children: JSX.Element | JSX.Element[]
  footerMargin?: boolean
}

const Layout = ({children, footerMargin}: Props) => {
  return (
    <div className="app">
      <Header />
      <main className="app-content" style={{marginBottom: footerMargin ? "2rem" : "0"}}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
