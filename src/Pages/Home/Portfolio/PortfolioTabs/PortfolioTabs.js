import React,{useState} from 'react';
import PortfolioTabContent from "../PortfolioTabContent/PortfolioTabContent";

const PortfolioTabs = () => {
    const items = [
        { title: 'London', content: 'MAKS PRIVET' },
        { title: 'Paris', content: 'Paris is the capital of France.' },
        { title: 'Tokyo', content: 'Tokyo is the capital of Japan.' },
    ];
    const [ active, setActive ] = useState(null);
    const openTab = e => setActive(+e.target.dataset.index);
    return (
        <>
            <div className="portfolio__tab">
                {items.map((n, i) => (
                    <button
                        className={`portfolio__tab-link_ ${i === active ? 'active' : ''}`}
                        onClick={openTab}
                        data-index={i}
                    >{n.title}</button>
                ))}
            </div>
            {items[active] && <PortfolioTabContent {...items[active]} />}
        </>
    );
};

export default PortfolioTabs;