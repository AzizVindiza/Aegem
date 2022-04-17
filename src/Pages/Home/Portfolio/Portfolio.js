import React from 'react';
import BtnOrange from "../../BtnOrange/BtnOrange";
import PortfolioCard from "./PortfolioCard/PortfolioCard";
import PortfolioCardItem from './portfolioCardItem.jpg'
import PortfolioCardItem1 from './portfolioCardItem1.jpg'
const Portfolio = () => {
    return (
        <section className="portfolio">
            <div className="container">
                <h2>
                    Portfolio
                </h2>
                <ul className="portfolio__tabs">
                    <li className="portfolio__tab">All</li>
                    <li className="portfolio__tab">Advertising</li>
                    <li className="portfolio__tab">Fashion</li>
                    <li className="portfolio__tab">Freestyle</li>
                    <li className="portfolio__tab">Kids</li>
                    <li className="portfolio__tab">Nature</li>
                    <li className="portfolio__tab">Sports</li>
                    <li className="portfolio__tab">Wedding</li>
                </ul>
                <div className="portfolio__cards">
                    <PortfolioCard image={PortfolioCardItem}/>
                    <PortfolioCard image={PortfolioCardItem1}/>
                </div>
                <BtnOrange text="browse all images"/>
            </div>

        </section>
    );
};

export default Portfolio;