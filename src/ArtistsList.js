import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ArtistsList = ({ artists }) => {

    useEffect(() => {
        console.log("artists: ", artists);
    }, [])

    const renderArtists = artists.map((artist) => {
        const { id, name, phone, website } = artist;
        return (
            <>
                <Link to={`album/${id}`}>
                    <div className="store text-start">
                        <div className="title mt-3 mb-3">{name}</div>
                        <div className="red-color mb-3">{phone}</div>
                    </div>
                </Link>
            </>
        );
    })

    return <>{renderArtists}</>
}

export default ArtistsList;
