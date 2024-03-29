import React from "react"
import image1 from "../../../images/portfolio/art-critic.png"
import image2 from "../../../images/portfolio/trouvaille.png"
import image3 from "../../../images/portfolio/mtg-deck-builder.png"
import image4 from "../../../images/portfolio/wordle-2.png"
import image5 from "../../../images/portfolio/spelling-bee.png"
import image6 from "../../../images/portfolio/jeopardee.png"
import image7 from "../../../images/portfolio/dr_may.png"
import image8 from "../../../images/portfolio/lens.png"
import image9 from "../../../images/portfolio/spincycle.png"

import PortfolioItem from "./PortfolioItem"

const portfolioData = [
  {
    id: 1,
    image: image9,
    title: "SpinCycle",
    link: "https://spin-cycle-test-page.netlify.app/",
    description:
      "Home page for a Boston based startup. Made with React and Tailwind CSS.",
    github: "https://github.com/SpinCycleDev/spincycle-home-page"
  },
  {
    id: 1,
    image: image8,
    title: "My Dr. May - LENS",
    link: "https://mydrmay-lens.netlify.app/",
    description:
      "A website for a LENS practitioner made with React and React Three Fiber.",
    github: "https://github.com/maxmay94/dr_may_lens"
  },
  {
    id: 1,
    image: image7,
    title: "My Dr. May",
    link: "https://mydrmay.netlify.app/",
    description:
      "A modern and responsive single-page website made for a chiropractor using React.",
    github: "https://github.com/maxmay94/dr_may_2"
  },
  {
    id: 2,
    image: image5,
    title: "spelling bee",
    link: "https://spellingb.netlify.app/",
    description:
    "A front-end React App made to replicate the game Spelling-Bee by the New York Times.",
    github: "https://github.com/maxmay94/spelling-bee"
  },
  {
    id: 7,
    image: image4,
    title: "Wordle2",
    link: "https://maxmay94.github.io/wordle2/",
    description:
      "My take on Josh Wardle’s  hit game. This fully responsive web application is optimized for mobile and has some exciting new features—including the ability to challenge your friends to solve the same word puzzle.",
    github: "https://github.com/maxmay94/wordle2"
  },
  {
    id: 3,
    image: image6,
    title: "Jeopardee!",
    link: "https://jeopardee.netlify.app",
    description:
      "A MERN-stack react app made for Staff training at Chickadee restaurant in Boston.",
    github: "https://github.com/maxmay94/jeopardee-front-end",
    github2: "https://github.com/maxmay94/jeopardee-back-end"
  },
  {
    id: 4,
    image: image1,
    title: "art critic.",
    link: "https://art-critic.netlify.app/",
    description:
      "A FLASK stack application with the front end built on React and beautified with Tailwind CSS. Pulls a random selection from the Metropolitan Museum of Art API and asks users to share their thoughts on the piece.",
    github: "https://github.com/maxmay94/art-critic-frontend",
    github2: "https://github.com/maxmay94/art-critic-api" 
  },
  {
    id: 5,
    image: image2,
    title: "Trouvaille",
    link: "https://trouvaille-by-wanderlust.netlify.app/",
    description:
      "A MERN stack application built on React with token-based authentication, MapBox, and GeoCoding. Users can input a city, add sites to that city, and plan out a day on the town.",
    github: "https://github.com/giamazonas/trouvaille-front-end",
    github2: "https://github.com/giamazonas/trouvaille-back-end"
  },
  {
    id: 6,
    image: image3,
    title: "Magic: The Gathering Deck Builder",
    link: "https://deck-maker-mtg.herokuapp.com/",
    description:
      "A MEN stack application utilizing an API and Google authentication to allow a user to create decks, view decks, and leave reviews of other users’ decks. Implements Google OAuth to ensure no other user can mess with your decks.",
    github: "https://github.com/maxmay94/mtg-deck-builder"
  },
];

const Portfolio = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {portfolioData.map((portfolio, id) => (
          <PortfolioItem portfolio={portfolio} key={id} />
        ))}
      </div>
    </section>
  )
}

export default Portfolio
