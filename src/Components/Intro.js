import React from 'react';
import Typed from 'react-typed';
import { Container } from 'react-bootstrap';

export default function Intro() {
    return (
        <Container className={'intro'} fluid>
            <h1>&sdot; <Typed
                    strings={[
                        " Hello! I'm Mateo ",
                        " Web developer ",
                        " Artist ",
                        " Music producer "]}
                    typeSpeed={60}
                    backSpeed={50}
                    loop /> &sdot;</h1>
        </Container>
    )
}