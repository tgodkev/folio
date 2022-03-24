import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import CloudIcon from '@mui/icons-material/Cloud';
import Button from '@mui/material/Button';

function Card(props) {
  return (
  
        <div className='card'>
            <h1> {props.title} </h1>
            <img src={props.photo} alt="" />
            <p> {props.content} </p>
            <div className='buttons'>
            <Button onClick={()=>{
                window.open(props.link)
            }}
            variant='contained'
            color='primary'
            >
                Live Demo.  <CloudIcon/>
            </Button> {' '}
          
             <Button color='primary' onClick={()=>{
                 window.open(props.source)
             }}  variant='contained'>Source Code.<GitHubIcon /></Button>
             
             </div>
             
        </div>

  )
}

export default Card
