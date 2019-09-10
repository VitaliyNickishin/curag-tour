import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import ImgFirst from '../../img/header/1.png'
import ImgSecond from '../../img/header/2.png'
import ImgThird from '../../img/header/3.png'
import './CarouselSider.sass'
import Button from '../Button/Button'
import BgBunner from '../BgBunner/BgBunner'

export default function CarouselSider() {
 return (
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ImgFirst}
      alt="First slide"
    />
    <Carousel.Caption>
    <BgBunner />
      <h3>Лучшие предложения по солнечному Египту из Харькова</h3>
      <Button />
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ImgSecond}
      alt="Third slide"
    />

    <Carousel.Caption>
    <BgBunner />
      <h3>Second slide label</h3>
      <Button />
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ImgThird}
      alt="Third slide"
    />

    <Carousel.Caption>
    <BgBunner />
      <h3>Third slide label</h3>
      <Button />
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
 )
}
