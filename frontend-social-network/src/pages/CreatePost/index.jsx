import NavBar from "../../components/Navbar"
import { useForm } from "react-hook-form"
import { useInsertion } from "../../hooks"

const CreatePost = () => {
    const { register, handleSubmit } = useForm()
    const doInsertion = useInsertion()

    return (
        <>
            <NavBar />
            <form onSubmit={handleSubmit(doInsertion)}>
                <label htmlFor="title">Insert title</label>
                <input type="text" name="title" id="title" {...register('title', {required: true})} />
                <label htmlFor="post_text">Insert text</label>
                <input type="text" name="post_text" id="post_text" {...register('post_text', {required: true})} />
                <input type="submit" />
            </form>
        </>
    )
}

export default CreatePost