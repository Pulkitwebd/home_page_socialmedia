import React, { useState, useEffect } from "react";
import "./rightBox.css";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import img1 from "../../Asset/user-7.png";
import img2 from "../../Asset/user-8.png";
import img3 from "../../Asset/user-12.png";
import img4 from "../../Asset/user-4.png";
import img5 from "../../Asset/user-3.png";
import img6 from "../../Asset/user-2.png";
import g2 from "../../Asset/g-2.jpg";
import photoimg from "../../Asset/e-1.jpg";

const Rightbox = () => {
  return (
    <>
      <div className="rightBox">
        <div className="friendRequestCard">
          <div className="friendRequestTopDiv">
            <div>Friend Request</div>
            <div>
              <a href="#" className="SeeAllLink">
                See all
              </a>
            </div>
          </div>
          <FRMiddleDiv />
        </div>
        {/* confirm friend card */}
        <div className="confirmFriendCard">
          <div className="confirmFriendTopDiv">
            <div>Confirm Friend</div>
            <div>
              <a href="#" className="SeeAllLink">
                See all
              </a>
            </div>
          </div>
          <ConfirmFriendCard />
        </div>
        {/* suggest page card */}
        <div className="suggestedPagesCards">
          <div className="confirmFriendTopDiv">
            <div>Suggest Pages</div>
            <div>
              <a href="#" className="SeeAllLink">
                See all
              </a>
            </div>
          </div>
          <SCMiddleBody />
          <SCMiddleBody />
        </div>
        {/* events cards */}
        <div className="suggestedPagesCards">
          <div className="confirmFriendTopDiv">
            <div>Events</div>
            <div>
              <a href="#" className="SeeAllLink">
                See all
              </a>
            </div>
          </div>
          <EventsMiddleBody />
          <EventsMiddleBody />
          <EventsMiddleBody />
        </div>

        {/* photos cards */}

        <div className="suggestedPagesCards">
          <div className="confirmFriendTopDiv">
            <div>Photos</div>
            <div>
              <a href="#" className="SeeAllLink">
                See all
              </a>
            </div>
          </div>
          <Photosmultiplediv />
          <Photosmultiplediv />
          <Photosmultiplediv />
        </div>
      </div>
    </>
  );
};

export default Rightbox;

export const FRMiddleDiv = () => {
  const FRCardData = [
    {
      logoImg: img1,
      Name: "Anthony Daugloi",
      mutualFriend: 45,
    },
    {
      logoImg: img2,
      Name: "Mohannad Zitoun",
      mutualFriend: 18,
    },
    {
      logoImg: img3,
      Name: "Hurin Seary",
      mutualFriend: 28,
    },
  ];

  return (
    <>
      {FRCardData.map((data, index) => {
        return (
          <>
            <div className="FRMiddleDiv">
              <div className="FRMiddPersonDiv">
                <div className="FRMiddlePLogo">
                  <img src={data.logoImg} className="CFLogoImg"></img>
                </div>
                <div className="FRPersonDetail">
                  <div>{data.Name}</div>
                  <div>{data.mutualFriend} mutual friend</div>
                </div>
              </div>
              <div className="FRMiddButtDiv">
                <button className="FRConfirmbtn">Confirm</button>
                <button className="FRDeleteBtn">Delete</button>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export const ConfirmFriendCard = () => {
  const ConfirmFriendCardData = [
    {
      logoImg: img4,
      Name: "Armany Seary",
      mutualFriend: 45,
    },
    {
      logoImg: img5,
      Name: "Mohannad Zitoun",
      mutualFriend: 18,
    },
    {
      logoImg: img6,
      Name: "Hurin Seary",
      mutualFriend: 28,
    },
  ];
  return (
    <>
      {ConfirmFriendCardData.map((data, index) => {
        console.log(data);
        return (
          <>
            <div className="CFMiddPersonDiv" key={index}>
              <div className="FRMiddlePLogo">
                <img src={data.logoImg} className="CFLogoImg"></img>
              </div>
              <div className="FRPersonDetail">
                <div>{data.Name}</div>
                <div>{data.mutualFriend} Mutual Friend</div>
              </div>
              <div className="ConfirmFriendArrow">
                <ArrowForwardIosRoundedIcon style={{ height: "10px" }} />
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export const SCMiddleBody = () => {
  return (
    <>
      <div className="SCMiddleBody">
        <div className="SCMBimgbox">
          <img src={g2} className="SCMBimg" />
        </div>
        <div className="SCMBbtnbox">
          <button className="SCMBbtn">Like Page</button>
        </div>
      </div>
    </>
  );
};

export const EventsMiddleBody = () => {
  return (
    <>
      <div className="eventsMiddleBody">
        <div className="evnetsDate">
          <div>APR</div>
          <div>13</div>
        </div>
        <div className="eventsDescBox">
          <div>Meeting with clients</div>
          <div className="eventDescpart2">
            41 madison ave, floor 24 new work, NY 10010
          </div>
        </div>
      </div>
    </>
  );
};

export const Photosmultiplediv = () => {
  return (
    <>
      <div className="photos1div">
        <div className="photos1ImgBox">
          <img src={photoimg} className="photos1Img" />
        </div>
        <div className="photos2ImgBox">
          <img src={photoimg} className="photos2Img" />
        </div>
      </div>
    </>
  );
};
