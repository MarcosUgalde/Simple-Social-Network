import NavBar from "../../components/Navbar"
import { usePostsByUser, useUser } from "../../hooks"

const MyProfile = () => {
    const user = useUser()
    console.log('User: ', user)
    const username = user?.data?.username
    console.log(username)
    const publications = usePostsByUser({ username: user?.data?.username })
    console.log(publications)
    return (
        <>
            <NavBar />
            <h1>{user?.data?.username}</h1>
            <section>
                {publications?.data?.content?.map((publication) => (
                    <div key={publication.id}>
                        <p>{publication.title}</p>
                    </div>
                ))}
            </section>
        </>
    )
}

export default MyProfile