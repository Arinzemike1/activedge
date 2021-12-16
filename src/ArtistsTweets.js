import React from 'react'

const ArtistsTweets = ({ tweets }) => {

    const renderTweets = tweets.map((tweet) => {
        const { id, body } = tweet
        return (
            <div className="store" key={id}>
                <p>{body}</p>
            </div>
        )
    })

    return <>{renderTweets}</>
}

export default ArtistsTweets
