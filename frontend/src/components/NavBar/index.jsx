import React from 'react'
export default function Navbar () {
    return(
       <nav className="nav navbar-expand-lg navbar-dark bg-black border-bottom">
            <div className="container-fluid">
                <a className="navbar-brand m-0" >Onthewheels</a>
                <button className="navbar-toggler w-100" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" >Home</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}