import { useSelector } from "react-redux"
import "./App.css"
import HomeScreen from "./screens/HomeScreen"
import { selectUser } from "./features/userSlice"
import { useEffect } from "react"

function App() {
  const user = useSelector(selectUser)
  useEffect(() => {
    console.log(user)
  }, [user])
  return (
    <div className="app">
      <HomeScreen></HomeScreen>
    </div>
  )
}

export default App
