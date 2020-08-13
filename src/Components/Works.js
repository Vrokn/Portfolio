import React from 'react';
import Typed from 'react-typed';
import { Container } from 'react-bootstrap';

export default function Works() {
    return (
        <Container className={'works'} id='knot' fluid>
            <h1>&sdot; <Typed
                    strings={[
                        " PROJECTS "]}
                    typeSpeed={70}
                    backSpeed={50}
                    backDelay={2000}
                     loop /> &sdot;</h1>
        </Container>
    )
}