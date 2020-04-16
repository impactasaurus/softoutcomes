import React from "react"

import Header from "./header"
import Footer from "./footer"

interface IProps {
  children: JSX.Element | JSX.Element[];
  footerMargin?: boolean;
}

const Layout = ({ children, footerMargin }: IProps) => {
  return (
    <div className="app">
      <Header />
      <main className="app-content" style={{marginBottom: footerMargin ? '2rem' : '0'}}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
