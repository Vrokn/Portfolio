import React from 'react';
import Typed from 'react-typed';
import { Container } from 'react-bootstrap';

export default function Works() {
    return (
        <Container className={'works'} fluid>
            <h1>&sdot; <Typed
                    strings={[
                        " WORKS "]}
                    typeSpeed={60}
                    backSpeed={50}
                     /> &sdot;</h1>
        </Container>
    )
}