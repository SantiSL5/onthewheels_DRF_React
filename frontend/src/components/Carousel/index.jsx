import React from 'react'
import { Carousel } from 'react-bootstrap';
import bicycleImg from '../../assets/img/bicycle.jpeg';
import "./styles.css";

export default function CarouselHome () {
    return(
        <>
            <Carousel>
                <Carousel.Item interval={3000}>
                    <img className="w-100" src={bicycleImg} alt="First bicycle" />
                    <Carousel.Caption>
                    <h3>First Bicycle</h3>
                    <p>First Bicycle</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img className="d-block w-100" src={bicycleImg} alt="Second bicycle"/>

                    <Carousel.Caption>
                    <h3>Second Bicycle</h3>
                    <p>Second Bicycle</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img className="d-block w-100" src={bicycleImg} alt="Third bicycle"/>

                    <Carousel.Caption>
                    <h3>Third Bicycle</h3>
                    <p>Third Bicycle</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}