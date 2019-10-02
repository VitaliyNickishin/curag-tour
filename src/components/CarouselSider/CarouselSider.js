import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import ImgFirst from '../../img/header/1.png'
import ImgSecond from '../../img/header/2.png'
import ImgThird from '../../img/header/3.png'
import Button from '../Button/Button'
import { TourConsumer } from '../../context'
import './CarouselSider.sass'


export default class CarouselSider extends Component {
 render () {
  return (
    <TourConsumer>
      {value => {
        const {openModal} = value;
        
        return (
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ImgFirst}
                alt="First slide"
              />
              <Carousel.Caption onClick={() => openModal()}>
                <h3>Лучшие предложения по солнечному Египту из Харькова</h3>
                <Button name="btn-offer"/>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ImgSecond}
                alt="Third slide"
              />
              <Carousel.Caption onClick={() => openModal()}>
                <h3>Second slide label</h3>
                <Button name="btn-offer" />
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ImgThird}
                alt="Third slide"
              />
              <Carousel.Caption onClick={() => openModal()}>
                <h3>Third slide label</h3>
                <Button name="btn-offer" />
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        )
      }}
    </TourConsumer>
    
   )
 }
}
