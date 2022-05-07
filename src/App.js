import React, {Suspense, useContext} from "react";
import {Routes, Route} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import ContactUs from "./Pages/ContactUs/ContactUs";
import AboutUs from "./Pages/AboutUs/AboutUs";
import PortfolioSection from "./Pages/PortfolioSection/PortfolioSection";
import VideosSection from "./Pages/VideosSection/VideosSection";
import BookNow from "./Pages/BookNow/BookNow";


function App() {

  return (
      <Suspense fallback={'Loading...'}>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home/>}/>
            <Route path='about-us' element={<AboutUs/>}/>
            <Route path='contact-us' element={<ContactUs/>}/>
            <Route path='portfolio' element={<PortfolioSection/>}/>
            <Route path='videos' element={<VideosSection/>}/>
            <Route path='book-now' element={<BookNow/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Route>
        </Routes>
      </Suspense>
  );
}

export default App;
