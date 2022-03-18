import React from 'react'
import Leftbox from '../LeftBox/Leftbox';
import NewsFeedFriendRequest from '../newsFeed_friendrequest/NewsFeedFriendRequest';
import "./combine.css"

const Combine = () => {
  return (
    <>
      <div className='Combine'>
        <Leftbox/>
        <NewsFeedFriendRequest/>
        </div>
    </>
  )
}

export default Combine