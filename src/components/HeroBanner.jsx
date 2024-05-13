import React from 'react'
import {Box, Button, Stack, Typography} from '@mui/material'
import HeroImg from '../assets/imgs/banner.png'
const HeroBanner = () => {
  return (
    <Box sx={{mt:{lg:'212px', xs:'70px'}, ml:{sm:'50px'}}} position='relative' p='20px'>

      <Typography  fontWeight='600' fontSize='26px'>
        Fitness Club
      </Typography>
      <Typography fontWeight={700} sx={{fontSize:{lg:'44px', xs:'40px'}}}>
        Sweat, Smile <br/> Repeat
      </Typography>
      <Typography fontSize='22px' lineHeight='35px' mb={3}>
        CheckOut the most effective excercies
      </Typography>

      <Button variant='contained' color='error' href='#exercies'>
        Explore Excercies
      </Button>

      <img src={HeroImg} alt='hero'/>
    </Box>
  )
}

export default HeroBanner