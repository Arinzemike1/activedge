import React, { useState, useEffect } from 'react'
import ArtistsDetail from './ArtistsDetail';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import Header from '../src/components/Header';
import ArtistsTweets from './ArtistsTweets';
import Loader from '../src/components/Loader';

const ArtistDetailComponent = () => {
    const { albumId } = useParams();
    const [albums, setAlbums] = useState([]);
    const [tweets, setTweets] = useState([]);
    const [loader, setLoader] = useState(false);

    const fetchAlbums = () => {
        Axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
            .then((response) => {
                setAlbums(response.data);
            })
    }

    const fetchTweets = () => {
        setLoader(true)
        Axios.get(`https://jsonplaceholder.typicode.com/posts/${albumId}/comments`)
            .then((response) => {
                setTweets(response.data);
                setLoader(false)
            })
    }

    useEffect(() => {
        fetchAlbums();
        fetchTweets();
        //eslint-disable-next-line
    }, [])

    return (
        <>
            <Header title="Tweets" />
            {
                loader ? <Loader />
                    :
                    <>
                        <div className="album-container">
                            <ArtistsTweets tweets={tweets} />
                        </div>

                        <Header title="Album" />

                        <div className="album-container">
                            <ArtistsDetail albums={albums} />
                        </div>
                    </>
            }
        </>
    )
}

export default ArtistDetailComponent
