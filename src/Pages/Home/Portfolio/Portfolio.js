import React from 'react';
import BtnOrange from "../../BtnOrange/BtnOrange";
import PortfolioTabContent from "./PortfolioTabContent/PortfolioTabContent";
import PortfolioCardItem from './portfolioCardItem.jpg'
import PortfolioCardItem1 from './portfolioCardItem1.jpg'
import PortfolioTabs from "./PortfolioTabs/PortfolioTabs";
const Portfolio = () => {
    return (
        <section className="portfolio">
            <div className="container">
                <h2>
                    Portfolio
                </h2>
                {/*<div className="portfolio__tabs">*/}
                {/*    <PortfolioTabs/>*/}
                {/*</div>*/}
                <div className="portfolio__cards">
                    <PortfolioTabContent image={PortfolioCardItem}/>
                    <PortfolioTabContent image={PortfolioCardItem1}/>
                </div>
                <BtnOrange text="browse all images"/>
            </div>

        </section>
    );
};

export default Portfolio;