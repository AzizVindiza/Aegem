import React from 'react';
import ArtImg from './art.png'
import {motion} from "framer-motion";

const Art = () => {
    return (
        <motion.section className="art"
                        animate={{y:[300,0]}}
                        transition={{
                            ease: "easeOut",
                            duration: 4,

                        }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
        >

            <div className="container">
                <div className="art__text">
                    <h2>Phlox Studio Art and Magazine</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper '</p>
                    <p>velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus</p>
                    <p>mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non .</p>
                </div>
                <div className="art__img">
                    <img src={ArtImg} alt=""/>
                </div>

            </div>


        </motion.section>
    );
};

export default Art;