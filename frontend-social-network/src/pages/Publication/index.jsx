import NavBar from "../../components/Navbar"
import { useAuthor, useId, useOnePublication } from "../../hooks"

const Publication = () => {
    const id = useId()
    const publication = useOnePublication({ publicationId: id})
    console.log('Publication: ', publication)
    const postedById = publication?.data?.content[0]?.posted_by

    const author = useAuthor({ authorId: postedById })
    console.log('Author: ', author)
    
    return (
        <>
            <NavBar />
            <h1>{publication?.data?.content[0]?.title}</h1>
            <p>{publication?.data?.content[0]?.post_text}</p>
            <p>Liked by {publication?.data?.content[0]?.likes} people</p>
            <p>{author?.data?.content[0]?.username}</p>
            <button>Like</button>
        </>
    )
}

export default Publication