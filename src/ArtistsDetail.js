import React from 'react';

const ArtistsDetail = ({ albums }) => {
    
    const renderArtistsDetails = albums.map((album) => {

        const { id, url, title } = album;
        return (
            <div key={id}>
            <div className="store mt-5">
                <img src={url} className="" alt={title} height="220" width="220" />
                <div className="content-2 text-start mt-2">
                    <div className="title">{title}</div>
                </div>
            </div>
            </div>
        )
        
    })
    return <>{renderArtistsDetails}</>
}

export default ArtistsDetail
