import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import './App.css';
import ArtistsList from './ArtistsList';
import Header from '../src/components/Header';

const App = () => {
    const [artists, setArtists] = useState([]);
    //   const [ albums, setAlbums ] = useState([]);

    const fetchArtists = () => {
        Axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setArtists(response.data);
            })
    }

    useEffect(() => {
        setTimeout(() => {
            fetchArtists()
        }, 5000);
    }, [])


    return (
        <>
            <Header title="Artists" />
            <div className="app-container">
                <ArtistsList artists={artists} />
            </div>
        </>
    )
}

export default App
