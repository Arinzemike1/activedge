import React from 'react';
import { Link } from 'react-router-dom';

const ArtistsList = ({ artists }) => {

    const renderArtists = artists.map((artist) => {
        const { id, name, phone, website } = artist;
        return (
            <div key={id}>
                <Link to={`album/${id}`}>
                    <div className="store text-start">
                        <div className="title mt-3 mb-3">{name}</div>
                        <div className="red-color mb-3">{phone}</div>
                        <div className="mb-3">{website}</div>
                    </div>
                </Link>
            </div>
        );
    })

    return <>{renderArtists}</>
}

export default ArtistsList;
