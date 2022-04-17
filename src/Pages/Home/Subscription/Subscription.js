import React from 'react';
import SubscriptionImg from "./Subscription.jpg"
import SubscriptionLines from "./SubscriptionLines.png"

const Subscription = () => {
    return (
        <section className="subscription">
            <div className="container">
                <div className="subscription__img">
                    <img src={SubscriptionImg} alt="" className="subscription__img-item"/>
                </div>
                <div className="subscription__text">
                    <h2>
                        Studio Magazine
                    </h2>
                    <h3>
                        Magazine subscription
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh&nbsp;</p>
                    <form action="">
                        <label>
                            <input className='subscription__email' type="email" placeholder="Email Address"/>
                            <input className="subscription__btn" type="submit" value="Join"/>

                        </label>

                    </form>
                </div>
                <img  className="subscription__lines" src={SubscriptionLines} alt=""/>
            </div>
            
        </section>
    );
};

export default Subscription;