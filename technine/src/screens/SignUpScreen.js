import React, { useEffect, useRef, useState } from "react"
import "./SignUpScreen.css"
import { authenticateAccountAndPassword } from "../APIs.js"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../features/userSlice"
import { login, logout } from "../features/userSlice"

function SignUpScreen() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const [defaultAccount, setDefaultAccount] = useState("admin")
  const [defaultPassword, setDefaultPassword] = useState("Admin&8181")
  const register = (e) => {
    e.preventDefault()
  }

  async function signIn(e) {
    e.preventDefault()
    const ValidationResult = await authenticateAccountAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
    console.log(ValidationResult.isAuthenticated)
    if (ValidationResult.isAuthenticated) {
      dispatch(
        login({
          email: ValidationResult.email,
          uid: ValidationResult.uid,
        })
      )
      navigate("/")
    }
  }

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input
          ref={emailRef}
          placeholder="Email"
          type="email"
          value={defaultAccount}
          onChange={(e) => setDefaultAccount(e.target.value)}
        ></input>
        <input
          ref={passwordRef}
          placeholder="Password"
          type="password"
          value={defaultPassword}
          onChange={(e) => setDefaultPassword(e.target.value)}
        ></input>
        <button type="submit" onClick={(e) => signIn(e)}>
          Sign In
        </button>
        <h4>
          <span className="signupScreen_gray">New to Netflix? </span>
          <span className="signupScreen_link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  )
}

export default SignUpScreen
