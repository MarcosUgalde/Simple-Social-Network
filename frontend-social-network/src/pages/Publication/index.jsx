import { useId, useOnePublication } from "../../hooks"

const Publication = () => {
    const id = useId()
    const publication = useOnePublication({ publicationId: id})
    console.log('Publication: ', publication)
    
    return (
        <>
            <h1>{publication?.data?.content[0]?.title}</h1>
            <p>{publication?.data?.content[0]?.post_text}</p>
            <p>{publication?.data?.content[0]?.posted_by}</p>
        </>
    )
}

export default Publication