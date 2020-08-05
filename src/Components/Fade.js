import { useSpring, animated } from 'react-spring';
import React from 'react';
import { Container } from 'react-bootstrap';



const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans4 = (x, y) => `translate3d(${x / 20}px,${y * 0}px,0)`

export default function Fade() {

    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

    return (
        <Container className={'works'} fluid>

            <div class="containerfade" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>

                <animated.div class="card1" style={{ transform: props.xy.interpolate(trans4) }} />
            </div>
        </Container>

    )
}