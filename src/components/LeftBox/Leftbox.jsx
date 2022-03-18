import React from "react";
import "./LeftBox.css";

const Leftbox = () => {
  return (
    <>
      <div className="leftBoxes">
        <div className="newsFeed">
          <div className="newsFeed_topDiv">News Feeds</div>
          <IconandName/>
          <IconandName/>
          <IconandName/>
          <IconandName/>
        </div>

        <div className="newsFeed">
          <div className="newsFeed_topDiv">News Feeds</div>
          <IconandName/>
          <IconandName/>
          <IconandName/>
          <IconandName/>
        </div>
        
        <div className="newsFeed">
          <div className="newsFeed_topDiv">News Feeds</div>
          <IconandName/>
          <IconandName/>
          <IconandName/>
          <IconandName/>
        </div>
        
      </div>
    </>
  );
};

export default Leftbox;

export const IconandName = () => {
  return (
    <>
      <div className="icon_withName">
        <div id="icons"></div>
        <div id="icon_name"> Name</div>
      </div>
    </>
  );
};
