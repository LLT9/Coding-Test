import React, { useEffect } from "react"
import "./ProfileScreen.css"
import Nav from "../Nav"
import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../features/userSlice"
import { logout } from "../features/userSlice"
import { useNavigate } from "react-router-dom"

function ProfileScreen() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(selectUser)
  useEffect(() => {
    if (user?.user == null) {
      navigate("/login")
      console.log(user)
    }
  }, [user])
  return (
    <div className="profileScreen">
      <Nav></Nav>
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
            className="avatar"
          ></img>
          <div className="profileScreen_details">
            <h2>{user?.user?.email}</h2>
            <div className="profileScreen_plans">
              <h3>Plans</h3>
              <button
                onClick={() => {
                  dispatch(logout())
                  navigate("/")
                }}
                className="profileScreen_signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
