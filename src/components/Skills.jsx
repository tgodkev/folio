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
        <img src={html} alt="" />
        <img src={css} alt="" />
        <img src={javascript} alt="" />
        <img src={react2} alt="" />
        <img src={node} alt="" />
        <img src={mongo} alt="" />
        <img src={firebase} alt="" />
        <img src={npmimg} alt="" />
       
        </div>
    </div>
  )
}


export default Skills
