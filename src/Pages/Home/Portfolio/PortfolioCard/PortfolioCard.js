import React from 'react';
const PortfolioCard = ({image}) => {
    return (
        <div className="portfolio__card">
            <img src={image} alt="" className="portfolio__card-item"/>
        </div>
    );
};

export default PortfolioCard;