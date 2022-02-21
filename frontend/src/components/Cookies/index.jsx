import React from 'react'
import { Alert, Button} from 'react-bootstrap';
import { useState } from 'react';

export default function Cookies () {
    const [show, setShow] = useState(true);

    return (
        <>
        <Alert className='fixed-bottom' show={show} variant="warning">
            <Alert.Heading>Advice Cookies</Alert.Heading>
            <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="warning">
                I accept
            </Button>
            </div>
        </Alert>
        </>
    );
}