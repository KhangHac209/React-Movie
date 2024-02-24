import React from "react";
import Carousel from "react-bootstrap/Carousel";
const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img src="https://react-film-clone.vercel.app/img/banner_1.png" alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://react-film-clone.vercel.app/img/banner_2.png" alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="poster" src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/11/Spider-Man-Movie-Posters.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5" alt="" />
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
