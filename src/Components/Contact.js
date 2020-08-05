import React from 'react';
import { Container } from 'react-bootstrap';

export default function Contact() {
    return (

        <Container className='contact' fluid id="contact" >
            <div><h3>&sdot;
                <a href="mailto:name@email.com" target="_blank" rel="noopener noreferrer"> E-mail &sdot;</a>
                <a href="https://wa.me/+573196127049" target="_blank" rel="noopener noreferrer"> Whatsapp &sdot;</a>
                <a href="https://www.facebook.com/vrokn" target="_blank" rel="noopener noreferrer"> Facebook &sdot;</a>
                <a href="https://www.instagram.com/vrokn_" target="_blank" rel="noopener noreferrer"> Instagram &sdot;</a>
                <a href="https://www.linkedin.com/in/Mateogomezossa" target="_blank" rel="noopener noreferrer"> LinkedIn &sdot;</a>
                <a href="https://www.soundcloud.com/vrokn" target="_blank" rel="noopener noreferrer"> SoundCloud &sdot;</a></h3>
            </div>
        </Container>

    )
}