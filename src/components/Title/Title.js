import React, {useState} from 'react'
import './Title.sass'

export default function Title({title}) {
 // const [color, setcolor] = useState(style="color:red")
 return (
  <div className="section-title">
   <h4>{title}</h4>
  </div>
 )
}
