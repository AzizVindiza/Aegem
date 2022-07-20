import React from 'react';

const Price = () => {
    return (
        <section className="price">
            <div className="container">
                <div className="row mt-5 mb-5">
                    <h2>Price</h2>
                </div>
                <div className="row d-flex justify-content-between gap-5">
                    <div className="col price__card d-flex flex-column justify-content-between align-items-center">
                        <h3>Съёмка минимум</h3>
                        <p>Лёгкая ретушь</p>
                        <h4>1900сом в час</h4>
                    </div>
                    <div className="col price__card d-flex flex-column justify-content-between align-items-center">
                        <h3>Съёмка стандарт</h3>
                        <p>Лёгкая ретушь + пластика</p>
                        <h4>2300сом в час</h4>
                    </div>
                    <div className="col price__card d-flex flex-column justify-content-between align-items-center">
                        <h3>Съёмка премиум</h3>
                        <p>Глубокая детальная ретушь</p>
                        <h4>3000 сом в час</h4>
                    </div>
                    <div className="col price__card d-flex flex-column justify-content-between align-items-center">
                        <h3>Мобильная съёмка</h3>
                        <p>для брендов и бутиков</p>
                        <h4>1300 сом в час</h4>
                    </div>
                </div>
                <div className="row mt-5">
                    <h3>Все исходники скидываю в этот же день</h3>
                    <p>10 обработанных фото в течение 7 рабочих дней ( фотографии можете выбрать сами) </p>
                </div>

            </div>

        </section>
    );
};

export default Price;