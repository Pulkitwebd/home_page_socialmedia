import React from "react";
import Leftbox from "../LeftBox/Leftbox";
import NewsFeedFriendRequest from "../newsFeed_friendrequest/NewsFeedFriendRequest";
import "./combine.css";
import Grid from "@mui/material/Grid";
import Rightbox from "../rightBox/Rightbox";

const Combine = () => {
  return (
    <>
      <Grid container style={{backgroundColor : "#F5f5f5"}}>
      <Grid item lg={3} md={3}  spacing={3} >
      <Leftbox />
      </Grid>
        <Grid item lg={6} md={6} >
          <NewsFeedFriendRequest />
        </Grid>
        <Grid item lg={3} md={3}>
          <Rightbox />
        </Grid>
      </Grid>
    </>
  );
};

export default Combine;
