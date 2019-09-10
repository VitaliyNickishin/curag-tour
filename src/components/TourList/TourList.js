import React, { Component } from 'react'
import './TourList.sass'
import Tour from '../Tour/Tour'
import {tourData} from '../tourData'
import './TourList.sass'

export default class TourList extends Component {
 state = {
  tours: tourData
 }
 render() {
  const {tours} = this.state;

  return (
   <section className="tourlist">
    {tours.map(tour => {
     return (
      <Tour 
       key={tour.id}
       item={tour}
      />
     )
    })}
   </section>
  )
 }
}
