import React from 'react';
import Form from "../Form/Form";

import {GrInstagram} from "react-icons/gr";
import {FaWhatsapp} from "react-icons/fa";

const Contact = () => {
    return (
        <section className="contact">
            <div className="container">
                <Form/>
                <div className="contact__info">
                    <div className="contact__info-item">
                        <h2>Location</h2>
                        <p>Bishkek</p>
                    </div>
                    <div className="contact__info-item">
                        <h2>Phone</h2>
                        <a href='tel:+996705882111'>+996705882111</a>
                    </div>
                    <div className="contact__info-item">
                        <h2>Email</h2>
                        <a href="mailto:aliya.e99@mail.ru">aliya.e99@mail.ru</a>
                    </div>
                    <div className="contact__info-item">
                        <h2>Social Media</h2>
                        <div>
                            <a href="">
                                <GrInstagram/>
                            </a>
                            <a href="">
                                <FaWhatsapp/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;