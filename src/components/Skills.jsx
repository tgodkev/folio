import React from 'react'
import html from '../images/htmlimg.png'
import css from '../images/cssimg.png'
import javascript from '../images/javascriptimg.png'
import mongo from '../images/mongoimg.png'
import node from '../images/nodeimg.png'
import firebase from '../images/firebaseimg.png'
import react2 from '../images/react2.png'
import npmimg from '../images/npmimg.png'
import shopify from '../images/shopify.png'
import wordpress from '../images/wordpress.png'
function Skills() {
  return (
    
    <div className='skills'>
    <h1 className='skillstitle'>Technologies</h1>
        <div className='container'>
        <div class='skillz'>
        <span class="tooltip" data-tooltip="HTML5"><img src={html} alt="html icon" /></span>
        </div>

        <div class='skillz'>
        <span class="tooltip" data-tooltip="CSS3"><img src={css} alt="css icon" /></span>
        </div>    

        <div class='skillz'>
        <span class="tooltip" data-tooltip="Javascript"><img src={javascript} alt="javascript icon" /></span>
        </div>
        
        <div class='skillz'>
        <span class="tooltip" data-tooltip="React.js"><img src={react2} alt="react icon" /></span>
        </div>

        <div class='skillz'>
        <span class="tooltip" data-tooltip="Node.js"><img src={node} alt="node.js icon" /></span>
        </div>
      
        <div class='skillz'>
        <span class="tooltip" data-tooltip="MongoDb"><img src={mongo} alt="mongodb icon " /></span>
        </div>
      
        <div class='skillz'>
        <span class="tooltip" data-tooltip="Firebase"> <img src={firebase} alt="fire base icon" /></span>
        </div>
        
        <div class='skillz'>
        <span class="tooltip" data-tooltip="NPM."><img src={npmimg} alt="npm icon" /></span>
        </div>
        
        <div class='skillz'>
        <span class="tooltip" data-tooltip="Shopify."><img src={shopify} alt="shopify icon" /></span>
        </div>
        
        <div class='skillz'>
        <span class="tooltip" data-tooltip="Wordpress."><img src={wordpress} alt="wordpress icon" /></span>
        </div>
       
        </div>
    </div>
  )
}


export default Skills


