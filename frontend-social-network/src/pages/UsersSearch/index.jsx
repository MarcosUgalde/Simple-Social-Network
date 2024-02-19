import NavBar from "../../components/Navbar"
import { useSearch, useUsername } from "../../hooks"

const UsersSearch = () => {
    const name = useUsername()

    const result = useSearch({name})
    console.log('search result: ', result)

    return (
        <>
            <NavBar />
            <h2>Results</h2>
            <section>{result?.data?.map((user) => (
                <a href="">{user?.username}</a>
            ))
                }
            </section>
        </>
    )
}

export default UsersSearch