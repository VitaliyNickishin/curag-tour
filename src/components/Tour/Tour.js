import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Tour.sass'

export default class Tour extends Component {
 
 render() {
  const {url,title,date,info,price,person} = this.props.item
  
  
  return (
   <article className="tour">
    <div className="tour-img">
     <img
      src={url} 
      alt=""
     />
     </div>
     <div className="tour-info">
      <h3>{title}</h3>
      <span>{date}</span>
      <div className="line"></div>
      <p>{info}</p>
      <strong>{price}</strong>
      <sup>{person}</sup>
     </div>
     <Link to='/' className='tour-btn'>
      <i className="fas fa-chevron-right arrow-right"></i>
     </Link>
   </article>
  )
 }
}
