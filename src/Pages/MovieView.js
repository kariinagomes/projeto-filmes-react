import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Hero from "../Components/Header/Hero";
import MovieDetail from "../Components/MovieDetail";
import { movies } from '../mock';

const MovieView = ({ match }) => {
    //console.log(match);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const filtered = movies.filter(
            item => item.id === parseInt(match.params.id)
        )[0];
        setMovie(filtered);
    }, [match.params.id]);

    return (
        <>
            <Header />
            <Hero />
            <MovieDetail movie={movie} />
        </>
    );
};


export default MovieView;
