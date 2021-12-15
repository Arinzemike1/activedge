import React, { useState, useEffect } from 'react'
import ArtistsDetail from './ArtistsDetail';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import Header from '../src/components/Header';
import ArtistsTweets from './ArtistsTweets';

const ArtistDetailComponent = () => {
    const { albumId } = useParams();
    const [albums, setAlbums] = useState([]);
    const [tweets, setTweets] = useState([]);

    const fetchAlbums = () => {
        Axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
            .then((response) => {
                setAlbums(response.data);
            })
    }

    const fetchTweets = () => {
        Axios.get(`https://jsonplaceholder.typicode.com/posts/${albumId}/comments`)
            .then((response) => {
                setTweets(response.data);
            })
    }

    useEffect(() => {
        fetchAlbums();
        fetchTweets();
    }, [])

    return (
        <>
            <Header title="Tweets" />
            <div className="album-container">
                <ArtistsTweets tweets={tweets} />
            </div>

            <Header title="Album" />

            <div className="album-container">
                <ArtistsDetail albums={albums}/>
            </div>
        </>
    )
}

export default ArtistDetailComponent
