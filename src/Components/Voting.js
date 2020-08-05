import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Parallax } from 'react-scroll-parallax';
import video1 from '../Videos/voting.mp4';
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
export default function Voting() {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 100, friction: 30 } }))

    return (
        <Container className={'Voting'} id='voting' fluid>
            <Row className="justify-content-md-center">
                <Col md>
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
                        <a className='refLink' href="https://vrokn.github.io/postsvoting/" target="_blank" rel="noopener noreferrer"> Posts Voting Blog </a>
                        <br></br>
                        <p>
                            This site inspired by the popular reddit allows us to vote and order blog posts by the number of votes all in real time.
                             The site uses Semanti UI as a framework and is built using React js that allow us to have responsive behavior.</p><br></br>
                    </Parallax>
                </Col>
            </Row>
        </Container>
    )
}