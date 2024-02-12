import { useForm } from "react-hook-form"
import NavBar from "../../components/Navbar"
import { useAuthor, useId, useOnePublication, usePublicationUpdate } from "../../hooks"

function UpdatePost () {
    const { register, handleSubmit } = useForm()
    const id = useId()
    const publication = useOnePublication({ publicationId: id})
    console.log('Publication: ', publication)
    const postedById = publication?.data?.content[0]?.posted_by

    const author = useAuthor({ authorId: postedById })
    console.log('Author: ', author)

    const doUpdate = usePublicationUpdate({ publicationId: id })

    return (
        <>
            <NavBar />
            <form onSubmit={handleSubmit(doUpdate)}>
            <input type="hidden" name="publicationId" id="publicationId" {...register('publicationId', {required: true})} value={id}  />
                <input type="text" name="title" id="title" {...register('title', {required: true})} defaultValue={publication?.data?.content[0]?.title} />
                <input type="text" name="post_text" id="post_text" {...register('post_text', {required: true})} defaultValue={publication?.data?.content[0]?.post_text} />
                <input type="submit" value='Save changes' />
            </form>
        </>
    )
}

export default UpdatePost