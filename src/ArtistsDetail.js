import React from 'react';

const ArtistsDetail = ({ albums }) => {
    
    const renderArtistsDetails = albums.map((album) => {

        const { url, title } = album;
        return (
            <>
            <div className="store mt-5">
                <img src={url} className="" alt={title} height="220" width="220" />
                <div className="content-2 text-start mt-2">
                    <div className="title">{title}</div>
                </div>
            </div>
            </>
        )
        
    })
    return <>{renderArtistsDetails}</>
}

export default ArtistsDetail






// import React, { useEffect } from 'react';

// const ArtistsDetail = ({ albums, tweets }) => {
//     const matt = [{albums, tweets}];

//     useEffect(() => {
//         console.log("matt: ", matt)
//     }, [])


//     const renderArtistsDetails = matt.map((item) => {
        
//         // const { url, title } = album;
//         // const { body } = tweet;
//         item.albums.map((pair) => {
//             console.log("pair: ", pair.url)
//             return (
//                 <>
//                 <div className="store mt-5">
//                     <img src={pair.ubrl} className="" alt="" height="220" width="220" />
//                     <p>{pair.title}</p>
//                     {/* <div className="content-2 text-start mt-2">
//                         <div className="title">{title}</div>
//                         <div className="title">{body}</div>
//                     </div> */}
//                 </div>
//                 </>
//             )
//         })
        
//     })
//     return <>{renderArtistsDetails}</>
// }

// export default ArtistsDetail

