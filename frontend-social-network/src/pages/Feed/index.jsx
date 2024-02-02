import Styled from './styles'
import { usePublications } from "../../hooks"
import NavBar from '../../components/Navbar'

const Feed = () => {
    const { data: response, isLoading } = usePublications()
    console.log('Data para renderizar los posts: ', response)

    if(isLoading) return <p>Loading...</p>

    return (
        <>
            <NavBar />
            <h1>hello word</h1>
            <Styled.List>
                {response?.content?.map((publication) => {
                    return (
                        <section>
                            <li>{publication.title} - Liked by: {publication.likes} people</li>
                        </section>
                    )
                })}
            </Styled.List>
        </>
    )
}

export default Feed