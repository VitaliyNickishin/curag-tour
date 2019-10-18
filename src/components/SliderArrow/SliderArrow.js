import React from 'react'
import './SliderArrow.sass'

export default function SliderArrow(props) {
 const {name, onClick, children} = props;
 return (
    <button
     type="button"
     className={name}
     onClick={onClick}
    >
     {children}
    </button>
 )
}
