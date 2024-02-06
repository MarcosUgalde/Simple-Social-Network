import NavBar from "../../components/Navbar"
import { useUser } from "../../hooks"

const MyProfile = () => {
    const user = useUser()
    console.log('User: ', user)
    return (
        <>
            <NavBar />
            <h1>{user?.data?.username}</h1>
        </>
    )
}

export default MyProfile