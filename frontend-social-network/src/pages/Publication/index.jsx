import NavBar from "../../components/Navbar"
import { useAuthor, useId, useLike, useOnePublication } from "../../hooks"

const Publication = () => {
    const id = useId()
    const publication = useOnePublication({ publicationId: id})
    console.log('Publication: ', publication)
    const postedById = publication?.data?.content[0]?.posted_by

    const author = useAuthor({ authorId: postedById })
    console.log('Author: ', author)

    const addLike = useLike({ publicationId: id })
    console.log('Add Like data: ', addLike)

    const handleLikeClick = async() => {
        
        await addLike
    }
    
    return (
        <>
            <NavBar />
            <h1>{publication?.data?.content[0]?.title}</h1>
            <p>{publication?.data?.content[0]?.post_text}</p>
            <p>Liked by {publication?.data?.content[0]?.likes} people</p>
            <p>{author?.data?.content[0]?.username}</p>
            <button onClick={handleLikeClick}>Like</button>
        </>
    )
}

export default Publication