import React from "react"
import LoginForm from "../../components/Login"
import RegisterForm from "../../components/Register"
import "./styles.css"

export default function Login() {
  const [showLogin, setShowLogin] = React.useState(true)
  const changeFormLogin = () => setShowLogin(true)
  const changeFormRegister = () => setShowLogin(false)
    // return (
    //     <div>
    // <input type="submit" value="Search" onClick={onClick} />
    // { showResults ? <Register/> : <Login/> }
    // </div>

  return (
    <>
      <header className="o-header">
      </header>
      <div className="App-wrapper">
        <div className="App-main">
            <div className="formdiv">
                <div className="buttons">
                    <button className="regbutton" onClick={changeFormRegister}>Register</button>
                    <button className="logbutton" onClick={changeFormLogin}>Login</button>
                </div>
                { showLogin ? <LoginForm/> : <RegisterForm/> }
            </div>
        </div>
      </div>
    </>
  )
}