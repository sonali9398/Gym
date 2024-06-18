import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import {Box} from '@mui/material'
import Detail from '../components/Detail'
import ExercisesVideo from '../components/ExercisesVideo'
import SimilarExercises from '../components/SimilarExercises'
import {exerciseOptions, fetchData} from '../utils/fetchData'

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exercisesVideo, setExercisesVideo] = useState({});


  const {id} = useParams();

  useEffect(() =>{
    const fetchExercisesData = async () =>{
      const exercisesUrl = 'https://exercisesdb.p.rapidapi.com';

      const ytSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`${exercisesUrl}/exercises/exercise/${id}`, exerciseOptions)
      // console.log(exerciseDetailData)
      setExerciseDetail(exerciseDetailData);

      const exercisesVideos= await fetchData(`${ytSearchUrl}/search?q=${exerciseDetailName.name}`, exerciseOptions);
      setExercisesVideo(exercisesVideos)
    
    }
    

    fetchExercisesData();
  }, [])
  return (
    <>
      <Box>
        <Detail exerciseDetail = {exerciseDetail}/>
        <ExercisesVideo/>
        <SimilarExercises/>
      </Box>
    </>
  )
}

export default ExerciseDetails