import React from 'react';
const PortfolioTabContent = ({image,tittle,content}) => {
    return (
        <div className="portfolio__tab-content">
            <h2>{tittle}</h2>
            <p>{content}</p>
            <img src={image} alt="" className="portfolio__card-item"/>
        </div>
    );
};

export default PortfolioTabContent;