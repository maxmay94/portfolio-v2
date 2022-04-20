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
      "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
  },
  {
    id: 2,
    image: image2,
    title: "Trouvaille",
    link: "https://trouvaille-by-wanderlust.netlify.app/",
    description:
      "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
  },
  {
    id: 3,
    image: image3,
    title: "MTG Deck Builder",
    link: "https://deck-maker-mtg.herokuapp.com/",
    description:
      "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
  },
  {
    id: 4,
    image: image4,
    title: "Wordle 2",
    link: "https://maxmay94.github.io/wordle2/",
    description:
      "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
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
