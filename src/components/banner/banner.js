import React, { useEffect, useState } from 'react'
import './banner.css';
import { API_key } from '../../constants/constants';
import axios from '../../constants/axios'; 
import { img_url } from '../../constants/constants';


const Banner = () => {

    const [movie,setmovie] = useState()
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_key}&language=en-US`).then((response)=>{
            setmovie(response.data.results[0]);
            // console.log(response.data)
        })
    },[])
  return (
    <div className='banner' style={{backgroundImage:`url(${movie ? img_url + movie.backdrop_path : "" })`}}>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title:""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
           <h3 className='description'> {movie ? movie.overview:""} </h3>
        </div>
        <div className="fade_bottom"></div>
    </div>
    
  )
}

export default Banner
