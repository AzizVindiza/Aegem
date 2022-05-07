import {createContext, useEffect, useState} from "react";
import {getData} from "../firebase/firebaseFunction";


export const CustomContext = createContext()

export const Context = (props) => {
    const [photos,setPhotos] = useState([])


    useEffect(() => {
         getData(setPhotos)
    }, [])


    const value = {
        photos,
        setPhotos
    }


    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}