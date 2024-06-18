import React from 'react'
import {Box, Stack, Typography} from '@mui/material'

const ExerciesesVideo = ({ExerciesesVideo, name}) =>{
    return(
        <>
          <Box sx={{marginTop:{lg:'200px', xs:'20px'}}} p='20px'>
                <Typography variant='h4' mb='33px'>
                    Watch <span style={{color:'#ff2625', textTransform:'capitalize'}}>{name}</span> exercise videos
                </Typography>

                <Stack justifyContent='flex-start' flexwrap='wrap' alignItems='center'
                    sx={{
                        flexDirection:{lg:'row'}, 
                        gap:{lg:'110px', xs:'0'}
                    }}>

                    {
                        ExerciesesVideo?.slice(0,3).map((item, index) =>{
                            <a key={index}
                            className='exercise-video'
                            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                            target='_black'
                            rel='noreferrer'>
                            </a>
                        })
                    }
                    
                </Stack>
          </Box>  
        </>
    )
}

export default ExerciesesVideo


