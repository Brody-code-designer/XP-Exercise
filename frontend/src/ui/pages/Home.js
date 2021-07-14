import React from "react"
import {Navigation} from "../shared/Navigation";
import {Footer} from "../shared/Footer";
import {Button, Col, Container, Row} from "react-bootstrap";

import goku from "../../images/goku-trainer.png"
import sakura from "../../images/sakura-trainer.png"
import korra from "../../images/korra-trainer.png"

import ReactPlayer from "react-player";

import "../styles.css"
import {OrbitControls} from "@react-three/drei";
import AnimationScene from "../AnimationScene";

export const Home = () => {
    return (
        <>
            <Navigation />
            <Container>
                <Row>
                    <h1 className="text-center">Trainers</h1>
                </Row>
                <Row className="mb-5">
                    <Col>
                        <img src={goku} alt="Goku training" className="rounded-circle border border-dark mx-auto d-block" width="250" height="250"/>
                    </Col>
                    <Col>
                        <img src={sakura} alt="Sakura training" className="rounded-circle border border-dark mx-auto d-block" width="250" height="250"/>
                    </Col>
                    <Col>
                        <img src={korra} alt="Korra training" className="rounded-circle border border-dark mx-auto d-block" width="250" height="250"/>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col>
                        <AnimationScene />

                    </Col>
                    <Col>
                    {/*npm module for runnning videos, see docs for more functionality*/}
                    <ReactPlayer url="https://www.youtube.com/watch?v=3ZHwkpyvDqE" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Button></Button>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}