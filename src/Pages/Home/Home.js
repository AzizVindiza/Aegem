import React from 'react';
import FirstScreen from "./FirstScreen/FirstScreen";
import Shots from "./Shots/Shots";
import Videos from "./Videos/Videos";
import Portfolio from "./Portfolio/Portfolio";
import Subscription from "./Subscription/Subscription";

const Home = () => {
    return (
        <>
            <FirstScreen/>
            <Shots/>
            <Videos/>
            <Portfolio/>
            <Subscription/>
        </>
    );
};

export default Home;