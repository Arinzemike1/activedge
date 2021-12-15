import React from 'react'

const ArtistsTweets = ({ tweets }) => {

    const renderTweets = tweets.map((tweet) => {
        const { body } = tweet
        return (
            <div className="store">
                <p>{body}</p>
            </div>
        )
    })

    return <>{renderTweets}</>
}

export default ArtistsTweets
