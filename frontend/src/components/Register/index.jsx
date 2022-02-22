import React from 'react'
import { Card, Button, Row, Footer } from 'react-bootstrap';
// import bicycleImg from '../../assets/img/bicycle.jpeg';
import "./styles.css";

export default function Register () {
    return(
        <>
            <div className="register-wrap">
                <h2>Register</h2>
                
                <div className="form">
                    <input type="text" placeholder="Username" name="user" />
                    <input type="email" placeholder="Email" name="email" />
                    <input type="password" placeholder="Password" name="password" />
                    <input type="password" placeholder="Repeat Password" name="repeat_password" />
                    <button> Register </button>
                </div>
            </div>
        </>
    )
}