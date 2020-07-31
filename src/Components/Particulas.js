import React from 'react';
import Particles from "react-tsparticles";

export default function Particulas() {

    return (
        <Particles
            id="tsparticles"
            options={{
                background: {
                    image: "url('./Mateobg.png')",
                    repeat: 'no-repeat',
                    size: 'cover',
                    position: 'center center',
                    color: {
                        value: "#000000",
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    detectsOn: "window",
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "bubble",
                        },
                        resize: true,
                    },
                    modes: {
                        bubble: {
                            distance: 100,
                            duration: 3,
                            opacity: 0.8,
                            size: 5,
                        },
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: true,
                        speed: 1.5,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: false,
                            value_area: 800,
                        },
                        value: 60,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        random: true,
                        value: 3,
                    },
                },
                detectRetina: true,
            }}
        />
    )
}