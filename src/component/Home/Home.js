import React from "react";
import Banner from "./Banner";
import ListMovie from "./ListMovie";
import Footer from "../Footer/Footer";
const Home = () => {
    const arrMovie = [
        {
            title: "Now Playing Movie",
            apiLink: `https://api.themoviedb.org/3/movie/now_playing?api_key=e9e9d8da18ae29fc430845952232787c&page=1`,
        },
        {
            title: "Up Coming Movie",
            apiLink: `https://api.themoviedb.org/3/movie/upcoming?api_key=e9e9d8da18ae29fc430845952232787c&page=1`,
        },
        {
            title: "Top Rated Movie",
            apiLink: `https://api.themoviedb.org/3/movie/top_rated?api_key=e9e9d8da18ae29fc430845952232787c&page=1`,
        },
    ];
    return (
        <div>
            <Banner></Banner>
            {arrMovie.map((item) => (
                <ListMovie id={item.id} key={item.id} title={item.title} apiLink={item.apiLink}></ListMovie>
            ))}
        </div>
    );
};

export default Home;
