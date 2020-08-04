import React from 'react';
import { Container } from 'react-bootstrap';
import { Parallax } from 'react-scroll-parallax';

export default function Page1() {

    return (
        <Container className={'page1'} fluid >
                <div className='vid1'>
                    <video loop autoPlay muted>
                        <source src='../Videos/knot.mp4' type="video/mp4" />
                    </video>
                </div>            
                <p>E commerce test</p><br></br>
        </Container>
    )
}