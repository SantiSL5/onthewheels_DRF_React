import React from 'react'
import { Card, Button, Row, Footer } from 'react-bootstrap';
import bicycleImg from '../../assets/img/bicycle.jpeg';
// import "./styles.css";

export default function TaxesHome () {
    return(
        <>
            <h2 className='text-success'>Taxes</h2>
            <Row md={3} className="g-0 mb-3 justify-content-md-center text-success">
                <Card>
                    <Card.Img variant="top" src={bicycleImg} />
                    <Card.Body>
                    <Card.Title>Casual use</Card.Title>
                    <ul>
                        <li>0,50€ each 30min fraction</li>
                        <li>1 month balance duration</li>
                    </ul>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary">5€</Button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={bicycleImg} />
                    <Card.Body>
                    <Card.Title>Moderate use</Card.Title>
                    <ul>
                        <li>Free use each first 30min</li>
                        <li>0,50€ each 30min fraction</li>
                        <li>1 year balance duration</li>
                    </ul>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary">15€</Button>
                    </Card.Footer>
                </Card>
            </Row>
        </>
    )
}