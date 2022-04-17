import React from 'react';
import BtnOrange from "../../BtnOrange/BtnOrange";
import videosPlayButton from './videosPlayBtn.svg'
const Videos = () => {
    return (
        <section className="videos">
            <div className="container">
                <div className="videos__youtube">
                    <iframe className="elementor-video" frameBorder="0" allowFullScreen="1"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            title="YouTube video player" width="640" height="360"
                            src="https://www.youtube.com/embed/XHOmBV4js_E?controls=0&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fdemo.phlox.pro&amp;widgetid=1"
                            id="widget2"></iframe>
                    <div className="videos__btn">
                        <img src="./videosPlayBtn.svg" alt=""/>
                    </div>
                </div>
                <div className="videos__text">
                    <h2>Videos</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type&nbsp;</p>
                    <BtnOrange text='see more'/>
                </div>
            </div>

        </section>
    );
};

export default Videos;