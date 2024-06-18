import React from 'react'
import { Typography, Stack, Button } from '@mui/material'
import BodyPartImgs from '../assets/icons/body-part.png';
import Target from '../assets/icons/target.png';
import Equipment from '../assets/icons/equipment.png';

const Detail = ({exerciseDetail}) => {

  const {bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  // console.log(gifUrl)

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    }
  ]
  return (
    <Stack gap='60px' sx={{flexDirection: {lg:'row'}, p:'20px', alignItems:'center'}}>
      <img src={gifUrl} alt='giphy' loading='lazy' className='detail-Image'/>

      <Stack sx={{gap:{lg:'3px', xs:'20px'}}}>
        <Typography>
          {name}
        </Typography>
        <Typography>
          Exercise keep you strong.<br/>
          {name} is the best exercise and helps to achieve {target}
        </Typography>

        {
          extraDetail.map((item) => (
            <Stack key={item.name} direction='row' gap='24px' alignItems='center'>
              <Button sx={{background: '#fff2db', borderRadius:'50%', width: '100px',
              height:'100px'}}>
                <img src={item.icon} alt={bodypart} style={{width:'50px', height:'50px'}}/>
              </Button>

              <Typography textTransform='capitalize' variant='h5'>
                {item.name}
              </Typography>
            </Stack>
          ))
        }
      </Stack>
    </Stack>
  )
}

export default Detail