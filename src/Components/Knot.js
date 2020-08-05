import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Parallax } from 'react-scroll-parallax';
import { useSpring, animated } from 'react-spring'

import video1 from '../Videos/knot.mp4';
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default function Knot() {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 100, friction: 30 } }))

    return (
        <Container className={'Knot'} fluid>
            <Row>
                <Col md={{ order: 'last' }}>
                    <Parallax y={[0, -20]}>
                        <animated.div
                            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                            onMouseLeave={() => set({ xys: [0, 0, 1] })}
                            style={{ transform: props.xys.interpolate(trans) }}                        >
                            <video className='video' loop autoPlay muted width="100%">
                                <source src={video1} type='video/mp4' />
                            </video>
                        </animated.div>
                    </Parallax>
                </Col>
                <Col md>
                    <Parallax y={[0, -20]}>
                        <a className='refLink' href="https://vrokn.github.io/bootstrap-e-commerce/" target="_blank" rel="noopener noreferrer">
                            Knot E-commerce </a>
                        <br></br>
                        <div id='#page'>
                            <p >
                                Here we can see an e-commerce designed and created for the Knot t-shirt brand using Bootstrap as a framework.
                                On this site we can highlight some of the components of Bootstrap and the possibilities it offers us,
                                such as achieving an adaptive and responsive design.</p>
                        </div>
                    </Parallax>
                </Col>
            </Row>
        </Container>
    )
}