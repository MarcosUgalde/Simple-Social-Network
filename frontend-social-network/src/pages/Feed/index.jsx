import { usePublications } from "../../hooks"

const Feed = () => {
    const { data: response, isLoading } = usePublications()
    console.log('Data para renderizar los posts: ', response)

    if(isLoading) return <p>Loading...</p>

    return (
        <>
            <h1>hello word</h1>
            <ul>
                {response?.content?.map((publication) => {
                    return (
                        <li>{publication.title} -  Liked by: {publication.likes} people</li>
                    )
                })}
            </ul>
        </>
    )
}

export default Feed