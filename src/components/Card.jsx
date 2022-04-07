import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import CloudIcon from '@mui/icons-material/Cloud';
import Button from '@mui/material/Button';

function Card(props) {

  return (
  
        <div className='card'>
                <span class="popup" data-tooltip= ''
                url={props.source}
        > 


            <h1> {props.title} </h1>
            <img classname='gif'src={props.photo} alt="" />
            <span class='popupbutton'>
                   <a href={props.source}>Source</a>
                   <br />
                        <a href={props.link}> Live Preview </a>
                   
               </span>
               
            <p> {props.content} </p>
               
            
              </span>
             
        </div>

  )
}

export default Card
