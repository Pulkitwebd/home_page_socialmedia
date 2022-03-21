import React from "react";
import "./LeftBox.css";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import MilitaryTechRoundedIcon from "@mui/icons-material/MilitaryTechRounded";
import LanguageIcon from "@mui/icons-material/Language";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const Leftbox = () => {
  return (
    <>
      <div className="leftBoxes">
        <div className="newsFeed">
          <div className="newsFeed_topDiv">
            <div style={{ marginLeft: "20px", color: "#ADB5BD" }}>
              News Feeds
            </div>
          </div>
          <div className="icon_withName">
            <div>
              <DesktopWindowsOutlinedIcon
                className="icon_withNameLogo"
                style={{ backgroundColor: " #0575e6" }}
              />
            </div>
            <div id="icon_name">Newsfeed</div>
          </div>
          <div className="icon_withName">
            <div id="icons">
              <MilitaryTechRoundedIcon
              className="icon_withNameLogo"
                style={{ backgroundColor: " #e44d26" }}
              />
            </div>
            <div id="icon_name">Badges</div>
          </div>
          <div className="icon_withName">
            <div id="icons">
              <LanguageIcon style={{ backgroundColor: "#f2c94c" }}
              className="icon_withNameLogo" />
            </div>
            <div id="icon_name">Explore Stories</div>
          </div>
          <div className="icon_withName">
            <div id="icons">
              <ElectricBoltIcon 
                className="icon_withNameLogo"
                style={{ backgroundColor: "#ee0979" }}
              />
            </div>
            <div id="icon_name">Popular Gropus</div>
          </div>
          <div className="icon_withName">
            <div id="icons">
              <PersonOutlineIcon 
                className="icon_withNameLogo"
                style={{ backgroundColor: "#1E74FD" }}
              />
            </div>
            <div id="icon_name">Author Profile</div>
          </div>
        </div>

        <div className="newsFeed">
          <div className="newsFeed_topDiv">
            <div style={{ marginLeft: "20px", color: "#ADB5BD" }}>
            More Pages
            </div>
          </div>
          <IconandName />
          <IconandName />
          <IconandName />
          <IconandName />
        </div>

        <div className="newsFeed">
          <div className="newsFeed_topDiv">
            <div style={{ marginLeft: "20px", color: "#ADB5BD" }}>
             account
            </div>
          </div>
          <IconandName />
          <IconandName />
          <IconandName />
          <IconandName />
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
            <div id="icons">
              <PersonOutlineIcon 
                className="icon_withNameLogo"
                style={{ backgroundColor: " #1E74FD" }}
              />
            </div>
            <div id="icon_name">Name</div>
          </div>
    </>
  );
};
