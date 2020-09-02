import React from 'react';
import { Container } from 'react-bootstrap';
import { Parallax } from 'react-scroll-parallax';


export default function Description() {

    return (
        <Container className={'description'} fluid >
            <Parallax y={[-0, -55]}>
                <h5>Full Stack web developer with preferences in Front-End and design</h5>
            </Parallax>
            <Parallax y={[10, -20]}>
                <p>Hi! my name is Mateo Gómez Ossa I am an artist, music producer / DJ
                and now a full-stack developer in growth and training
                graduated from the Make it Real bootcamp.
                Curious developer eager for new knowledge. I pay close attention to detail.
                I am self-taught, proactive and I adapt very well to change.
                I have good communication and I am effective and efficient.  I'm building future
                projects and apps with a fast consumption design, simple design but
          structured and easy to use for all users.</p><br></br>
            </Parallax>
        </Container>
    )
}