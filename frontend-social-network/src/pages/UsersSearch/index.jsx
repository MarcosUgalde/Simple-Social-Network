import NavBar from "../../components/Navbar"
import { useSearch, useUsername } from "../../hooks"


const UsersSearch = () => {
    const name = useUsername()

    const result = useSearch({name})
    console.log('search result: ', result)
    return (
        <>
            <NavBar />
            Hi there!
        </>
    )
}

export default UsersSearch