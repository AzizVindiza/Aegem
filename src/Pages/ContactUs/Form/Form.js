import React from 'react';
import {useForm} from "react-hook-form";

const Form = () => {
    const {
        register,
        reset,
        handleSubmit
    } = useForm()

    const submitForm = (data) => {
        console.log(data)
    }

    return (

        <form action="" onSubmit={handleSubmit(submitForm)} className="form">
            <label>
                <input {...register("name")} type="text" placeholder="Your name" required/>
            </label>
            <label>
                <input {...register("email")} type="email" placeholder="Email" required/>
            </label>
            <label>
                <input {...register("reason")} type="text" placeholder="Reason For Contact" required/>
            </label>
            <label>
                    <textarea {...register("message")} name="" id="" cols="40" rows="10" placeholder="Message">

                </textarea>
            </label>
            <div className="form__btn">
                <button className='btnOrange' type="submit">Send Message</button>
            </div>
        </form>


    );
};

export default Form;