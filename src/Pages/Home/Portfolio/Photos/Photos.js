import React,{useState,useContext} from 'react';
import {AnimatePresence,motion} from "framer-motion";
const Photos = ({data}) => {

const [limit,setLimit]= useState(6)
    return(
        <>
            <motion.div className="photos"
                        animate={{y:[100,0]}}
                        transition={{
                            ease: "easeOut",
                            duration: 4,

                        }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
            >
                {
                <AnimatePresence initial={false}  exitBeforeEnter>
                    {
                        data.filter((el,idx)=>idx<limit).map(el=>(
                            <motion.div
                                className="photos__img"
                                key={el.id}



                            >
                                <picture>
                                    <source srcSet={el.imgWebp} type='image/webp'/>
                                    <motion.img src={el.imgJpg} alt="photo" className="photos__img-item"
                                                animate={{
                                                    opacity:1}}
                                                transition={{

                                                    duration: 1,
                                                }}
                                                exit={{opacity: 0}}
                                                initial={{ opacity: 0 }}
                                    />
                                </picture>

                            </motion.div>
                        ))
                    }
                </AnimatePresence>
            }


            </motion.div>
            <button className="btnOrange" type="button" onClick={()=>{
                if (limit >=41 ){
                    setLimit(6)
                }else{
                    setLimit(limit+3)
                }

            }}>
                {limit>=41 ? "hide" : "more"}
            </button>

        </>
    )



};

export default Photos;
