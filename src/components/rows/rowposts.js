import React, { useEffect, useState } from 'react'
import './rowposts.css'
import axios from '../../constants/axios'
import { API_key,img_url } from '../../constants/constants'
import YouTube from 'react-youtube'

const Rowposts = (props) => {
    const [movies,setmovie] = useState([])
    const [urlid,setid] = useState("")
    useEffect(()=>{
        axios.get(`${props.url}`).then((response)=>
        setmovie(response.data.results))
        
    },[])

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    const handleclick = (id)=>{
      axios.get(`movie/${id}/videos?api_key=${API_key}`).then(response=>{
        setid(response.data.results[0])
      })

    }
  return (
    <div className='row'>
        <h2>{props.genre}</h2>
        <div className="posters">
            {movies.map((obj,i)=>
                 <img onClick={()=>handleclick(obj.id)} className={props.isSmall ? "smallposter" : "poster"} src={`${img_url+obj.backdrop_path}`}></img>
            )}
      
       
        </div>
        { urlid && < YouTube opts={opts} videoId={urlid.key} />} 
    </div>
  )
}

export default Rowposts
