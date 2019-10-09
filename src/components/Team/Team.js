import React, { Component } from 'react'
import {Container} from 'react-bootstrap'
import Title from '../Title/Title'
import PersonCard from '../PersonCard/PersonCard'
import {personData} from '../tourData'
import shell from '../../img/company/shell.png'
import photos from '../../img/company/photos.png'
import './Team.sass'


export default class Team extends Component {
 state = {
  person: personData
 }
 render() {
  const {person} = this.state

  return (
   <section className="team">
   <Container>

    <div className="team-header">
     <Title name="section-title team-title" title="Наша команда" />
     <p>Самое главное для нас – Ваше доверие! 
      Мы всегда дорожим своими клиентами и предлагаем им лучшие 
      варианты.</p>
    </div>

    <div className="team-body">
      <img className="shell" src={shell} alt="shell"/>
      {person.map(item => {
      return (
        <PersonCard 
          key={item.id}
          card={item}
        />
      )
      })}
      <img className="photos" src={photos} alt="photos"/>
    </div>
   </Container>
  </section>
  )
 }
}
