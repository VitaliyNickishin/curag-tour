import React from 'react'
import { MdClear } from "react-icons/md"
import './ButtonClose.sass'

export default function ButtonClose(props) {
 const {name, onClick} = props;
 return (
  <button
   type="button"
   className={`btn-close ${name}`}
   onClick={onClick}
  >
   <MdClear/>
  </button>
 )
}
