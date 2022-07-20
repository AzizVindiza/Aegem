import React from 'react';
import FirstScreen from "./FirstScreen/FirstScreen";
import Shots from "./Shots/Shots";
import Videos from "./Videos/Videos";
import Portfolio from "./Portfolio/Portfolio";
import Subscription from "./Subscription/Subscription";
import {data} from "../../data";
import Price from "./Price/Price";

const Home = () => {
    return (
        <>
            <FirstScreen/>
            <Shots/>
            <Videos/>
            <Portfolio data={data}/>
            <Price/>
            <Subscription/>
        </>
    );
};

export default Home;