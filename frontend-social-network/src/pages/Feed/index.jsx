import Styled from './styles'
import { usePublications, useUser } from "../../hooks"
import NavBar from '../../components/Navbar'

const Feed = () => {
    const { data: response, isLoading } = usePublications()
    const user = useUser().data?.username

    if(isLoading) return <p>Loading...</p>

    return (
        <>
            <NavBar />
            <h1>Welcome back {user}!</h1>
            <Styled.List>
                {response?.content?.map((publication) => {
                    return (
                        <section>
                            <li> <a href={`/post/${publication.id}`}>{publication.title}</a> - Liked by: {publication.likes} people</li>
                        </section>
                    )
                })}
            </Styled.List>
        </>
    )
}

export default Feed