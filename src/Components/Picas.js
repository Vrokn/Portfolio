import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Parallax } from 'react-scroll-parallax';
import video1 from '../Videos/picas.mp4';
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
export default function Picas() {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 100, friction: 30 } }))

    return (
        <Container className={'Picas'} fluid id='picas'>
            <Row className="justify-content-md-center">
                <Col md={{ order: 'last' }}>
                    <Parallax y={[15, -20]}>
                        <animated.div
                            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                            onMouseLeave={() => set({ xys: [0, 0, 1] })}
                            style={{ transform: props.xys.interpolate(trans) }}
                        >
                            <video className='video' loop autoPlay muted width="100%">
                                <source src={video1} type='video/mp4' />
                            </video>
                        </animated.div>
                    </Parallax>
                </Col>
                <Col md>
                    <Parallax y={[15, -20]}>
                        <a className='refLink' href="https://vrokn.github.io/picasyfijas/" target="_blank" rel="noopener noreferrer"> Bulls and Cows </a>
                        <br></br>
                        <p>Bulls and cows (Picas y Fijas) is a traditional game that consists of guessing a secret 4-digit number in the
                        fewest number of attempts.
                        Bulls (Fijas) gives the number of numbers that are in a correct box and Cows (Picas)
                        the number of numbers that are within the 4 digits to guess but are in the wrong position.
                        This little game is built using Jquery and JavaScript that allow us to
                             read the events and generate the random number only with code.</p><br></br>
                    </Parallax>
                </Col>
            </Row>
        </Container>
    )
}