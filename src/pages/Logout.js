// React
import { useEffect } from "react"

// Axios
import axios from "axios"

const Logout = () => {

    useEffect(() => {
        // Check if user is already logged
        // axios.get(process.env.REACT_APP_API_URL + "/auth",
        // {
        //     withCredentials: true 
        // })
        // .then((response) => {
        //     if(!response.data.auth) {
        //         window.location.assign("/login")
        //     }
        // })
        // .catch((error) => {
        //     console.log(error)
        // })
        
        // // Disconnect user
        // axios.get(process.env.REACT_APP_API_URL + "/logout",
        // {
        //     withCredentials: true
        // })
        // .then((response) => {
        //     if(response.data.logout) {
        //         window.location.assign("/")
        //     }
        // })
        // .catch((error) => {
        //     console.log(error)
        // })
    }, [])

  return (
    <>
    </>
  )
}

export default Logout