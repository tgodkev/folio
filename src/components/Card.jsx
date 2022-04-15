import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import CloudIcon from '@mui/icons-material/Cloud';
import Button from '@mui/material/Button';

function Card(props) {

  return (
  
        <div className='card'>
        


            <h1> {props.title} </h1>
            <img classname='gif'src={props.photo} alt="" />
            <p> {props.content} </p>
            <div className='buttons'>
            <Button
            onClick={()=> {
              window.open(props.source)
            }}
            >
              <GitHubIcon  />
              Source
            </Button>
            <br />
            <Button
            onClick={() =>{
              window.open(props.link)
            }}
            >
              <CloudIcon />
              Live Preview.
            </Button>
            </div>
               
            
             
             
        </div>

  )
}

export default Card
