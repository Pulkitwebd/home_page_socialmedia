import React from "react";
import personImg from "../Asset/t-10.jpg";
import user7 from "../Asset/user-7.png";
import "./thisFolderCss.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import video from "../Asset/v-2.ogg";
import backgroundImg from "../Asset/u-bg.jpg";


const NewsFeedFriendRequest = () => {
  return (
    <>
      <div className="NewsFeedFriendRequestBox">
        <div className="newsFeedBox">
          <div className="reelsCards">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>

          <div className="createPost">
            <div className="createPostHeader">
              <div className="createPostLogo"></div>
              <div>Create Post</div>
            </div>

            <div className="createPostTextBox">
              <div></div>
            </div>

            <div className="createPostBottomLogoPart">
              <BottomLogos />
              <BottomLogos />
              <BottomLogos />
            </div>
          </div>

          <div className="PostBox">
            <PostBoxHeader />
            <TextPartBox />
            <PostImgBox />
            <PostBottomBox />
          </div>

          <div className="postBox2">
            <PostBoxHeader />
            <TextPartBox />
            <PostBottomBox />
          </div>

          <div className="postBox3">
            <PostBoxHeader />
            <TextPartBox />
            <PostVideoBox />
            <PostBottomBox />
          </div>
          <div className="LiveCardsBox">
          <LiveCards />
          <LiveCards />
          <LiveCards />
          </div>

          <div className="postBox3">
            <PostBoxHeader />
            <PostVideoBox />
            <TextPartBox />
            <PostBottomBox />
          </div>

          <div className="followCardsBox">
           <FollowCards/>
           <FollowCards/>
           <FollowCards/>
           <FollowCards/>
          </div>

          <div className="PostBox">
            <PostBoxHeader />
            <TextPartBox />
            <PostImgBox />
            <PostBottomBox />
          </div>

          <div className="LoadingBox">
          <MoreHorizIcon className="loading"/>
          </div>



          
        </div>
        <div className="friendRequestBox"></div>
      </div>
    </>
  );
};

export default NewsFeedFriendRequest;








// components

export const Cards = () => {
  return (
    <>
      <div id="cards">
        <div id="personImg">
          <div id="logo"></div>
        </div>
        <div id="personName">Name</div>
      </div>
    </>
  );
};

export const BottomLogos = () => {
  return (
    <>
      <div className="iconswithnamecreatepost">
        <div className="bottomLogos"></div>
        <div>Name</div>
      </div>
    </>
  );
};

export const PostBottomBox = () => {
  return (
    <>
      <div className="postBottomBox">
        <div className="postBottomIcon">
          <div>
            <ThumbUpOutlinedIcon className="thumbIcon" />
            <FavoriteBorderIcon className="heartIcon" />
          </div>
          <div className="liketext">22k Like</div>
          <div className="chatIcon">
            <ChatBubbleOutlineOutlinedIcon className="commentIcon" />
          </div>
          <div className="commentText">22 comment</div>
        </div>
        <div className="shareIcon">
          <ShareOutlinedIcon />
          <div className="sharetext">Share</div>
        </div>
      </div>
    </>
  );
};

export const TextPartBox = () => {
  return (
    <>
      <div className="textPartBox">
        <div className="textpart">
          lorem ipsum is simply dummy text of the printing and typesetting
          industry. standard dummy text ever since the 1500s
          <button type="" className="postBtn">
            See More...
          </button>
        </div>
      </div>
    </>
  );
};

export const PostBoxHeader = () => {
  return (
    <>
      <div className="postBoxHeader">
        <div className="postBoxHeaderLogoAndName">
          <div className="postBoxHeaderLogo">
            <img src={user7} className="user7img"></img>
          </div>
          <div className="nameAndTime">
            <div className="postPersonName">Pulkit</div>
            <div style={{ color: "#adb5bd" }}>22 min ago</div>
          </div>
        </div>
        <div className="postBoxHeaderThreeDotsBox">
          <div className="postBoxHeaderThreeDots">
            <MoreHorizIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export const PostImgBox = () => {
  return (
    <>
      <div className="postImgBox">
        <img src={personImg} className="postImg"></img>
      </div>
    </>
  );
};

export const PostVideoBox = () => {
  return (
    <>
      <div className="postVideoPartBox">
        <div className="postVideoPart">
          <video autoplay muted controls className="postactualVideoPart">
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export const LiveCards = () => {
  return (
    <>
      
        <div className="LiveCards">
          <div className="LiveCardTop">
            <div className="LiveCardbackground">
              <img
                src={backgroundImg}
                className="LiveCardbackgroundImg"
              ></img>
            </div>
          </div>
          <div className="LiveCardBottom">
            <div>Name</div>
            <div className="LiveCardsEmail">support@gmail.com</div>
            <div>
              <button className="LiveCardBtn">LIVE</button>
            </div>
          </div>
        </div>
    </>
  );
};

export const FollowCards = () => {
  return (
    <>
      
           <div className="followCard">
             <div className="followCardLogo">
               <img src={user7}></img>
             </div>
             <div className="followCardName">Name</div>
             <div style={{color : "#adb5bd",fontSize : "12px"}}>id@gmail.com</div>
             <div className="FollowCardBtn">Follow</div>
           </div>
          
    </>
  )
}
