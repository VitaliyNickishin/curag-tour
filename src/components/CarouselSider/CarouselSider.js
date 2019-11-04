import React, { Component } from 'react'
import {Container} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import ImgFirst from '../../img/header/1.png'
import ImgSecond from '../../img/header/slide-1.jpg'
import ImgThird from '../../img/header/slide-3.jpg'
import Button from '../Button/Button'
import { TourConsumer } from '../../context'
import Timer from '../../components/Timer/Timer'
import './CarouselSider.sass'


export default class CarouselSider extends Component {
 render () {
  return (
    <TourConsumer>
      {value => {
        const {openModal} = value;
        
        return (
          <section className="slider">
            
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ImgFirst}
                alt="First slide"
                />
                <Container>
                 <Carousel.Caption>
                  <h3>Лучшие предложения по солнечному Египту из Харькова</h3>
                  <Button name="btn-offer" onClick={() => openModal()}/>
                </Carousel.Caption> 
                </Container>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ImgSecond}
                alt="Third slide"
              />
              <Container>
                <Carousel.Caption >
                <h3>Exotic Paradise. Таиланд</h3>
                <Button name="btn-offer" onClick={() => openModal()}/>
              </Carousel.Caption>
              </Container>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ImgThird}
                alt="Third slide"
              />
              <Container>
                <Carousel.Caption>
                <h3>Burj Al Arab Hotel, Dubai. ОАЭ</h3>
                <Button name="btn-offer" onClick={() => openModal()}/>
              </Carousel.Caption>
              </Container>
            </Carousel.Item>
            
          </Carousel>
          <Timer/>
          </section>
        )
      }}
    </TourConsumer>
    
   )
 }
}
