import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';

function Card(props) {
  return (
  
        <div className='card'>
            <h1> {props.title} </h1>
            <img src={props.photo} alt="" />
            <p> {props.content} </p>
             <a href={props.source}> Source<GitHubIcon /></a>
        </div>

  )
}

export default Card