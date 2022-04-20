import React from "react"
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom"
import About from "../../pages/About/About"
import Contact from "../../pages/Contact/Contact"
import Portfolio from "../../pages/Portfolio/Portfolio"
import Service from "../../pages/Service/Service"

const navbarData = [
  {
    id: 1,
    title: "About",
    to: "/about",
  },
  {
    id: 2,
    title: "Projects",
    to: "/projects",
  },
  {
    id: 3,
    title: "Skills",
    to: "/skills",
  },
  {
    id: 4,
    title: "Contact",
    to: "/contact",
  },
]

const Navbar = () => {
  return (
    <Router>
      <nav className="md:mx-8 mb-3 px-6 py-2 z-10 sticky top-0 bg-gray-900 shadow rounded">
        <ul className="flex flex-wrap">
          {navbarData.map((el, id) => (
            <LinkItem el={el} key={id} />
          ))}
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/skills">
          <Service />
        </Route>
        <Route path="/projects">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  )
}

export default Navbar;

const LinkItem = (props) => {
  const { title, to } = props.el
  return (
    <li className="m-3 lg:mx-5 flex-grow">
      <NavLink
        to={to}
        activeClassName="text-green-600"
        className="grow text-gray-200 text-medium hover:text-yellow-600"
      >
        {title}
      </NavLink>
    </li>
  )
}
