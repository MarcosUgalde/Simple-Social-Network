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
            <Styled.Body>
                <h1>Welcome back {user}!</h1>
                <Styled.List>
                    {response?.content?.map((publication) => {
                        return (
                            <Styled.Item>
                                <Styled.Li> <Styled.Anchor href={`/post/${publication.id}`}>{publication.title}</Styled.Anchor> <br /> Liked by: {publication.likes} people</Styled.Li>
                            </Styled.Item>
                        )
                    })}
                </Styled.List>
            </Styled.Body>
        </>
    )
}

export default Feed