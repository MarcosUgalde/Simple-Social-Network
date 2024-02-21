import Styled from './styles'
import NavBar from "../../components/Navbar"
import { useForm } from "react-hook-form"
import { useInsertion } from "../../hooks"

const CreatePost = () => {
    const { register, handleSubmit } = useForm()
    const doInsertion = useInsertion()

    return (
        <>
            <NavBar />
            <Styled.Body>
                <Styled.Form onSubmit={handleSubmit(doInsertion)}>
                    <Styled.Field>
                        <label htmlFor="title">Insert title</label>
                        <Styled.Input type="text" name="title" id="title" {...register('title', {required: true})} />
                    </Styled.Field>
                    <Styled.Field>
                        <label htmlFor="post_text">Insert text</label>
                        <Styled.Input type="text" name="post_text" id="post_text" {...register('post_text', {required: true})} />
                    </Styled.Field>
                    <Styled.Submit type="submit" />
                </Styled.Form>
            </Styled.Body>
        </>
    )
}

export default CreatePost