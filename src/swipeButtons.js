import React from "react";

import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

import "./SwipeButtons.css";

function SwipeButtons() {

return (
     <div className="swipeButtons">
      <IconButton>
         <ReplayIcon className="swipeButtons_repeat" fontSize="large" />
      </IconButton>

      <IconButton> 
        <CloseIcon className="swipeButtons_left" fontSize="large" />
      </IconButton>

       <IconButton>
      <StarRateIcon className="swipeButtons_star" fontSize="large" />
      </IconButton>

      <IconButton>
      <FavoriteIcon className="swipeButtons_right" fontSize="large" />
      </IconButton>

      <IconButton>
      <FlashOnIcon className="swipeButtons_lightning" fontSize="large" />
      </IconButton>
    </div>
  );

}

export default SwipeButtons;