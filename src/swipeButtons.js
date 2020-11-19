import React from "react";

import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import "./swipeButtons.css";


const swipeButtons = () => {

return (
     <div className="swipeButtons">
      <ReplayIcon fontSize="large" />
      <CloseIcon fontSize="large" />
      <StarRateIcon fontSize="large" />
      <FavoriteBorderIcon fontSize="large" />
      <FlashOnIcon fontSize="large" />
    </div>
  );

};

export default swipeButtons;