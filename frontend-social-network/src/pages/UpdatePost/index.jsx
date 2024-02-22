import Styled from './styles'
import { useForm } from "react-hook-form"
import NavBar from "../../components/Navbar"
import { useId, useOnePublication, usePublicationUpdate } from "../../hooks"

function UpdatePost () {
    const { register, handleSubmit } = useForm()
    const id = useId()
    const publication = useOnePublication({ publicationId: id})

    const doUpdate = usePublicationUpdate({ publicationId: id })

    return (
        <>
            <NavBar />
            <Styled.Body>
                <Styled.Form onSubmit={handleSubmit(doUpdate)}>
                    <input type="hidden" name="publicationId" id="publicationId" {...register('publicationId', {required: true})} value={id}  />
                    <Styled.Input type="text" name="title" id="title" {...register('title', {required: true})} defaultValue={publication?.data?.content[0]?.title} />
                    <Styled.Text type="text" name="post_text" id="post_text" {...register('post_text', {required: true})} defaultValue={publication?.data?.content[0]?.post_text} />
                    <Styled.Submit type="submit" value='Save changes' />
                </Styled.Form>
            </Styled.Body>
        </>
    )
}

export default UpdatePost