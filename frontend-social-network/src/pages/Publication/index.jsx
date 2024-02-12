import NavBar from "../../components/Navbar"
import { useLocation } from 'wouter';
import { useAuthor, useId, useLike, useOnePublication } from "../../hooks"

const Publication = () => {
    const id = useId()
    const [, setLocation] = useLocation();
    const publication = useOnePublication({ publicationId: id})
    console.log('Publication: ', publication)
    const postedById = publication?.data?.content[0]?.posted_by

    const author = useAuthor({ authorId: postedById })
    console.log('Author: ', author)

    const doLike = useLike({ publicationId: id })
    // console.log('Add Like data: ', addLike)

    const handleLikeClick = async() => { 
        await doLike()
    }

    const handleUpdateClick = () => {
        setLocation(`/update/${id}`);
      };
    
    return (
        <>
            <NavBar />
            <h1>{publication?.data?.content[0]?.title}</h1>
            <p>{publication?.data?.content[0]?.post_text}</p>
            <p>Liked by {publication?.data?.content[0]?.likes} people</p>
            <p>{author?.data?.content[0]?.username}</p>
            <button onClick={handleLikeClick}>Like</button>
            <button onClick={handleUpdateClick}>Update</button>
        </>
    )
}

export default Publication