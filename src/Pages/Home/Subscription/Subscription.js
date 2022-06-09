import React from 'react';
import SubscriptionImg from "./Subscription.jpg"
import SubscriptionLines from "./SubscriptionLines.png"
import {motion} from "framer-motion";

const Subscription = () => {
    return (
        <section className="subscription">
            <div className="container">
                <motion.div className="subscription__img"    animate={{y:[100,0]}}
                            transition={{
                                ease: "easeOut",
                                duration: 4,

                            }}
                            initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true ,amount :0.5}}>
                    <img src={SubscriptionImg} alt="" className="subscription__img-item"/>
                </motion.div>
                <motion.div className="subscription__text"    animate={{y:[100,0]}}
                            transition={{
                                ease: "easeOut",
                                duration: 4,

                            }}
                            initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true ,amount :1}}>
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
                </motion.div>
                <motion.img  className="subscription__lines" src={SubscriptionLines} alt=""    animate={{y:[100,0]}}
                            transition={{
                                ease: "easeOut",
                                duration: 4,

                            }}
                            initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true ,amount :0.8}}/>
            </div>
            
        </section>
    );
};

export default Subscription;