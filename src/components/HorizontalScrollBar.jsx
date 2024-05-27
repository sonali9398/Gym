import React, {useContext} from 'react'
import {Box, Typography} from '@mui/material';
import BodyParts from './BodyParts';
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu'
import RightArrowIcon from '../assets/icons/right-arrow (1).png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollBar = ({data, bodyPart, setBodyPart}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) =>(
            <Box  direction='row' sx={{gap:{lg:'110px', xs:'50px'}}} flexWrap='wrap' justifyContent='center'
                key={item.id || item}
                itemId = {item.id || item}
                title = {item.id || item}
                m='0 40px'>
                  <BodyParts item ={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
            </Box>
        ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollBar