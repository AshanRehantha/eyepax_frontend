import React from 'react';

import { Carousel } from 'react-bootstrap';

export const Carousels = (props) => {
  return (
    <Carousel>
        {props.slider.map((carousel) =>(
            <Carousel.Item>
                <img
                className="d-block w-100 h-50"
                src={carousel.image}
                alt={carousel.title}
                />
                <Carousel.Caption>
                <h3>{carousel.title}</h3>
                <p>{carousel.subtitle}</p>
                </Carousel.Caption>
            </Carousel.Item>
        ))}
    </Carousel>
  )
}
