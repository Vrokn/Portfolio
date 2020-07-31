import React from 'react';
import Typed from 'react-typed';
import { Container } from 'react-bootstrap';


export default function Intro() {

    return (
        <Container className={'intro'} >
            <h1><br></br> &sdot;	<Typed
                strings={[
                    "Hello! I'm Mateo.",
                    "Web developer",
                    "Artist",
                    "Music producer."]}
                typeSpeed={60}
                backSpeed={50}
                loop /> &sdot;</h1><br></br>    <br></br>
        </Container>
    )
}