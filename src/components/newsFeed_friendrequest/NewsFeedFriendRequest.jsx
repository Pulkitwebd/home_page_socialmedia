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
import img2 from "../Asset/user-8.png";
import img4 from "../Asset/user-4.png";
import img5 from "../Asset/user-3.png";
import img6 from "../Asset/user-2.png";
import bgImg1 from "../Asset/s-1.jpg";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';

const NewsFeedFriendRequest = () => {
  return (
    <>
      <div className="newsFeedBox">
        {/* reels cards */}
        <div className="reelsCards">
          <div id="cards">
            <div id="personImg">
              <div id="logo"></div>
            </div>
            <div id="personName">Add Story</div>
          </div>
          <Cards />
        </div>

        <div className="createPost">
          <div className="createPostHeader">
            <div className="createPostLogo">
              <BorderColorOutlinedIcon />
            </div>
            <div style={{ color: "#ADB5BD" }}>Create Post</div>
          </div>

          <div className="createPostTextBox">
            <div></div>
          </div>
          <div className="createPostBottomLogoPart">
          <div className="iconswithnamecreatepost">
              <div className="bottomLogos">
              <VideocamOutlinedIcon style={{color : "red"}}/>
              </div>
              <div>Live Video</div>
            </div>
            <div className="iconswithnamecreatepost">
              <div className="bottomLogos">
              <AddPhotoAlternateOutlinedIcon style={{color : "green"}}/>
              </div>
              <div>Photo/Video</div>
            </div>
            <div className="iconswithnamecreatepost">
              <div className="bottomLogos">
              <CameraAltOutlinedIcon style={{color : "orange"}}/>
              </div>
              <div>Felling/Activity</div>
            </div>
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
          <FollowCards />
          <FollowCards />
          <FollowCards />
          <FollowCards />
        </div>

        <div className="PostBox">
          <PostBoxHeader />
          <TextPartBox />
          <PostImgBox />
          <PostBottomBox />
        </div>

        <div className="LoadingBox">
          <MoreHorizIcon className="loading" />
        </div>
      </div>
    </>
  );
};

export default NewsFeedFriendRequest;

// components

export const Cards = () => {
  const CardsData = [
    {
      logoImg: img2,
      Name: "Anthony Daugloi",
      bgImg: bgImg1,
    },
    {
      logoImg: img6,
      Name: "Mohannad Zitoun",
      bgImg: bgImg1,
    },
    {
      logoImg: img5,
      Name: "Hurin Seary",
      bgImg: bgImg1,
    },
    {
      logoImg: img4,
      Name: "Aliqua Macale",
      bgImg: bgImg1,
    },
  ];

  return (
    <>
      {CardsData.map((data, index) => {
        return (
          <>
            <div
              id="cards"
              style={{ backgroundImage: "url{" + data.bgImg + "}" }}
            >
              <div id="personImg">
                <div id="logo">
                  <img src={data.logoImg} />
                </div>
              </div>
              <div id="personName">{data.Name}</div>
            </div>
          </>
        );
      })}
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
            <img src={backgroundImg} className="LiveCardbackgroundImg"></img>
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
        <div style={{ color: "#adb5bd", fontSize: "12px" }}>id@gmail.com</div>
        <div className="FollowCardBtn">Follow</div>
      </div>
    </>
  );
};
