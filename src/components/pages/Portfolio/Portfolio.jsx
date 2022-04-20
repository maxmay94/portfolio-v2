import React from "react";
import image1 from "../../../images/portfolio/art-critic.png";
import image2 from "../../../images/portfolio/trouvaille.png";
import image3 from "../../../images/portfolio/mtg-deck-builder.png";
import image4 from "../../../images/portfolio/wordle-2.png";
import PortfolioItem from "./PortfolioItem";

const portfolioData = [
  {
    id: 1,
    image: image1,
    title: "art critic.",
    link: "https://art-critic.netlify.app/",
    description:
      "Art critic is a FLASK stack application with the front end built on React and made beautiful with Tailwind CSS. Users are given a random selection from the Metropolitan Museum of Art API and asked to give their thoughts on the piece.",
  },
  {
    id: 2,
    image: image2,
    title: "Trouvaille",
    link: "https://trouvaille-by-wanderlust.netlify.app/",
    description:
      "A MERN stack application, utilizing token based authentication, built on React. Using MapBox and GeoCoding a user can add a city, add places to that city and plan a day out on the town.",
  },
  {
    id: 3,
    image: image3,
    title: "MTG Deck Builder",
    link: "https://deck-maker-mtg.herokuapp.com/",
    description:
      "A MEN stack application utilizing an API and Google authentication to allow a user to create decks, view decks, and leave reviews of other users decks. Implements Google OAuth to ensure no other user can mess with your decks.",
  },
  {
    id: 4,
    image: image4,
    title: "Wordle 2",
    link: "https://maxmay94.github.io/wordle2/",
    description:
      "Based off of the hit game Wordle by Josh Wardle. A fully responsive web application optimized for mobile, with some new exciting new things including a feature to challenge your friends to solve the same word.",
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
  );
};

export default Portfolio;
