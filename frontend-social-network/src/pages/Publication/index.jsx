import { useId, useOnePublication } from "../../hooks"

const Publication = () => {
    const id = useId()
    const publication = useOnePublication({ publicationId: id})
    console.log('Publication: ', publication)
    
    return (
        <>hello world</>
    )
}

export default Publication