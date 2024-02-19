import NavBar from "../../components/Navbar"
import { usePostsByUser, useUser } from "../../hooks"
import { Link } from "wouter"

const MyProfile = () => {
    const user = useUser()

    const username = user?.data?.username

    const publications = usePostsByUser({ username: user?.data?.username })

    return (
        <>
            <NavBar />
            <h1>{username}</h1>
            <section>
                {publications?.data?.content?.map((publication) => (
                    <Link href={`/post/${publication.id}`} key={publication.id}>
                        <p>{publication.title}</p>
                    </Link>
                ))}
            </section>
        </>
    )
}

export default MyProfile