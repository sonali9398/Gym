import React from 'react'
import { Typography, Stack, Button } from '@mui/material'
import BodyPartImgs from '../assets/icons/body-part.png';
import Target from '../assets/icons/target.png';
import Equipment from '../assets/icons/equipment.png';

const Detail = ({exerciseDetail}) => {

  const {bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  console.log(gifUrl)
  return (
    <Stack gap='60px' sx={{flexDirection: {lg:'row'}, p:'20px', alignItems:'center'}}>
      <img src={gifUrl} alt='giphy' loading='lazy' className='detail-Image'/>

      <Stack sx={{gap:{lg:'3px', xs:'20px'}}}>
        <Typography>
          {name}
        </Typography>
        <Typography>
          {exerciseDetail}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default Detail