import NavBar from "../../components/Navbar"

const CreatePost = () => {
    return (
        <>
            <NavBar />
            <form>
                <label htmlFor="title">Insert title</label>
                <input type="text" name="title" id="title" />
                <label htmlFor="post_text">Insert text</label>
                <input type="text" name="post_text" id="post_text" />
            </form>
        </>
    )
}

export default CreatePost