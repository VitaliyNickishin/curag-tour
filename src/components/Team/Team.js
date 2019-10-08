import React, { Component } from 'react'
import {Container} from 'react-bootstrap'
import Title from '../Title/Title'
import './Team.sass'
import PersonCard from '../PersonCard/PersonCard'
import {personData} from '../tourData'


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
     <p className="slogan">Самое главное для нас – Ваше доверие! 
      Мы всегда дорожим своими клиентами и предлагаем им лучшие 
      варианты.</p>
    </div>
    {person.map(item => {
     return (
      <div className="team-body">
       <PersonCard 
        key={item.id}
        card={item}
       />
      </div>
     )
    })}
   </Container>
  </section>
  )
 }
}
