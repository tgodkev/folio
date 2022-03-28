import React from 'react'
import html from '../images/htmlimg.png'
import css from '../images/cssimg.png'
import javascript from '../images/javascriptimg.png'
import mongo from '../images/mongoimg.png'
import node from '../images/nodeimg.png'
import firebase from '../images/firebaseimg.png'
import react2 from '../images/react2.png'
import npmimg from '../images/npmimg.png'
function Skills() {
  return (
    <div className='skills'>
        <h1>Technologies</h1>
        <div className='container'>
        <div class='skillz'>
        <span class="tooltip" data-tooltip="HTML5"><img src={html} alt="" /></span>
        </div>

        <div class='skillz'>
        <span class="tooltip" data-tooltip="CSS3"><img src={css} alt="" /></span>
        </div>    

        <div class='skillz'>
        <span class="tooltip" data-tooltip="Javascript"><img src={javascript} alt="" /></span>
        </div>
        
        <div class='skillz'>
        <span class="tooltip" data-tooltip="React.js"><img src={react2} alt="" /></span>
        </div>

        <div class='skillz'>
        <span class="tooltip" data-tooltip="Node.js"><img src={node} alt="" /></span>
        </div>
      
        <div class='skillz'>
        <span class="tooltip" data-tooltip="MongoDb"><img src={mongo} alt="" /></span>
        </div>
      
        <div class='skillz'>
        <span class="tooltip" data-tooltip="Firebase"> <img src={firebase} alt="" /></span>
        </div>
        
        <div class='skillz'>
        <span class="tooltip" data-tooltip="Node Packet Manager."><img src={npmimg} alt="" /></span>
        </div>
        
       
        </div>
    </div>
  )
}


export default Skills


