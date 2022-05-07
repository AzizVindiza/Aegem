import React from 'react';
import BtnOrange from "../../BtnOrange/BtnOrange";
import {data} from "../../../data";
import Photos from "./Photos/Photos";
const Portfolio = (props) => {
    return (
        <section className="portfolio">
            <div className="container">
                <h2>
                    Portfolio
                </h2>
                    <Photos data={data}/>
                <BtnOrange text="browse all images"/>
            </div>

        </section>
    );
};

export default Portfolio;