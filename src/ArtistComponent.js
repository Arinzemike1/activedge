import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import './App.css';
import ArtistsList from './ArtistsList';
import Header from '../src/components/Header';
import Loader from './components/Loader';

const App = () => {
    const [artists, setArtists] = useState([]);
    const [loader, setLoader] = useState(false);

    const fetchArtists = () => {
        setLoader(true)
        Axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setArtists(response.data);
                setLoader(false);
            })
    }

    useEffect(() => {
        fetchArtists()
    }, [])

    return (
        <>
            <Header title="Artists" />
            {
                loader ? <Loader />
                :
                <div className="app-container">
                    <ArtistsList artists={artists} />
                </div>
            }
        </>
    )
}

export default App
