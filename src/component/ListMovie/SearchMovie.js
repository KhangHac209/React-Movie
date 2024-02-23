import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../useFetch";
import { Col, Container, Row } from "react-bootstrap";
import CardMovie from "../CardMovie/CardMovie";

const SearchMovie = () => {
    const { slug: keySearch } = useParams();
    console.log(keySearch);
    const searchMovie = useFetch(`https://api.themoviedb.org/3/search/movie?api_key=e9e9d8da18ae29fc430845952232787c&query=${keySearch}&page=1`);

    return (
        <div>
            <Container>
                <div className="headline">
                    <h3>ONLINE SREAMING</h3>
                    <h2>Search key: {keySearch}</h2>
                </div>
                <Row>
                    {searchMovie.results &&
                        searchMovie.results.map((item) => (
                            <Col lg={3}>
                                <CardMovie id={item.id} key={item.id} poster_path={item.poster_path} title={item.title} release_date={item.release_date} vote_average={item.vote_average}></CardMovie>
                            </Col>
                        ))}
                </Row>
            </Container>
        </div>
    );
};

export default SearchMovie;
