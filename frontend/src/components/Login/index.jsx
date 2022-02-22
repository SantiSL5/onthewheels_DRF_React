import React from 'react'
import { Card, Button, Row, Footer } from 'react-bootstrap';
// import bicycleImg from '../../assets/img/bicycle.jpeg';
import "./styles.css";

export default function Login () {
    return(
        <>
            <div className="login-wrap">
                <h2>Login</h2>                
                <div className="form">
                    <input type="text" placeholder="Username" name="user" />
                    <input type="password" placeholder="Password" name="password" />
                    <button> Login </button>
                </div>
            </div>
        </>
    )
}