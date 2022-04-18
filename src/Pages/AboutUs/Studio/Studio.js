import React from 'react';
import studioImg from './studio.jpg'
import studioLines from './studioLines.png'
import studioLines2 from './studioLines2.png'
import member from './member.jpg'
import member1 from './member1.jpg'
import member2 from './member2.jpg'
import member3 from './member3.jpg'
const Studio = () => {
    return (
        <section className="studio">
            <div className="container">
                <div className="studio__top">
                    <div className="studio__text">
                        <h2>
                            Aegem Photography Studio
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper '
                        </p>
                        <p>
                            velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus
                        </p>
                        <p>
                            mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non .
                        </p>
                    </div>
                    <div className="studio__img">
                        <img src={studioImg} alt=""/>
                    </div>
                </div>
                <div className="studio__bottom">
                    <h2>Aegem team</h2>
                    <div className="studio__members">
                        <div className="studio__members-card">
                            <img src={member} alt=""/>
                            <div className="studio__members-text">
                                <h4>Randy Siler</h4>
                                <h5>Photographer</h5>
                            </div>
                        </div>
                        <div className="studio__members-card">
                            <img src={member1} alt=""/>
                            <div className="studio__members-text">
                                <h4>Jeanine Lanning</h4>
                                <h5>Photographer</h5>
                            </div>
                        </div>
                        <div className="studio__members-card">
                            <img src={member2} alt=""/>
                            <div className="studio__members-text">
                                <h4>Geraldo Atkins</h4>
                                <h5>Graphic Designer</h5>
                            </div>
                        </div>
                        <div className="studio__members-card">
                            <img src={member3} alt=""/>
                            <div className="studio__members-text">
                                <h4>Linda Moore</h4>
                                <h5>Graphic Designer</h5>
                            </div>
                        </div>


                    </div>
                </div>
                <img src={studioLines} className="studio__lines" alt=""/>
                <img src={studioLines2} className="studio__lines2" alt=""/>
            </div>
        </section>
    );
};

export default Studio;